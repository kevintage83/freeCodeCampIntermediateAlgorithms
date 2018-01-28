//Create a function, "myReplace," that takes three arguments "str," "before," and "after," as parameters. 
function myReplace(string, before, after) {
  // Create a variable, 'index,' and search through 'string' to see if 'before' matches any of the parts of 'string' are a match
  var index = string.indexOf(before);
  // Determine whether the first letter is uppercase by checking each array item in 'string.'
  if (string[index] === string[index].toUpperCase()) {
    // Change 'after' to be capitalized if the 'if' condition is met.
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  // Replace the array item in string that matched the 'before' value, with 'after.' 
  string = string.replace(before, after);
//Return the new value for 'string.'
  return string;
}

//Call the function,'myReplace,' and pass three arguments as parameters.
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

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
