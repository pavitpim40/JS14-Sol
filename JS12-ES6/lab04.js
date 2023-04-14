// Lab 4
// จงรวม nums1 และ num2 เข้าด้วยกัน
// จงสร้าง array ที่ได้จากการนำ nums1 และ nums2 มารวมกัน แต่ให้เพิ่ม 5 เข้าไปก่อน nums1 และเพิ่ม -6, -1 เข้าไประหว่าง nums1 กับ nums2
// หาผลรวมของทุก element ใน Array ที่ได้



const nums1 = [1, -2, 3, 4];
const nums2 = [8, 3, -8, 1];

const nums3 = [...nums1, ...nums2]
console.log(nums3)
const nums4 = [5, ...nums1, -6, 1, ...nums2]
console.log(nums4)

let sumNums4 = nums4.reduce( (a,c) => a+=c, 0)
console.log(sumNums4)

