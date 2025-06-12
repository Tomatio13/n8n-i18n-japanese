import { fL as arrayMap, fM as getAllKeysIn, fN as baseIteratee, fO as basePickBy } from "./index-DP-moUCP.js";
function pickBy(object, predicate) {
  if (object == null) {
    return {};
  }
  var props = arrayMap(getAllKeysIn(object), function(prop) {
    return [prop];
  });
  predicate = baseIteratee(predicate);
  return basePickBy(object, props, function(value, path) {
    return predicate(value, path[0]);
  });
}
export {
  pickBy as p
};
