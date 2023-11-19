let n = 5;
let factorial = 1;

if (n === 0 || n === 1) {
    console.log(`Factorial of ${n} is: 1`);
} else {
    for (let i = 2; i <= n; i++) {
        factorial = factorial * i;
    }
    console.log(`Factorial of ${n} is: ${factorial}`);
}
