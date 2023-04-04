// 0 : balance = 100
// 1 : balance = 100 + 100*(2.5/100) = 102.5
// 2 : balance = 102.5 + 102.5(2.5/100) = 105.0625
// 3 : balance = 105.0625 + 105.0625(2.5/100)

// newBalance = balance + interest
// newBalance = balance(1) + balance * (rate)
// newBalance = balance * (1+rate)

// NB1 = B0*(1+rate)
// NB2 = B1*(1+rate)  โดย B1 == NB1
// ==> NB2 = B0 * (1+rate) * (1 + rate)
// NB = B0*(1+rate)**2

let balance = 100_000;

for (let i = 1; i <= 10; i++) {
    balance = balance * (1 + 0.025);
}

alert(balance.toFixed(2));
