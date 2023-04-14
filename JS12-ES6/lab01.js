// Lab 1
// จงเขียนฟังก์ชันหาค่าผลคูณของตัวเลข โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด


function multiplyAll(...all) {
    let result=1
    for(x of all) {
        result *= x
    }
    return result
}

console.log(multiplyAll(2,3,4))

