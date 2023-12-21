var startTime = performance.now()

const n = 5;

for (let i = 1; i <= n; i++) {
    let space = ''; //first space
    for (let j = 1; j <= n - i; j++) {
        space += ' ';
    }

    let asterisk = '';
    for (let k = 1; k <= 2*i-1; k++) {
        asterisk += '*';
    }

    console.log(space + asterisk);
}

var endTime = performance.now()

console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)
