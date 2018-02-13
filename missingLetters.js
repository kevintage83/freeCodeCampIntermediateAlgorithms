//Declare a function, "fearNotLetter," that takes a string as an argument.
function fearNotLetter(str) {
  //Loop through the string, checking that each character code in the string "str," to ensure that each char code value is a single digit increment larger than the one before it. If it is not, then return "undefined."
  for (var i = 0; i < str.length; i++){
    //create the variable "codedStr," which will hold the character code value of the letter that corresponds to each character in the string that is passed into the function. 
    var codedStr = str.charCodeAt(i);
    //create a condition that evaluates the value of the current value of "codedStr" to make sure that it is not the same value as [one digit more than] the char value that was evaluated before it. If the value is more than one digit larger than the previously evaluated char, convert the char code associated with it, and return that letter as the returned value of the function. 
    if (codedStr !== str.charCodeAt(0) + i){
      return String.fromCharCode(codedStr - 1);
    }
    //if the character code is one more than the previous value of the char code evaluated before it, return "undefined."
  }
  return undefined;
}
//call the function "fearNotLetter," and pass a string as a parameter
fearNotLetter("abce");

/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

fearNotLetter("abce") should return "d".
fearNotLetter("abcdefghjklmno") should return "i".
fearNotLetter("bcd") should return undefined.
fearNotLetter("yz") should return undefined.
*/
