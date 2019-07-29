const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(" :-) :-) Assertion Passed: (actual) === (expected)") ;
  }   else {
    console.log(":-( :-( Assertion Failed: (actual) !== (expected)");
  }
};

const findKeyByValue = function(theObject,theValue) {
  var theKey = "";
var arrayOfKeys = Object.keys(theObject); 
for (var i = 0; i < arrayOfKeys.length; i++ ){
if (theObject[arrayOfKeys[i]] === theValue) {
return arrayOfKeys[i];  

  }
 }
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), "drama");


