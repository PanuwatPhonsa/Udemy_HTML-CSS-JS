// เลือก DOM element ที่มี id เป็น "eye"
const eyeIcon = document.querySelector("#eye");

// เลือก DOM element ที่มี id เป็น "password"
const passWordEl = document.querySelector("#password");

// เพิ่ม Event Listener ที่ทำงานเมื่อมีการคลิกที่ไอคอน "eye"
eyeIcon.addEventListener("click", () => {
    // ตรวจสอบว่าไอคอนมีคลาส "fa-eye" หรือไม่
    if (eyeIcon.classList.contains("fa-eye")) {
        // ถ้ามี ให้แทนที่คลาส "fa-eye" ด้วย "fa-eye-slash"
        eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
        
        // และเปลี่ยนประเภทของ input element เป็น "text"
        passWordEl.setAttribute("type", "text");
    } else {
        // ถ้าไม่มี ให้แทนที่คลาส "fa-eye-slash" ด้วย "fa-eye"
        eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
        
        // และเปลี่ยนประเภทของ input element เป็น "password"
        passWordEl.setAttribute("type", "password");
    }
});
