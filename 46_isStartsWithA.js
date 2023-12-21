function isStartsWithA() {
    let nameArray = ["Akshay", "Aryan", "Heramb", "Abhishek"];
    let emptyArray = [];

//     for(let i=0; i<=nameArray.length; i++){
//     let currString = nameArray[i][0].toLowerCase();
//     console.log("first letter", currString);
//     if(currString === "a"){
        
//         emptyArray.push(nameArray[i]);
//         console.log("emptyArray inside>>", emptyArray);


//     }
// }

for (let i of nameArray) {
    let currString = i[0].toLowerCase();
    if(currString == "a") {
        emptyArray.push(i);
    } else {
        console.log("other than letter a starting is not allowed");
    }
}

console.log("emptyArray>>", emptyArray);
}
isStartsWithA();