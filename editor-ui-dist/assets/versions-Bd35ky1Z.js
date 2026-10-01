//#region ../@n8n/frontend-constants/src/versions.ts
/**
* Constants consumed by `versions.store` (`@n8n/stores`). Relocated per-symbol
* from `editor-ui`'s `@/app/constants` when the store moved into a package
* (N8N-70). They live here because the modal keys have two consumers on
* opposite sides of that boundary — the store, and the app-side registration in
* `@/app/constants/modals` — and this package is a leaf both already depend on.
*/
var LOCAL_STORAGE_READ_WHATS_NEW_ARTICLES = "N8N_READ_WHATS_NEW_ARTICLES";
var LOCAL_STORAGE_DISMISSED_WHATS_NEW_CALLOUT = "N8N_DISMISSED_WHATS_NEW_CALLOUT";
var VERSIONS_MODAL_KEY = "versions";
var WHATS_NEW_MODAL_KEY = "whatsNew";
//#endregion
export { WHATS_NEW_MODAL_KEY as i, LOCAL_STORAGE_READ_WHATS_NEW_ARTICLES as n, VERSIONS_MODAL_KEY as r, LOCAL_STORAGE_DISMISSED_WHATS_NEW_CALLOUT as t };
