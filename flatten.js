
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

const flatten = function (inputArray) {

  var newFlatArray = [];

  function makeFlat(inputArray) { 
    for(var i = 0; i < inputArray.length; i++) {
      if(Array.isArray(inputArray[i])) {
        makeFlat(inputArray[i]);
      } else {
        newFlatArray.push(inputArray[i]);
      }
    }
  }
  makeFlat(inputArray);
  return newFlatArray;
}

console.log(assertArraysEqual(eqArrays(flatten([1,2,[3,4],5]),[1,2,3,4,5]),true)); 