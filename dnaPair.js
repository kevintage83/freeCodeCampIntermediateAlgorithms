//Create a function, "pariElement," that takes a string, "str," as an argument
function pairElement(str) {
  //Create an empty array, 'newArr,' that will take the new item pairs.
  let newArr = [];
  //Create another variable, 'dnaPair,' that represents an arbitrary function.
  //The arbitrary function takes a parameter, 'letter,' and, based on the cases (arguments) passed into the arbitrary function, one of the cases will be executed, then break out of the function. 
  let dnaPair = function (letter){
    switch (letter){
//In the first case, where 'letter' is 'A,' push 'A' and 'T' onto the array 'newArr,' then exit the arbitrary function.
      case 'A': 
        newArr.push(['A', 'T']);
        break;
//In the second case, where 'letter' is 'G,' push 'G' and 'C' onto the array 'newArr,' then exit the arbitrary function.
      case 'G':
        newArr.push(['G', 'C']);
        break;
//In the third case, where 'letter' is 'T,' push 'T' and 'A' onto the array 'newArr,' then exit the arbitrary function.
      case 'T':
        newArr.push(['T', 'A']);
        break;
//In the fourth case, where 'letter' is 'C,' push 'C' and 'G' onto the array 'newArr,' then exit the arbitrary function.
      case 'C':
        newArr.push(['C', 'G']);
      break;  
    }
  };
  //Create a loop that iterates through each character of the string 'str.'
  //During each iteration, check the character with the variable 'dnaPair.'
  for (var i = 0; i < str.length; i++){
  dnaPair(str[i]);
}
  //Output the result of newArr to the console.
  return newArr;
}


//Call the function 'pairElement'and pass a string into the function
pairElement("GCG");
