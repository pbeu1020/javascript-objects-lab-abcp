// Objects defines a `recipes` object:
var recipes = {};

// updateObjectWithKeyAndValue(object, key, value) returns an object with the orignal key value pairs and the new key value pair:
function updateObjectWithKeyAndValue(object, key, value) {
  // playlist[artistName]=songTitle;
  object[key]=value;
  return object;
}

// updateObjectWithKeyAndValue(object, key, value) it does not modify the original object, but rather returns a clone with the new data:
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
  // var newObject = Object.assign({}, object, key, value);
  // return newObject;
}
