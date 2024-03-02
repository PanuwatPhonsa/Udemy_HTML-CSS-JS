// เลือก DOM element ที่มี class เป็น "count"
const count = document.querySelector(".count");

// เลือก DOM element ที่เป็น input
const input = document.querySelector("input");

// เพิ่ม Event Listener สำหรับ 'keyup' ที่จะทำงานเมื่อมีการปล่อยปุ่มที่ถูกกด
input.addEventListener("keyup", () => {
    // อัปเดตเนื้อหาของ DOM element ที่มี class เป็น "count" ด้วยความยาวของค่าที่ป้อนใน input
    count.innerHTML = input.value.length;
});
