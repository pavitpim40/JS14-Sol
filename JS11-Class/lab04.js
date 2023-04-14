// Lab 4
// ให้เพิ่ม Method defer เข้าไปใน Prototype ของ Function
// โดยให้ได้ผลลัพธ์ตามด้านล่าง (Hint: setTimeout)

Function.prototype.defer = function () {
  setTimeout(() => this.call(), 1000);
};

function f() {
  alert("Hello!");
}
f.defer(1000); // shows "Hello!" after 1 second
