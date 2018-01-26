//Create a function, "myReplace," that takes three arguments, "str," "before," and "after" as parameters. 
function myReplace(str, before, after) {
  /*Create a new variable, "beforeCap," that takes the value of the index (position within the) item in the argument "str"
  We will use the index value as the point at which we make our second evaluation; checking to see if the first character 
  of the matching item begins with an upper-case letter */
  var beforeCap = str.indexOf(before);
  var p = after.charAt(0).toUpperCase(after) + after.slice(1);
  /*If the matching item begins with an uppser-case letter, convert the first character in "after" to upper-case and 
  append/concatenate the remaining characters in "after" to the upper-cased letter; store this new string as the value of the parameter "after" */
  if (str[beforeCap] === str[beforeCap].toUpperCase()){
    var newAfter = after.charAt(0).toUpperCase + after.slice(1);
    return str.replace(before, newAfter);
  }
  //Create a new variable, "newStr," that replaces the value stored in the "before" parameter with the "after" parameter.
  var newStr = str.replace(before, after);
  //Return the result
return newStr;
}
//call the function "myReplace" and pass three arguments into the function as parameters. 
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");

/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall".
myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch".
myReplace("This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error".
myReplace("His name is Tom", "Tom", "john") should return "His name is John".
myReplace("Let us get back to more Coding", "Coding", "algorithms") should return "Let us get back to more Algorithms".
*/
