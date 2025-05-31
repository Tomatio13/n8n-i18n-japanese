import { fu as arrayMap, fv as getAllKeysIn, fw as baseIteratee, fx as basePickBy } from "./index-bHaUIFge.js";
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
