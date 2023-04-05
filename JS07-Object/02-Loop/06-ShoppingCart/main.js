let productName, quantity, price, discount;

productName = prompt('Enter your product name');
quantity = +prompt('Enter your product quantity');
price = +prompt('Enter your product price');
discount = +prompt('Enter your product discount');

let product = {
    productName,
    quantity,
    price,
};

console.log(product);

// discount = 10
if (discount > 0) {
    // product['discount'] = discount; // #1 Correct
    product.discount = discount; // #2 Correct
    // product[discount] = discount  // #3 Undesired behavior
}

// Price = price - (price * (discount / 100))
//  price * (1 - discount/ 100)
const calPrice = (obj) => {
    if (obj.discount) return obj.price * (1 - obj.discount / 100);
    else return obj.price;
};

console.log(calPrice(product));
