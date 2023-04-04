// prime number :  1,self
// compound number : สามารถเขียนในรูปผลคูณของจำนวนเฉพาะได้

// Candidate ? prime or compound
// Divider ? start from 2 until Candidate

for (let candidate = 2; candidate <= 100; candidate++) {
    // let magicNumber = 983;
    let isPrime = true;

    for (let divider = 2; divider < Math.sqrt(candidate); divider++) {
        // magicNumber % d === 0
        if (candidate % divider === 0) {
            // compound Number only
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${candidate} : ${isPrime}`);
    }
}

// divide 1-100
// divide 1-Candidate
// divide 1-SQRT(candidate)

// number = a * a = prime * prime
// 				  = 1 * 41
// assume candidate = 41 ==> sqrt 6.4

// 41 = 6.4*6.4 ==

// 12 = 3.4*3.4 = 3*4

let firstName = 'pavit';
let user = {
    firstName,
    age,
};

const person = {
    name: 'John Doe',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345',
    },
};
