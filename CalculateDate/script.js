const button = document.querySelector('button'); // เลือก element button จาก DOM
const result = document.getElementById('result'); // เลือก element ที่มี id "result" จาก DOM

button.addEventListener('click', () => { // เพิ่ม event listener สำหรับเหตุการณ์ click ที่เกิดขึ้นใน button
    const date1 = document.getElementById('date1').value; // ดึงค่าจาก input element ที่มี id "date1"
    const date2 = document.getElementById('date2').value; // ดึงค่าจาก input element ที่มี id "date2"
    
    const startDate = new Date(date1); // สร้าง object Date จากค่าวันที่ที่รับมาจาก input "date1"
    const endDate = new Date(date2); // สร้าง object Date จากค่าวันที่ที่รับมาจาก input "date2"

    // คำนวณหาผลต่างของวัน
    const times = Math.abs(endDate - startDate); // คำนวณหาผลต่างของเวลาในหน่วยมิลลิวินาที
    const days = Math.round(times / (1000 * 60 * 60 * 24)); // แปลงเวลาเป็นวันและปัดเศษ
    
    result.innerText = "Distance is " + days + " Days"; // แสดงผลลัพธ์ใน element ที่มี id "result"
});
