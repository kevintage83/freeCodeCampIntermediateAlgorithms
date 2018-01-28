//Create a function, 'translatePigLatin,' that takes an argument, 'string,' as a parameter.
function translatePigLatin(string) {
  //Create a condition that checks if the first letter of the string begins with a consinant.
  if (string.charAt(0) !== "e" && string.charAt(0) !== "a" && string.charAt(0) !== "i" && string.charAt(0) !== "o" && string.charAt(0) !== "u"){
    //var sliced = string.slice(2);
    var popped = string.charAt(0);
    var splitStr = string.split('');
    var arraySplit = splitStr.slice(1).join("");
    var latin = arraySplit + popped + "ay";
    return latin;
  }else if(string.charAt(0) === "g" && string.charAt(1) === "l"){
    var popped3 = string.charAt(0);
    var splitStr3 = string.split('');
    var arraySplit3 = splitStr3.slice(2).join('');
    var latin3 = arraySplit3 + popped3 + "ay";
    return "wow";
  }else{
    var popped2 = string.charAt(0);
    var splitStr2 = string.split('');
    var arraySplit2 = splitStr2.slice(1).join('');
    var latin2 = string + "way";
    return latin2;
  }
  
  // Create a variable, 'poppedWord,' that removes the first letter of the string 
  //var 
  var sliced2= string.slice(5);
  return sliced2;
}
//Call the function, 'translatePigLatin,' and pass an argument.
translatePigLatin("glove");
