// Lab 2
// ให้สร้าง Class ชื่อ Sale
// มี property ชื่อ name
// มี method calcPrice()
// ให้เขียน code คำนวณราคาหลังหักส่วนลด ไว้ที่ method นี้
// ให้สร้าง Class ชื่อ Beverage สืบทอดมาจาก Sale
// มี property ชื่อ amount, price และ discount
// ให้สร้าง object ชื่อ beverage จาก Beverage โดย
// name = “Pepsi”, amount = 3, price = 19 และ discount 10%
// ให้ beverage เรียก method calcPrice() และแสดงผลของ calcPrice() ที่ได้

class Sale {
  constructor(name) {
    this.name = name;
  }
  calcPrice() {
    return this.price * this.amount * (1 - this.discount);
  }
}

class Beverage extends Sale {
  constructor(name, amount, price, discount) {
    super(name);
    this.amount = amount;
    this.price = price;
    this.discount = discount;
  }
}

const beverage = new Beverage("Pepsi", 3, 19, 0.1);
let r = beverage.calcPrice();
console.log(r);
