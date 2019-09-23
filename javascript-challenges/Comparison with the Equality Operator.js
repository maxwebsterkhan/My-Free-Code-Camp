// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
var tenNotEqual = testEqual(10);
var twelveEqual = testEqual(12);
console.log("10 is " + tenNotEqual + " to 12");
console.log("12 is " + twelveEqual + " to 12"); 