// จงเขียนฟังก์ชันในการคำนวณแต้มจากยอดซื้อขาย โดยทุกยอดซื้อ 100 บาท จะได้ 1 แต้ม หากคำนวณแล้วได้แต้มไม่เป็นจำนวนเต็มให้ปัดเศษลง

const calPoint = (point) => Math.floor(point / 100);
