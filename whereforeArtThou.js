//Create a function, "whatIsInAName," that takes two arguments, "collection" and "source," as parameters.
function whatIsInAName(collection, source) {
  // Create a variable, "sourceKey," that represents the key in the second argument passed into "whatsInAName." It will utilize the "Object" constructor.
  //The "Object" constructor has attributes, a key:value pair from "source."
  var sourceKey = Object.keys(source);

  // filter the collection
  /*
  Every object descended from Object inherits the hasOwnProperty method. This method can be used to determine whether an object has the specified property as a direct property of that object; unlike the "in" operator, this method does not check down the object's prototype chain.
  
  Object.keys() returns an array whose elements are strings corresponding to the enumerable properties found directly upon object. The ordering of the properties is the same as that given by looping over the properties of the object manually.
  */
  return collection.filter(function (object) {
    for(var index = 0; index < sourceKey.length; index++) {
      if(!object.hasOwnProperty(sourceKey[index]) || object[sourceKey[index]] !== source[sourceKey[index]]) {
        return false;
      }
    }
    return true;
  });
}


//Invoke the function "whatIsInAName."
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
