//Create a new function, "diffArray," which takes two parameters, "arr1" and "arr2," as arguments. 
function diffArray(array1, array2) {
  //Create a new array "newArr"; This is where we will hold the results of the difference between the two parameters passed into diffArray.
  var newArray = [];
  //Create a for-loop that loops through the first array, array1.
  for(var i=0; i<array1.length; i++){
    //Check to see if each item in array1 matches items in array2
    //If there is a match, reject that match...
    if(array2.indexOf(array1[i])===-1){
      //Push the remaining items into newArray.
      newArray.push(array1[i]);
    }
  }
  //Create a for-loop that loops through the second array, array2.
  for(var j=0; j<array2.length; j++){
    //Check to see if each item in array2 matches items in array1.
    if(array1.indexOf(array2[j])=== -1){
      //Push the remaining items into newArray.
      newArray.push(array2[j]);
    }
  }
  //Return the results pushed into newArray.
  return newArray;
}
//Invoke the function "diffArray."
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.
["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].
["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].
["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return [].
[1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].
[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].
[], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].
[1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].
*/
