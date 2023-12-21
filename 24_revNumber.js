let rev = 0;
let n = 12345;
let temp = n;

while (temp > 0){
    let last = temp%10;
    temp = parseInt(temp/10);
    rev = rev*10+last;
}
console.log(rev);