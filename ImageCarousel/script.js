const container = document.getElementById('container');
const img = document.querySelectorAll('#container img');

const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let index = 0;

// กำหนด interval ให้เรียกฟังก์ชัน slide ทุก 2000 มิลลิวินาที (2 วินาที)
let interval = setInterval(slide, 2000);

// ฟังก์ชันที่เรียกในทุกครั้งที่ interval เรียก slide
function slide() {
    // เพิ่ม index ไป 1
    index++;
    // เรียกฟังก์ชัน changeImg เพื่อเปลี่ยนรูป
    changeImg();
}

// ฟังก์ชันที่ใช้เปลี่ยนรูป
function changeImg() {
    // ตรวจสอบว่า index มีค่ามากกว่าจำนวนรูปทั้งหมดหรือไม่
    if (index > img.length - 1) {
        index = 0; // กำหนด index เป็น 0 ถ้ามากกว่า
    } else if (index < 0) {
        index = img.length - 1; // กำหนด index เป็นค่าสูงสุดถ้าน้อยกว่า 0
    }
    // เปลี่ยนตำแหน่งของรูปทั้งหมดตามค่า index
    container.style.transform = `translateX(${-index * 500}px)`;
}

// เมื่อคลิกที่ปุ่ม 'left'
leftBtn.addEventListener('click', () => {
    // ลดค่า index ลง 1
    index--;
    // เรียกฟังก์ชัน changeImg เพื่อเปลี่ยนรูป
    changeImg();
    // เรียกฟังก์ชัน resetInterval เพื่อรีเซ็ต interval
    resetInterval();
});

// เมื่อคลิกที่ปุ่ม 'right'
rightBtn.addEventListener('click', () => {
    // เพิ่มค่า index ไป 1
    index++;
    // เรียกฟังก์ชัน changeImg เพื่อเปลี่ยนรูป
    changeImg();
    // เรียกฟังก์ชัน resetInterval เพื่อรีเซ็ต interval
    resetInterval();
});

// ฟังก์ชันที่ใช้เรียกในทุกครั้งที่มีการคลิกที่ปุ่ม left หรือ right
function resetInterval() {
    // ลบ interval เดิม
    clearInterval(interval);
    // กำหนด interval ใหม่เพื่อเรียก slide ทุก 2000 มิลลิวินาที (2 วินาที)
    interval = setInterval(slide, 2000);
}
