// - จงเขียนฟังก์ชันเพื่อตรวจสอบข้อความ หากในข้อความนั้นมีคำว่า xxx, sex, porn ให้ return ค่าเป็น true แต่ถ้าไม่มีให้ return ค่าเป็น false
// - ให้ตรวจสอบแบบ case-insensitive เช่น XXX, pOrn, sEX ให้ถือว่าเป็นคำเดียวกับ
// 		xxx, porn, sex ตามลำดับ

// PSEUDO CODE
// - NORMALIZE CASE
// - STRING CHECK

const invalidWord = (str) => {
    let normalizeStr = str.toLowerCase();

    if (
        normalizeStr.includes('xxx') ||
        normalizeStr.includes('sex') ||
        normalizeStr.includes('porn')
    ) {
        return true;
    }

    return false;
};
