// เลือก DOM element ที่มี class เป็น "btn"
const btn = document.querySelector(".btn");

// เลือก DOM element ที่มี class เป็น "container"
const container = document.querySelector(".container");

// รายการข้อความที่จะแสดงใน notification
const message = [
    "Morning",
    "Hello Boy",
    "Good Night",
    "Good Boy",
    "I Miss You",
    "Panuwat Phonsa"
];

// เพิ่ม Event Listener ที่ทำงานเมื่อมีการคลิกที่ปุ่ม
btn.addEventListener("click", () => createNotification());

// ฟังก์ชันสร้าง notification
function createNotification() {
    // สร้าง div element สำหรับแสดง notification
    const notificationEl = document.createElement("div");
    
    // เพิ่มคลาส "notification" ใน div element
    notificationEl.classList.add("notification");
    
    // กำหนดข้อความใน notification โดยเรียกใช้ฟังก์ชัน randomMessage()
    notificationEl.innerText = randomMessage();
    
    // เพิ่ม div element ลงใน container
    container.appendChild(notificationEl);
    
    // กำหนดให้ notification หายไปหลังจาก 3 วินาที
    setTimeout(() => {
        notificationEl.remove();
    }, 3000);
}

// ฟังก์ชันสุ่มข้อความจากรายการ message
function randomMessage() {
    return message[Math.floor(Math.random() * message.length)];
}

// แสดงผลลัพธ์ของการสุ่มข้อความที่ได้ทาง console.log
console.log(randomMessage());
