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


const middle = function(array) {
  let value = [];
  if (array.length < 2) {
    value = [];
  }
  else if (array.length % 2 === 0) {
  value[0] = array[(array.length / 2 - 1)];
  value[1] = array[(array.length / 2)]; 
  }
  else {
    value[0] = array[(array.length / 2) - 0.5];
  }
  return value;
}
console.log(middle([5,6,99,888])); 
  
assertArraysEqual(eqArrays(middle([1]),[]),true); 

assertArraysEqual(eqArrays(middle([1, 2]),[],true));

assertArraysEqual(eqArrays(middle([1, 2, 3]),[2],true));

assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5]),[3],true));

assertArraysEqual(eqArrays(middle([1, 2, 3, 4]),[2,3],true)); 

assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]),[3,4],true)); 


