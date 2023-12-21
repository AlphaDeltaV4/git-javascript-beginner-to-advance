function generateFibonacci(n) {
    const fibonacciArr = [0, 1];
    for (let i = 2; i < n; i++) {
        const nextTerm = fibonacciArr[i - 1] + fibonacciArr[i - 2]; // i starting with 2, so iterate sums
        fibonacciArr.push(nextTerm);
    }
    return fibonacciArr;
}
const n = 10;
console.log(generateFibonacci(n));
