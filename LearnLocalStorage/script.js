// เลือก element ที่มี id เป็น 'setting'
const setting = document.getElementById('setting');

// เลือก element 'p' และ 'body' จาก DOM
const text = document.querySelector('p');
const body = document.querySelector('body');

// เลือก element ที่มี id เป็น 'reset'
const resetBtn = document.getElementById('reset');

// Event listener สำหรับตรวจสอบการเปลี่ยนแปลงในการตั้งค่า
setting.addEventListener('change', () => {
    // บันทึกค่าการตั้งค่า Night Mode ลงใน Local Storage
    localStorage.setItem('night-mode', setting.checked);

    // เรียกฟังก์ชันเพื่อโหลด Theme ใหม่
    loadTheme();
});

// Event listener สำหรับตรวจสอบการคลิกปุ่ม Reset
resetBtn.addEventListener('click', () => {
    // ลบข้อมูลทั้งหมดใน Local Storage
    localStorage.clear();

    // เรียกฟังก์ชันเพื่อโหลด Theme ใหม่
    loadTheme();
});

// ฟังก์ชันสำหรับโหลด Theme จาก Local Storage
function loadTheme() {
    /* 
    JSON.parse ใช้ใน JavaScript เพื่อแปลงข้อมูลที่มีรูปแบบ JSON (JavaScript Object Notation) 
    จาก string เป็น object หรือ array ใน JavaScript ได้

        โดยทั่วไปแล้วในกรณีที่มีข้อมูลที่ถูกเก็บในรูปแบบ JSON เช่น การส่งข้อมูลจากเว็บไซต์ไปยังเซิร์ฟเวอร์หรือการเก็บข้อมูล
        ในฐานข้อมูล เราจะได้ข้อมูลนั้นมาในรูปแบบของ string JSON และเมื่อเราต้องการทำงานกับข้อมูลนั้นใน JavaScript 
        เราจะใช้ JSON.parse เพื่อแปลง string JSON นั้นเป็น object หรือ array ซึ่งเราสามารถเข้าถึงและใช้งานข้อมูลได้โดยตรง.

    
    JSON.parse ใช้เพื่อแปลงข้อความ JSON (JavaScript Object Notation) ที่เป็น string ให้กลายเป็น 
    JavaScript object หรือ primitive value (เช่น string, number, boolean).

    ตัวอย่างการใช้ :
        const jsonString = '{"name": "John", "age": 30, "city": "New York"}';

        // ใช้ JSON.parse เพื่อแปลง string JSON เป็น JavaScript object
        const jsonObject = JSON.parse(jsonString);

        console.log(jsonObject);
        // Output: { name: 'John', age: 30, city: 'New York' }

        // สามารถเข้าถึงค่าใน object ได้เหมือนกับ object ทั่วไป
        console.log(jsonObject.name); // Output: John
        console.log(jsonObject.age);  // Output: 30
        console.log(jsonObject.city); // Output: New York
    */

    // ดึงข้อมูลการตั้งค่า Night Mode จาก Local Storage
    // แปลงจาก string เป็น boolean ด้วย JSON.parse
    const status = JSON.parse(localStorage.getItem('night-mode'));

    // กำหนดค่า checked ของ element 'setting' ตามค่าที่ได้จาก Local Storage
    setting.checked = status;

    // ตรวจสอบค่าการตั้งค่า Night Mode
    if (setting.checked) {
        // ถ้าเป็น Dark Mode
        text.innerText = 'Dark Mode';
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '1s';
    } else {
        // ถ้าเป็น Light Mode
        text.innerText = 'Light Mode';
        body.style.background = 'white';
        body.style.color = 'black';
    }
}

// เรียกฟังก์ชันเพื่อโหลด Theme ในครั้งแรก
loadTheme();
