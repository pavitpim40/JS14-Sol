function printPrime(num) {
    // let num = 41; // 2,3,5,7

    let result = '';
    for (let candidate = 2; candidate <= num; candidate++) {
        let isPrime = true;

        for (let divider = 2; divider < candidate; divider++) {
            if (candidate % divider === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) result += `${candidate},`;
    }

    console.log(result);
}

printPrime(41);

function addTwo(num) {
    return num + 2;
    console.log('Value is', num + 2); // not log
}

function isRed(color) {
    if (color === 'red') {
        return true;
        return false;
    }
}
