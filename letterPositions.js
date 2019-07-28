const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log (" :-) :-) Assertion Passed: (actual) === (expected)");
  }   else {
    console.log (":-( :-( Assertion Failed: (actual) !== (expected)");
  }
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
assertArraysEqual(letterPositions("hello").e, [1]);