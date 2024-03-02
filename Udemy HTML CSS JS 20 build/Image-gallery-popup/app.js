const smallImg = document.querySelectorAll(".gallery img"); // เลือกภาพย่อทั้งหมดในแกลเลอรี
const fullImg = document.querySelector(".full-image"); // เลือกภาพขนาดใหญ่ที่จะแสดง
const modal = document.querySelector(".modal"); // เลือกโมดัลสำหรับแสดงภาพใหญ่

// วนลูปผ่านภาพย่อแต่ละรูปและเพิ่มอีเวนต์ "click"
smallImg.forEach(img => {
    img.addEventListener("click", () => {
        const fullsize = img.getAttribute("alt"); // ดึงข้อมูล alt attribute ของภาพย่อ
        const path = `/Image-gallery-popup/foods-images/foods-images/full/${fullsize}.jpg`; // สร้าง path ของภาพขนาดใหญ่
        fullImg.src = path; // กำหนด src ของภาพขนาดใหญ่ที่จะแสดงใน fullImg element
        modal.classList.add("open"); // เพิ่มคลาส "open" เพื่อแสดง modal
    });
});

// เพิ่มอีเวนต์ "click" ที่ modal เพื่อปิดโมดัลเมื่อคลิกข้างนอก
modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) { // ตรวจสอบว่าคลิกอยู่นอกส่วนของภาพ
        modal.classList.remove("open"); // ถ้าใช่ ให้ลบคลาส "open" ออกเพื่อซ่อนโมดัล
    }
});
