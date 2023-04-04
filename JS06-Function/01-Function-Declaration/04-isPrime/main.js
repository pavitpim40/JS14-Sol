function checkPrime(num) {
    // let num = 40;
    let isPrime = true;

    for (let divider = 2; divider < num; divider++) {
        if (num % divider === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) alert(`${num} is Prime Number`);
    else alert(`${num} is not Prime Number`);
}

checkPrime(40);
checkPrime(41);
checkPrime(42);
