/*const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};*/

const countLetters = function(randomLetters) {
  const result = {};
  
  for (var letters of randomLetters) {
    if (letters !== " ") {
    if (result[letters] !== undefined) {
       result[letters]++;
     } else result[letters] = 1;
  } 
  } 
   return result;
};

console.log(countLetters("lighthouse in the house"));  


/*
const countLetters = function(randomLetters) {
  const result = {};
  
  for (var letters of randomLetters) {
  if (result[letters] !==undefined )  {
     result[letters]++;
   }
   else if (result[letters] == " " )
   {}
   else
   result[letters] = 1;
  
  } 
   return result;
};

console.log(countLetters("lighthouse in the house"));  
*/

/*wrong code:
const countLetters = function(randomLetters) {
  const result = {};
  
  for (var letters in randomLetters) {
   if (result[letters] !==undefined) {result[letters]++;
   }
   else result[letters] = 1;
   }
   return result;
}
console.log(result("lighthouse"));
*/  
