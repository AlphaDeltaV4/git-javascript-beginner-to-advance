// let row = "";

// for (let i = 4; i <= 4; i++) { //rows
//   row += "  ";
//   for(let j=4; j<=4; j++){ //columns
//     row += "*";

//   // console.log(row);
// }
// }

// console.log(row) ;

const n = 5;

for (let i = 1; i <= n; i++) {
    let space = '';
    for (let j = 1; j <= n - i; j++) {
        space += ' ';
    }

    let asterisk = '';
    for (let k = 1; k <= i; k++) {
        asterisk += '*';
    }

    console.log(space + asterisk);
}

