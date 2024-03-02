// เลือก DOM element ที่มี class เป็น "open-btn"
const openBtn = document.querySelector(".open-btn");

// เลือก DOM element ที่มี class เป็น "close-btn"
const closeBtn = document.querySelector(".close-btn");

// เลือก DOM element ที่มี class เป็น "modal-container"
const modalcontainer = document.querySelector(".modal-container");

// เพิ่ม Event Listener สำหรับ 'click' ที่จะทำงานเมื่อมีการคลิกที่ปุ่ม "open-btn"
openBtn.addEventListener("click", () => {
    // เพิ่ม class "show" เข้าไปใน DOM element ที่มี class เป็น "modal-container"
    modalcontainer.classList.add("show");
});

// เพิ่ม Event Listener สำหรับ 'click' ที่จะทำงานเมื่อมีการคลิกที่ปุ่ม "close-btn"
closeBtn.addEventListener("click", () => {
    // ลบ class "show" ออกจาก DOM element ที่มี class เป็น "modal-container"
    modalcontainer.classList.remove("show");
});
