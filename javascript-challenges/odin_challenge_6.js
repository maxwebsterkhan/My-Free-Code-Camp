let number = Number(prompt('what is your favorite number'));
let x = number + 1;
if (number == 42) {
    response = "Yay! That's my favorite too!"
} else if (number < 42) {
    response = "Eh, that's OK but " + x + " would be even better"
} else if (number > 42) {
    response = "LAME. That number is too large!"
}



console.log(response)