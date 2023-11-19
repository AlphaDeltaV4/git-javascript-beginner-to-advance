const n = 5;

for (let i = 1; i <= n; i++) {
    let space = '';
    for (let j = 1; j <= n - i; j++) {
        space += ' ';
    }

    let asterisk = '';
    for (let k = 1; k <= 2 * i - 1; k++) {
        asterisk += '*';
    }

    console.log(space + asterisk);
}
