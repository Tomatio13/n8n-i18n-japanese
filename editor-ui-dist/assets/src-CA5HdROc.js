import { Lt as shallowReactive } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
//#region ../@n8n/frontend-module-sdk/src/defineFrontendModule.ts
/**
* Declares a frontend module descriptor.
*
* Identity at runtime: it returns the object it was given. It does not wrap,
* clone, or freeze it, so a descriptor declared through it behaves exactly as a
* descriptor declared with a type annotation.
*
* What it adds is a seam and inference. The seam gives the SDK one place to
* attach validation or a dev-mode check later, instead of ten declaration sites
* it cannot see. The inference keeps each field's literal type — `MyModule.id`
* reads as `'my-feature'`, not `string` — which an annotation widens away.
*
* Use it for every descriptor. An annotated descriptor still satisfies the type,
* but it is not the canonical form.
*
* ```ts
* export const MyFeatureModule = defineFrontendModule({
*   id: 'my-feature',
*   name: 'My Feature',
*   description: 'What this module does',
*   icon: 'box',
* });
* ```
*/
function defineFrontendModule(module) {
	return module;
}
//#endregion
//#region ../@n8n/frontend-module-sdk/src/routeNames.ts
var SHELL_OWNER = "the app shell";
function* declaredRouteNames(routes) {
	for (const route of routes) {
		if (route.name !== void 0 && route.name !== null) yield route.name;
		if (route.children) yield* declaredRouteNames(route.children);
	}
}
/**
* Throws when a module claims a route name that is already taken, by the shell
* or by another module.
*
* Route names are global to the router, and `router.addRoute` replaces a
* duplicate without warning — the losing route simply stops resolving. A central
* `VIEWS` enum kept every name unique, shell and module alike, because they were
* all members of one enum. Module-owned name constants are the better contract,
* but they scatter that check, so it is restored here.
*
* Call this before registering any module route. The shell's names are read from
* `router`, so a module route added earlier would be counted as pre-existing
* rather than reported.
*/
function assertUniqueRouteNames(modules, router) {
	const owners = /* @__PURE__ */ new Map();
	for (const { name } of router.getRoutes()) if (name !== void 0 && name !== null) owners.set(name, SHELL_OWNER);
	for (const module of modules) {
		if (!module.routes) continue;
		for (const name of declaredRouteNames(module.routes)) {
			const owner = owners.get(name);
			if (owner !== void 0) throw new Error(`Duplicate route name "${String(name)}" declared by module "${module.id}" — already taken by ${owner}.`);
			owners.set(name, `module "${module.id}"`);
		}
	}
}
//#endregion
//#region ../@n8n/frontend-module-sdk/src/registries/modalRegistry.ts
/**
* Shallow-reactive so consumers can derive from the registry with a plain
* `computed` instead of mirroring it through a subscription. Shallow on purpose:
* a definition's `component` must not be turned into a reactive object.
*/
var modals = shallowReactive(/* @__PURE__ */ new Map());
var listeners$2 = /* @__PURE__ */ new Set();
/** Declarations, not registrations — deliberately not emptied by `clear()`. */
var adHocKeyPrefixes = /* @__PURE__ */ new Set();
function getAll$2() {
	return new Map(modals);
}
function notifyListeners$2() {
	listeners$2.forEach((listener) => listener(getAll$2()));
}
function register$4(modal) {
	const existing = modals.get(modal.key);
	if (existing) {
		if (existing !== modal) console.warn(`Modal with key "${modal.key}" is already registered. Skipping.`);
		return;
	}
	modals.set(modal.key, modal);
	notifyListeners$2();
}
/**
* Declare that keys starting with `prefix` are minted at runtime and will never
* be registered, so the unknown-key warning can tell them apart from a modal
* whose registration was forgotten.
*/
function declareAdHocKeyPrefix(prefix) {
	adHocKeyPrefixes.add(prefix);
}
//#endregion
//#region ../@n8n/frontend-module-sdk/src/registries/resourceRegistry.ts
var resources = /* @__PURE__ */ new Map();
/**
* Register a new resource type
*/
function registerResource(metadata) {
	resources.set(metadata.key, metadata);
}
//#endregion
//#region ../@n8n/frontend-module-sdk/src/registries/pushHandlerRegistry.ts
var handlers = /* @__PURE__ */ new Map();
function register$3(type, handler) {
	const existing = handlers.get(type);
	if (existing) {
		if (existing !== handler) console.warn(`Push handler for type "${type}" is already registered. Skipping.`);
		return;
	}
	handlers.set(type, handler);
}
/**
* Register every handler in a module's `pushHandlers` map. Centralises the one
* cast needed to erase the per-type event narrowing: each handler is stored
* against its own key, so it only ever receives an event of that type.
*/
function registerAll(pushHandlers) {
	for (const type of Object.keys(pushHandlers)) {
		const handler = pushHandlers[type];
		if (handler) register$3(type, handler);
	}
}
function get$2(type) {
	return handlers.get(type);
}
function has(type) {
	return handlers.has(type);
}
//#endregion
//#region ../@n8n/frontend-module-sdk/src/registries/commandRegistry.ts
var commands = /* @__PURE__ */ new Map();
var listeners$1 = /* @__PURE__ */ new Set();
function getAll$1() {
	return Array.from(commands.values());
}
function notifyListeners$1() {
	listeners$1.forEach((listener) => listener(getAll$1()));
}
function register$2(command) {
	const existing = commands.get(command.id);
	if (existing) {
		if (existing !== command) console.warn(`Command with id "${command.id}" is already registered. Skipping.`);
		return;
	}
	commands.set(command.id, command);
	notifyListeners$1();
}
//#endregion
//#region ../@n8n/frontend-module-sdk/src/registries/componentRegistry.ts
/**
* Shell-hosted components, keyed by slot. The shell registers; modules read.
*
* Shallow-reactive so a module can resolve a slot with a plain `computed`, and
* shallow specifically so a component is never turned into a reactive object.
*
* A slot with nothing registered resolves to `undefined`, and the module renders
* nothing for it. That is the correct behavior in a module's own test run, where
* no shell exists — a test that needs the slot registers a stub.
*/
var components = shallowReactive(/* @__PURE__ */ new Map());
function register$1(slot, component) {
	const existing = components.get(slot);
	if (existing && existing !== component) {
		console.warn(`Component slot "${slot}" is already registered. Skipping.`);
		return;
	}
	components.set(slot, component);
}
function get$1(slot) {
	return components.get(slot);
}
//#endregion
//#region ../@n8n/frontend-module-sdk/src/registries/parameterInputRegistry.ts
/**
* Shallow-reactive so the render path can derive from the registry with a plain
* `computed`. Shallow on purpose: a contribution's `component` must not be
* turned into a reactive object.
*/
var parameterInputs = shallowReactive(/* @__PURE__ */ new Map());
var listeners = /* @__PURE__ */ new Set();
function getAll() {
	return new Map(parameterInputs);
}
function notifyListeners() {
	listeners.forEach((listener) => listener(getAll()));
}
/**
* Claim `contribution.type` for this component. One owner per type: the shell's
* built-in branch for that type is what an unclaimed type falls back to.
*/
function register(contribution) {
	const existing = parameterInputs.get(contribution.type);
	if (existing) {
		if (existing !== contribution) console.warn(`Parameter input for type "${contribution.type}" is already registered. Skipping.`);
		return;
	}
	parameterInputs.set(contribution.type, contribution);
	notifyListeners();
}
function get(type) {
	return parameterInputs.get(type);
}
//#endregion
export { register$2 as a, registerAll as c, getAll$2 as d, register$4 as f, register$1 as i, registerResource as l, defineFrontendModule as m, register as n, get$2 as o, assertUniqueRouteNames as p, get$1 as r, has as s, get as t, declareAdHocKeyPrefix as u };
