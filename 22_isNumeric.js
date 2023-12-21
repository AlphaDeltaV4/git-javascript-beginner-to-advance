function isNumeric(value){
    // typeof value === "number" ? console.log("true") : console.log("false");
    // console.log(typeof '12');
    // console.log(typeof NaN);
    if(typeof value === "number" || isNaN(+ value)) {
        console.log(`${value}  true`);
    }
    else if (typeof value === "String" ){
        console.log(`${value}  true`);
    } else {
        console.log(`${value}  false`);
    }
}

isNumeric(12);
isNumeric('abcd');
isNumeric('"12"');
isNumeric('');
isNumeric(1.20);
isNumeric(-200);