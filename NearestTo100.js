const hundred = 100;
let testVar1 = 90;
let testVar2 = 50; 

let firstComparison = Math.abs(hundred-testVar1);
let secondComparison = Math.abs(hundred-testVar2);

if(firstComparison < secondComparison){
    console.log(testVar1);
} else {
    console.log(testVar2);
}