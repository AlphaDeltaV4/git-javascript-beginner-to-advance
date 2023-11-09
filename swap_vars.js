// let a = -78925005;
let a = 5;
console.log("a->", a);
let b= 10;
// let b = 8789659636;
console.log("b->", b);
a+=b; //a=15
console.log("after 1st -> ",a);
b=a-b; //b=5
console.log("after 2nd -> ",b);
a-=b;//a=10
console.log("after 3rd -> ",a);

let nan = NaN;
console.log(typeof nan);
let hello = !!!!("null");
console.log(hello);
// console.log(a,b);
// a+=b;
// b-=a;
// b+=a;
// console.log(b);
// b+=a;
// console.log(b);
// a-=b;
console.log(`After swap::\n a = ${a} & b = ${b}`);