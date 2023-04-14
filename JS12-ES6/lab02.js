// Lab 2
// จงเขียนฟังก์ชัน filterOutOdds โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด และให้ return ค่าเป็น array ของเลขที่เป็นเลขคู่

function filterOutOdds(...all) {
   let result = []
   for( x of all) {
    if (x%2 === 0)
        result.push(x)
   }
   return result
}

console.log(filterOutOdds(11,12,13,14,15,16,20,21,22))