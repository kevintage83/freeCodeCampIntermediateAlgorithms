//Create a function, "whatIsInAName," that takes two arguments, "collection" and "source," as parameters.
function whatIsInAName(collection, source) {
  // Create a variable, "
  var srcKeys = Object.keys(source);

  /*Looking at the instructions for the challenge, we know that we just want to return part of the "collection" array 
  that has the matching object(rather than the entire thing), so that indicates that we want to FILTER the "collection."
  
  We also know that we want to check to see if the "collection" array element has a specified property, so we can use the 
  method "hasOwnProperty."
  
  Every object descended from Object inherits the hasOwnProperty method. 
  This method can be used to determine whether an object has the specified property as a direct property of that object; 
  unlike the "in" operator, this method does not check down the object's prototype chain.
  
  Object.keys() returns an array whose elements are strings corresponding to the enumerable properties found directly upon object.
  The ordering of the properties is the same as that given by looping over the properties of the object manually.
  */
  return collection.filter(function (object) {
    for(var index = 0; index < srcKeys.length; index++) {
      if(!object.hasOwnProperty(srcKeys[index]) || object[srcKeys[index]] !== source[srcKeys[index]]) {
        return false;
      }
    }
    return true;
  });
}


//Invoke the function "whatIsInAName."
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });



/*
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and its value, that was passed on as the second argument.

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) should return [{ first: "Tybalt", last: "Capulet" }].
whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }) should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }].
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }) should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }) should return [{ "a": 1, "b": 2, "c": 2 }].

*/
