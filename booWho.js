//Create a function, "booWho," that takes one argument as a parameter.
function booWho(bool) {
  //Create the most specific conditional statement(s) first. This is similar to the popular "FizzBuzz" exercise.
  if (bool === false){
    //If the statement specifically equals false, then return true as the returned value of the function.  
    return true;
  }
  else if (bool !== true){
    //However, if the first condition does not pass, then check to see if the value passed into the function evaluated to anything other than "true." If it does evaluate to something other than true, then return false as the  returned value of the function. 
    return false;
  }
  //If neither of the previos conditions are met, then return the value originally passed into the function. 
  return bool;
}
//Call the function "booWho" and pass an argument as a parameter.
booWho(null);


/*
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.

booWho(true) should return true.
booWho(false) should return true.
booWho([1, 2, 3]) should return false.
booWho([].slice) should return false.
booWho({ "a": 1 }) should return false.
booWho(1) should return false.
booWho(NaN) should return false.
booWho("a") should return false.
booWho("true") should return false.
booWho("false") should return false.
*/
