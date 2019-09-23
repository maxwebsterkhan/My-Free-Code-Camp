// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
var notEqual = testNotEqual(10);
var equal = testNotEqual(99);
console.log("10 is " + notEqual + " to 99");
console.log("99 is " + equal + " to 99"); 