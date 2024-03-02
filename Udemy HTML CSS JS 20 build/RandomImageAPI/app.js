const container = document.querySelector(".container"); // เลือก element ที่มี class เป็น "container" แล้วเก็บไว้ในตัวแปร container
const row = 10; // กำหนดค่า row ให้เท่ากับ 10
const cols = 10; // กำหนดค่า cols ให้เท่ากับ 10

function randomNumber() {
    // Math.floor ปัดเศษส่วนลง Math.random สุ่มเลข
    return (Math.floor(Math.random() * 500)); // สร้างฟังก์ชัน randomNumber 500 คือ ที่สุ่มตัวเลขในช่วง 0 ถึง 499
}

for (let i = 0; i < row * cols; i++) {
    // สร้าง loop เพื่อสร้าง element img และใส่ URL ภาพจาก Unsplash
    const url = `https://source.unsplash.com/random/${randomNumber()}`; // สร้าง URL และใส่ id หรือ funcion randomNuber() เพื่อสุ่มเลขเพื่อสุ่มภาพ
    const imageEl = document.createElement("img"); // สร้าง element img ใหม่
    imageEl.src = url; // กำหนด source ของภาพจาก URL ที่สร้างขึ้นมา
    container.appendChild(imageEl); // เพิ่ม element img ลงใน container
}
