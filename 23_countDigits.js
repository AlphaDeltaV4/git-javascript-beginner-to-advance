function countDigits(number) {
    let count = 0;    
    while (number !== 0) {
        number = Math.floor(number / 10);
        count++;
    }
    return count;
}
console.log(countDigits(1234588888888)); 
console.log(countDigits(999));   
console.log(countDigits(0));     
console.log(countDigits(-123));  
