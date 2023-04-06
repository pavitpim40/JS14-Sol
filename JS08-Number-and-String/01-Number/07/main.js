function rollDice() {
    // return Math.ceil(Math.random() * 6);
    return 1 + Math.floor(Math.random() * 6);
}

for (let i = 0; i < 20; i++) {
    console.log(rollDice());
}
