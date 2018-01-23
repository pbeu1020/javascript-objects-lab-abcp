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

// deleteFromObjectByKey(object, key) deletes `key` from a clone of object and returns the new object (it is non-destructive):

// deleteFromObjectByKey(object, key) does not modify the original object (it is non-destructive):

function deleteFromObjectByKey(object, key) {
  var newObject = Object.assign({}, object, [key]);
  newObject.key='1';
  delete newObject[key];
  return newObject;
}


// destructivelyDeleteFromObjectByKey(object, key) returns object without the delete key/value pair:


// destructivelyDeleteFromObjectByKey(object, key) modifies the original object:

function destructivelyDeleteFromObjectByKey(object, key) {
  object.key='1';
  delete object[key];
  return object;  
}

