//Assignment-JS-16:
//Write a code to calculate the factorial of a number entered by the user.

let num;
while (isNaN(num) || num <= -1) {
    num = parseInt(prompt("Enter A Positive Number: "));
}

let answer = num;
for (let i = num - 1; i > 1; i--) {
    answer *= i;
}

console.log(answer || 1);
