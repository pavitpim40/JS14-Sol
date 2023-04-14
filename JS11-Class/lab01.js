// Lab 1
// ให้สร้าง Class ชื่อ Calculator มี property และ method ดังนี้
// value คือค่าตัวเลขปัจจุบัน (เริ่มต้นเป็น 0 หรือตามที่กำหนด) เช่น new Calculator(10) ให้ value มีค่าเท่ากับ 10
// add() ให้รับค่าตัวเลขและรวมผลรวมเข้าใน value
// subtract() ให้รับค่าตัวเลขและหักออกจาก value
// multiply() ให้รับค่าตัวเลขและคูณตัวเลขกับ value
// divide() ให้รับค่าตัวเลขและนำไปหาร value
// show() ให้ alert ค่า value

class Calculator {
  constructor(initNum = 0) {
    this.value = initNum;
  }
  add(num) {
    this.value += num;
  }
  subtract(num) {
    this.value -= num;
  }
  multiply(num) {
    this.value *= num;
  }
  divide(num) {
    this.value /= num;
  }
  show() {
    alert(this.value);
  }
}

let c1 = new Calculator(10);
c1.show();
c1.add(5);
c1.show();
c1.divide(3);
c1.show();

// challenge : want to execute like a chaining method
// c1.show().add(5).show().divide(3).show()

// resolve : return this in all methods
// ---------------
