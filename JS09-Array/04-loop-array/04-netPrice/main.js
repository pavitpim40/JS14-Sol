const sales = [{ price: 1000, discount: 0.1 }, { price: 500, discount: 0.05 }, { price: 100 }];

const summary = [];
function calNetPrice(obj, index) {
    let myObj = {};

    if (obj['discount']) {
        // console.log('DISCOUNT at LOOP:', index + 1);
        myObj.netPrice = obj.price * (1 - obj.discount);
    } else {
        myObj.netPrice = obj.price; // #1
        // myObj['netPrice'] = obj['price']; //#2
        // let a = 'netPrice';
        // let b = 'price';
        // myObj[a] = obj[b]; // #3
        // myObj.a = obj.b; // #4
        // myObj["a"] = obj["b"]
    }

    // console.log(myObj);
    summary.push(myObj);
}

sales.forEach(calNetPrice);
// How forEach Work with calNetPrice
// 1st : call calNetPrice({ price: 1000, discount: 0.1 },0,sales)
// 2nd : call calNetPrice({ price: 500, discount: 0.05 },1,sales)
// 3rd : call calNetPrice({ price: 100 },2,sales)

console.log(summary);
