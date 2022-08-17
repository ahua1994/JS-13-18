//Assignment-JS-17:
//Write a code to find numbers that are divisible by 3 and 5, between 100 and 1000.

for (let i = 100; i <= 1000; i++) {
    if (i % 15 == 0) {
        console.log(`${i} is divisible by 3 and 5`);
    }
}
