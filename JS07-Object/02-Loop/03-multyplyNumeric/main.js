let menu = {
    width: 200,
    height: 300,
    title: 'My menu',
};

const multiplyNumeric = (obj, num) => {
    // console.log(obj);

    for (let key in obj) {
        let value = obj[key]; // 200,300, 'My menu'
        // console.log(typeof value, value);
        if (typeof value === 'number') {
            obj[key] = value * num;
            // menu.width = menu.width * 3
            //menu.height = menu.height * 3
        }
        // console.log(obj);
    }

    return obj;
};

console.log(menu);
console.log(multiplyNumeric(menu, 20));
console.log(menu);
