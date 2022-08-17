//Assignment-JS-15:
//Write a code that displays the factors of a number entered by the user.

let num;
while (isNaN(num) || num <= 0) {
    num = parseInt(prompt("Enter A Valid Number Above 0: "));
}

for (let i = 0; i <= num; i++) {
    if (num % i == 0) {
        console.log(`${i} is a factor of ${num}`);
    }
}
