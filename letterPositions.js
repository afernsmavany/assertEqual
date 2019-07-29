const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log (" :-) :-) Assertion Passed: (actual) === (expected)");
  }   else {
    console.log (":-( :-( Assertion Failed: (actual) !== (expected)");
  }
};

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


const letterPositions = function(randomLetters) {
  const result = {};
  
  for (let i = 0; i < randomLetters.length; i++) {
    let letters = randomLetters[i];
    if (letters !== " ") {
      if (result[letters] !== undefined) {
        result[letters].push(i);
      } else result[letters] = [i];
    } 
  } 
   return result;
};

console.log(letterPositions("lighthouse in the house"));  
assertArraysEqual(eqArrays(letterPositions("hello").e, [1]),true);

