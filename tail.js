
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return " :-) :-) Assertion Passed: (actual) === (expected)";
  }   else {
    return ":-( :-( Assertion Failed: (actual) !== (expected)";
  }
};

console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));
console.log(assertEqual(2, 1));
console.log(assertEqual("Lighthouse Labs", "Lighthouse Labs"));


const tail = function(array) {
  let newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray[i - 1] = array[i];
  }
  return newArray;
};

console.log(tail(["bananas", "apples", "lions"]));

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
