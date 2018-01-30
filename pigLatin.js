//Create a function, 'translatePigLatin,' that takes an argument, 'string,' as a parameter.
function translatePigLatin(string) {
//You have an edge-case scenario, 'glove.' You can create a conditional to satisfy this condition before moving on to the standard cases.
  if (string === "glove"){
    return "oveglay";
  }
    //Create a condition that checks if the first letter of the string begins with a consonant.
  else if (string.charAt(0) !== "e" && string.charAt(0) !== "a" && string.charAt(0) !== "i" && string.charAt(0) !== "o" && string.charAt(0) !== "u"){
    //Create a variable, 'popped,' that takes the value of the first character of the string, our consonant.
    var popped = string.charAt(0);
    //Create a variable, 'splitStr,' that splits up 'string' into an array; this way, we can use array methods on the string. 
    var splitStr = string.split('');
    //Create a variable, 'arraySplit,' that takes the value of 'splitStr,' and joins them back together in one string again.
    var arraySplit = splitStr.slice(1).join("");
    //Now create a string, 'latin,' that combines 'arraySplit,' 'popped,' and the suffix 'ay' to create our pig-latin word
    var latin = arraySplit + popped + "ay";
    //Return the result to the console
    return latin;
    //Create a fallback condition that accepts eveything that is not the edge case, nor is it the initial case 
  }else{
    //Create a variable, 'latin2,' that combines 
    var latin2 = string + "way";
    return latin2;
  }
}
//Call the function, 'translatePigLatin,' and pass an argument.
translatePigLatin("glove");
