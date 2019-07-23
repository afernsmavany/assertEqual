
const head = function(inputArray) {
  var actual =  inputArray[0];  
  return actual; 
  };
  
  const assertEqual = function(actual, expected) {
    if (actual === expected) {
      return " :-) :-) Assertion Passed: (actual) === (expected)";
    }   else {
      return ":-( :-( Assertion Failed: (actual) !== (expected)";
    }
  };
  
  console.log(assertEqual(head([5,6,7]), 5));
  console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));