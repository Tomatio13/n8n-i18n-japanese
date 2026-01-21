#!/usr/bin/env python3
from __future__ import annotations

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


def ensure_codemirror_alias(path: Path) -> bool:
	if not path.exists():
		return False

	content = path.read_text(encoding="utf-8")
	if "codemirror-lang-html" in content:
		return False

	changed = False

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
	if anchor in content and "codemirrorHtmlAlias" not in content:
		insert = (
			anchor
			+ "\n"
			+ "const codemirrorHtmlPackageDir = resolve(packagesDir, '@n8n', 'codemirror-lang-html');\n"
			+ "const codemirrorHtmlAlias = existsSync(codemirrorHtmlPackageDir)\n"
			+ "\t? { find: '@n8n/codemirror-lang-html', replacement: resolve(codemirrorHtmlPackageDir, 'src') }\n"
			+ "\t: { find: '@n8n/codemirror-lang-html', replacement: 'codemirror-lang-html-n8n' };\n"
		)
		content = content.replace(anchor, insert, 1)
		changed = True
	else:
		raise RuntimeError("Could not find packagesDir anchor to insert codemirror alias.")

	alias_anchor = "const alias = [\n"
	if alias_anchor in content and "codemirrorHtmlAlias" in content:
		content = content.replace(alias_anchor, alias_anchor + "\tcodemirrorHtmlAlias,\n", 1)
		changed = True
	else:
		raise RuntimeError("Could not find alias array anchor to insert codemirror alias.")

	if changed:
		path.write_text(content, encoding="utf-8")
	return changed


def main() -> int:
	if len(sys.argv) != 2:
		print("Usage: ensure_editor_ui_build_compat.py /path/to/editor-ui", file=sys.stderr)
		return 2

	editor_ui_dir = Path(sys.argv[1])
	changed = False

	changed |= update_i18n_hmr(editor_ui_dir / "src/app/dev/i18nHmr.ts")
	changed |= ensure_codemirror_alias(editor_ui_dir / "vite.config.mts")

	if changed:
		print("Applied editor-ui compatibility updates")
	else:
		print("No editor-ui compatibility updates needed")

	return 0


if __name__ == "__main__":
	raise SystemExit(main())
