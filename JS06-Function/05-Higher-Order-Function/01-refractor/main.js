// ให้เรียกใช้ฟังก์ชัน ask โดย
// Parameter ตัวแรกเป็น 'Do you agree?'
// Parameter ตัวที่สองเป็นฟังก์ชันท่ีเมื่อทำงานแล้วจะ alert คำว่า “I’m agree with you ?”
// Parameter ตัวที่สามเป็นฟังก์ชันที่เมื่อทำงานแล้วจะ alert คำว่า “whyyyyyyy !”

function ask(question, yes, no) {
    let userConfirm = confirm(question); // true,false

    if (userConfirm) yes();
    else no();
}

function userSayYes() {
    alert('I agree with you ?');
}

function userSayNo() {
    alert('Whyyyyyyyyyyy');
}

// Caller
// ask('Do you agree?', userSayYes, userSayNo);

ask(
    'Do you agree?',
    () => alert('I agree with you !!!'),
    () => alert('Whyyyy!!!!')
);
