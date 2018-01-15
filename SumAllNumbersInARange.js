//create a function, "sumAll," that takes one argument, "array," as a parameter. 
function sumAll(array) {
  //create a varaibale that takes the largest number as the max and another variable that takes the smallest number as the min. 
  var highNumber = Math.max(...array);
  var lowNumber = Math.min(...array);
  //create a third variable, "extraLowNumber," that stores the value of the lowest number in the array; we will use this later to complete the final array (used in our final summation)
  var extraLowNumber = Math.min(...array);
  //create a new array that will store those two numbers and all numbers between them.
  var sumArray = [];
  //create a loop that iterates from the smallest number, adds 1 to that number, and stores it as an item in the new array, until it reaches the max number from our original array passed into "sumAll."
  for (var index = lowNumber; index < highNumber; index++){
    var newSumArray = sumArray.push(lowNumber += 1);
    //return newSumArray;
  }
  //at this point, "sumArray" includes all integers between "lowNumber" and "highNumber," including "highNumber," but it does not include "lowNumber." Push "lowNumber" onto the stack, in order to complete the array before adding everything in the array together. 
  sumArray.push(extraLowNumber);
  /*
  create a new variable, "grandTotal," which sums up each item in "sumArray." 
  "grandTotal" will use the reduce method, which requires a function to be passed into it as a parameter. This "function" will take two arguments, "a" and "b," as its parameters, and return the summation, starting at index 0 of "sumArray."
  */
  var grandTotal = sumArray.reduce(function(a, b) { return a + b; }, 0);
  //Our final result is contained within the value of the variable "grandTotal."
  return grandTotal;
}
//invoke the function "sumAll" and pass the two included arguments as parameters.
sumAll([1, 14]);

/*
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

sumAll([1, 4]) should return a number.
sumAll([1, 4]) should return 10.
sumAll([4, 1]) should return 10.
sumAll([5, 10]) should return 45.
sumAll([10, 5]) should return 45.
*/
