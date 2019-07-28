
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (i=0; i < arr1.length; i++) {
      if(arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }
  return true
 };
 
 const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log (" :-) :-) Assertion Passed: (actual) === (expected)");
  }   else {
    console.log (":-( :-( Assertion Failed: (actual) !== (expected)");
  }
};

const without = function(ListArray,ExceptionArray){
var newArray = []; 
for (var i =0; i < ListArray.length;i++ ){
  var toAdd = true; 
  for (var j =0;j < ExceptionArray.length;j++)
   {
      if (ListArray[i] === ExceptionArray[j])
      toAdd = false; 
   }
   if (toAdd) 
    {
    newArray.push(ListArray[i]); 
    } 
   }
  return newArray; 
}

assertArraysEqual(eqArrays(without([1, 2, 3], [2]), [1,3]),true); 

assertArraysEqual(eqArrays(without(["1", "2", "3"], [1, 2, "3"]),["1", "2"]),true);

const words = ["hello", "world", "lighthouse"];
 without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
 // Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);