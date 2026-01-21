#!/usr/bin/env python3
from __future__ import annotations

import re
import sys
from pathlib import Path


LOCALE_BLOCK = """const runtimeLoadedLocales = new Set<string>();
const localeLoaders: Record<string, () => Promise<{ default: LocaleMessages }>> = {
\tja: () => import('@n8n/i18n/locales/ja.json'),
};

const ensureLocaleLoaded = async (localeCode: string) => {
\tif (!localeCode || localeCode === 'en' || runtimeLoadedLocales.has(localeCode)) {
\t\treturn;
\t}

\tconst loader = localeLoaders[localeCode];

\tif (!loader) {
\t\tconsole.warn(`[i18n] No bundled locale found for "${localeCode}"`);
\t\treturn;
\t}

\ttry {
\t\tconst module = await loader();
\t\tconst messages = module.default;
\t\tloadLanguage(localeCode, messages);
\t\truntimeLoadedLocales.add(localeCode);
\t} catch (error) {
\t\tconsole.warn(`[i18n] Unable to load locale "${localeCode}"`, error);
\t}
};
"""


def _ensure_i18n_imports(content: str) -> tuple[str, bool]:
	changed = False

	def replace_import(match: re.Match[str]) -> str:
		nonlocal changed
		items = [item.strip() for item in match.group(1).split(",") if item.strip()]
		if "loadLanguage" not in items:
			items.append("loadLanguage")
			changed = True
		normalized = ", ".join(sorted(items, key=lambda s: (s != "setLanguage", s)))
		return f"import {{ {normalized} }} from '@n8n/i18n';"

	i18n_import_pattern = re.compile(r"^import\s+\{\s*([^}]+)\s*\}\s+from\s+['\"]@n8n/i18n['\"];",
		re.MULTILINE)
	if i18n_import_pattern.search(content):
		content = i18n_import_pattern.sub(replace_import, content, count=1)
	else:
		anchor = "import { locale, N8nCommandBar } from '@n8n/design-system';\n"
		if anchor in content:
			content = content.replace(
				anchor,
				anchor + "import { loadLanguage, setLanguage } from '@n8n/i18n';\n",
				1,
			)
			changed = True
		else:
			raise RuntimeError("Could not find @n8n/i18n import or insertion anchor.")

	if "import type { LocaleMessages } from '@n8n/i18n/types';" not in content:
		content = content.replace(
			"from '@n8n/i18n';\n",
			"from '@n8n/i18n';\nimport type { LocaleMessages } from '@n8n/i18n/types';\n",
			1,
		)
		changed = True

	return content, changed


def _ensure_locale_block(content: str) -> tuple[str, bool]:
	if "runtimeLoadedLocales" in content or "ensureLocaleLoaded" in content:
		return content, False

	anchor = "const hasContentFooter = ref(false);\n"
	if anchor not in content:
		raise RuntimeError("Could not find insertion point for locale loader block.")

	return content.replace(anchor, anchor + LOCALE_BLOCK + "\n", 1), True


def _ensure_watch_call(content: str) -> tuple[str, bool]:
	if "ensureLocaleLoaded(newLocale)" in content:
		return content, False

	pattern = (
		r"watch\(\s*\n\tdefaultLocale,\s*\n\tasync \(newLocale\) => \{\n"
	)
	match = re.search(pattern, content, flags=re.MULTILINE)
	if not match:
		raise RuntimeError("Could not find defaultLocale watcher to inject call.")

	insert = match.group(0) + "\t\tawait ensureLocaleLoaded(newLocale);\n"
	return content[: match.start()] + insert + content[match.end() :], True


def main() -> int:
	if len(sys.argv) != 2:
		print("Usage: ensure_app_locale_loader.py /path/to/App.vue", file=sys.stderr)
		return 2

	path = Path(sys.argv[1])
	if not path.exists():
		print(f"App.vue not found: {path}", file=sys.stderr)
		return 2

	content = path.read_text(encoding="utf-8")
	changed = False

	content, did_change = _ensure_i18n_imports(content)
	changed = changed or did_change

	content, did_change = _ensure_locale_block(content)
	changed = changed or did_change

	content, did_change = _ensure_watch_call(content)
	changed = changed or did_change

	if changed:
		path.write_text(content, encoding="utf-8")
		print("Applied locale loader updates to App.vue")
	else:
		print("Locale loader already present - no changes made")

	return 0


if __name__ == "__main__":
	raise SystemExit(main())
