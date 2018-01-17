function diffArray(arr1, arr2){
  var newArray = [];
  for(var i=0;i<arr1.length;i++){
    if (arr2.indexOf(arr1[i]) === -1){
    newArray.push(arr1[i]);
    }
  }
  for(var j=0;j<arr2.length;j++){
    if (arr1.indexOf(arr2[j]) === -1){
    newArray.push(arr2[j]);
    }
  }
  return newArray;
}

diffArray([1,2,3,4], [1,3,5,6]);
