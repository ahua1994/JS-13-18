//Assignment-JS-13:
//Ask the user to input a number. Check the input of the user, if it is not a valid number then keep getting input from the user until provides a valid number.

let num;
while (isNaN(num)) {
    num = parseInt(prompt("Enter A Valid Number: "));
}

console.log("Thank you.");
