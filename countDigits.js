function countDigits(number) {
//     const numToString = number.toString();
//    console.log(numToString.length);
//    return numToString.length
let count=0;
let countNum = Math.abs(number);
while (countNum > 0) {
    countNum = countNum / 10;
    count++;
}
return count;
}

countDigits(999);
countDigits(12345);