// Objects defines a `recipes` object:
var recipes = {};

// updateObjectWithKeyAndValue(object, key, value) returns an object with the orignal key value pairs and the new key value pair:
function updateObjectWithKeyAndValue(object, key, value) {
  object[key]=value;
  return object;
}

// updateObjectWithKeyAndValue(object, key, value) it does not modify the original object, but rather returns a clone with the new data:
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
}

// destructivelyUpdateObjectWithKeyAndValue(object, key, value) updates `object` with the given `key` and `value` (it is destructive) and returns the entire updated object:
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key]=value;
  return object;
}