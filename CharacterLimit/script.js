const textArea = document.querySelector('textarea'); // เลือก element textarea จาก DOM
const amount = document.querySelector('.amount'); // เลือก element ที่มี class "amount" จาก DOM
const limit = document.querySelector('.limit'); // เลือก element ที่มี class "limit" จาก DOM

textArea.addEventListener('keyup', () => { // เพิ่ม event listener สำหรับเหตุการณ์ keyup ที่เกิดขึ้นใน textarea
    let count = textArea.value.length; // นับจำนวนตัวอักษรใน textarea
    amount.innerText = count; // แสดงจำนวนตัวอักษรใน element ที่มี class "amount"
    
    if (count >= 21) { // ตรวจสอบว่าจำนวนตัวอักษรมากกว่าหรือเท่ากับ 21 หรือไม่
        limit.classList.add('active'); // เพิ่ม class "active" ใน element ที่มี class "limit" เพื่อแสดงข้อความเตือน
    } else {
        limit.classList.remove('active'); // ลบ class "active" ใน element ที่มี class "limit" เพื่อซ่อนข้อความเตือน
    }
});
