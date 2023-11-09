let a=5;
let factorial;
if (a==0){
    factorial = 1;
} else {
// console.log(Math.abs(90-100));
for(i=1; i<=a; i++){
    // console.log("a->",a);
    // let mul = a-i;
    // console.log("mul", mul);
    // console.log("the_final_ans", mul*5);
    // console.log(a*mul);
    // console.log(a*mul);
    console.log("a->", a);
    console.log("i->", i);
    console.log(a*(5-1)*(5-2)*(5-3)*(5-4));
    console.log("Factorial>>",a*(a-i));
    let fact = a * (a-i);   
    // console.log(fact);
}
}