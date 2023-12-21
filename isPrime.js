function isPrime(number) {
    
    if (number%number === 0 && number%1 === 0){
        console.log(`${number} is Prime`)
    }    else {
        console.log(`${number} is Not Prime`)
    }
}

isPrime(12)


