#!/usr/bin/env python3
from __future__ import annotations

import json
import re
import sys
from pathlib import Path


def update_i18n_hmr(path: Path) -> bool:
	if not path.exists():
		return False

	content = path.read_text(encoding="utf-8")
	needle = "import.meta.glob('@n8n/i18n/locales/*.json'"
	if needle not in content:
		return False

	replacement = "import.meta.glob('../../../../@n8n/i18n/src/locales/*.json'"
	updated = content.replace(needle, replacement, 1)
	path.write_text(updated, encoding="utf-8")
	return True


def _read_package_entry(package_dir: Path) -> str | None:
	package_json = package_dir / "package.json"
	if not package_json.exists():
		return None

	try:
		data = json.loads(package_json.read_text(encoding="utf-8"))
	except Exception:
		return None

	for key in ("module", "main"):
		value = data.get(key)
		if isinstance(value, str) and value:
			entry = (package_dir / value).resolve()
			if entry.exists():
				return str(entry)
	return None


def _strip_codemirror_alias_block(content: str) -> tuple[str, bool]:
	changed = False
	pattern = re.compile(r"\n?const codemirrorHtmlPackageDir = [\s\S]*?const codemirrorHtmlAlias = .*?;\n")
	if pattern.search(content):
		content = pattern.sub("\n", content, count=1)
		changed = True

	if "\tcodemirrorHtmlAlias,\n" in content:
		content = content.replace("\tcodemirrorHtmlAlias,\n", "")
		changed = True

	if "existsSync(" not in content and "from 'fs';" in content:
		content = content.replace("import { existsSync } from 'fs';\n", "")
		changed = True

	return content, changed


def _replace_imports(editor_ui_dir: Path, target_pkg: str) -> bool:
	changed = False
	for file_path in list(editor_ui_dir.rglob("*.ts")) + list(editor_ui_dir.rglob("*.vue")):
		file_content = file_path.read_text(encoding="utf-8")
		if "@n8n/codemirror-lang-html" in file_content:
			file_content = file_content.replace("@n8n/codemirror-lang-html", target_pkg)
			file_path.write_text(file_content, encoding="utf-8")
			changed = True
	return changed


def ensure_codemirror_resolution(editor_ui_dir: Path, vite_config: Path) -> bool:
	if not vite_config.exists():
		return False

	content = vite_config.read_text(encoding="utf-8")
	changed = False

	content, did_change = _strip_codemirror_alias_block(content)
	changed = changed or did_change

	root_dir = editor_ui_dir.parents[3]
	workspace_pkg = root_dir / "packages" / "@n8n" / "codemirror-lang-html"
	workspace_entry = workspace_pkg / "src" / "html.ts"
	node_pkg = root_dir / "node_modules" / "@n8n" / "codemirror-lang-html"
	node_entry = _read_package_entry(node_pkg)
	fallback_pkg = root_dir / "node_modules" / "codemirror-lang-html-n8n"
	fallback_entry = _read_package_entry(fallback_pkg)

	if workspace_entry.exists():
		resolution_mode = ("alias", str(workspace_entry.resolve()))
	elif node_entry:
		resolution_mode = ("alias", node_entry)
	elif fallback_entry:
		resolution_mode = ("import", "codemirror-lang-html-n8n")
	else:
		raise RuntimeError(
			"Neither @n8n/codemirror-lang-html nor codemirror-lang-html-n8n found in workspace or node_modules."
		)

	if resolution_mode[0] == "alias":
		alias_path = resolution_mode[1]
		if "from 'fs';" not in content:
			path_import = "import { posix as pathPosix, resolve, sep as pathSep } from 'path';\n"
			if path_import in content:
				content = content.replace(
					path_import,
					path_import + "import { existsSync } from 'fs';\n",
					1,
				)
				changed = True
			else:
				raise RuntimeError("Could not find path import to insert fs existsSync.")

		anchor = "const packagesDir = resolve(__dirname, '..', '..');\n"
		alias_anchor = "const alias = [\n"
		if anchor not in content or alias_anchor not in content:
			raise RuntimeError("Could not find anchors to insert codemirror alias.")

		alias_block = (
			"const codemirrorHtmlAlias = {\n"
			"\tfind: '@n8n/codemirror-lang-html',\n"
			f"\treplacement: '{alias_path}',\n"
			"};\n"
		)
		content = content.replace(anchor, anchor + "\n" + alias_block, 1)
		content = content.replace(alias_anchor, alias_anchor + "\tcodemirrorHtmlAlias,\n", 1)
		changed = True

	if resolution_mode[0] == "import":
		changed = _replace_imports(editor_ui_dir, resolution_mode[1]) or changed

	if changed:
		vite_config.write_text(content, encoding="utf-8")
	return changed


def main() -> int:
	if len(sys.argv) != 2:
		print("Usage: ensure_editor_ui_build_compat.py /path/to/editor-ui", file=sys.stderr)
		return 2

	editor_ui_dir = Path(sys.argv[1])
	changed = False

	changed |= update_i18n_hmr(editor_ui_dir / "src/app/dev/i18nHmr.ts")
	changed |= ensure_codemirror_resolution(editor_ui_dir, editor_ui_dir / "vite.config.mts")

	if changed:
		print("Applied editor-ui compatibility updates")
	else:
		print("No editor-ui compatibility updates needed")

	return 0


if __name__ == "__main__":
	raise SystemExit(main())
