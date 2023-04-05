let fruit, quantity;
const basket = {};

do {
    fruit = prompt('Enter your fruit');
    quantity = prompt('Enter your fruit quantity');

    if (fruit !== 'stop' && quantity !== 'stop') {
        if (+quantity > 1) {
            basket[fruit + 's'] = +quantity;
        } else if (quantity == 1) {
            basket[fruit] = +quantity;
        }
    }
} while (fruit !== 'stop' && quantity !== 'stop');

console.log(basket);
