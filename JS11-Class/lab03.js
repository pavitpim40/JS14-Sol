// Lab 3
// ให้เพิ่ม Method max และ sum เข้าไปใน Prototype ของ Array โดย
// max ให้ return ค่ามากสุดของตัวเลขใน Array
// sum ให้ return ผลรวมของตัวเลขใน Array

Array.prototype.max = function () {
  return this.reduce((a, c) => (a = a > c ? a : c), 0);
};

Array.prototype.sum = function () {
  return this.reduce((a, c) => (a += c));
};