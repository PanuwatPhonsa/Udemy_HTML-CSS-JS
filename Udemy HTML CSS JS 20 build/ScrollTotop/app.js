// เลือก DOM element ที่มี class เป็น "top" เพื่อปุ่ม scroll to top
const scrollBtn = document.querySelector(".top");

// เลือก DOM element ที่เป็น root ของเอกสาร (html)
const rootEl = document.documentElement;

// เพิ่ม Event Listener ที่ทำงานเมื่อมีการ scroll
document.addEventListener("scroll", showBtn);

// เพิ่ม Event Listener ที่ทำงานเมื่อคลิกที่ปุ่ม scroll to top
scrollBtn.addEventListener("click", scrollToTop);

// ฟังก์ชันที่ตรวจสอบการ scroll และแสดง/ซ่อนปุ่ม scroll to top
function showBtn() {
    // คำนวณค่า scroll ทั้งหมดและค่า scroll ปัจจุบัน
    const scrollTotal = rootEl.scrollHeight - rootEl.clientHeight;
    const scrollPercentage = rootEl.scrollTop / scrollTotal;

    // ถ้า scrollPercentage มากกว่า 0.3 ให้เพิ่มคลาส "show-btn" ใน scrollBtn, มิฉะนั้นให้ลบคลาส "show-btn"
    if (scrollPercentage > 0.3) {
        scrollBtn.classList.add("show-btn");
    } else {
        scrollBtn.classList.remove("show-btn");
    }
}

// ฟังก์ชันที่ทำงานเมื่อคลิกที่ปุ่ม scroll to top
function scrollToTop() {
    rootEl.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
