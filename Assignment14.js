//Assignment-JS-14:
//Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers.

let num, num2, gcd;

while (isNaN(num) || isNaN(num2)) {
    num = parseInt(prompt("Enter Valid Number 1: "));
    num2 = parseInt(prompt("Enter Valid Number 2: "));
}

let greater = num > num2 ? num : num2;

for (let i = greater; i > 0; i--) {
    console.log(i);
    if (num % i == 0 && num2 % i == 0) {
        gcd = i;
        break;
    }
}

console.log(gcd);
