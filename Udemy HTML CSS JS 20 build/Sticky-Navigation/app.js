// เลือก element ที่มีคลาส 'nav'
const nav = document.querySelector(".nav");

// เพิ่ม event listener สำหรับตรวจสอบการ scroll ของหน้าจอ
window.addEventListener("scroll", stickyNavbar);

function stickyNavbar() {
    // ตรวจสอบว่า scroll ไปถึงตำแหน่งที่หน้าจอมีความสูงเท่ากับความสูงของ 'nav' บวก 150 พิกเซล
    if (window.scrollY > nav.offsetHeight + 150) {
        // ถ้า scroll มากกว่าที่กำหนด ให้เพิ่มคลาส 'active' ให้กับ 'nav'
        nav.classList.add("active");
    } else {
        // ถ้า scroll น้อยกว่าที่กำหนด ให้ลบคลาส 'active' ออกจาก 'nav'
        nav.classList.remove("active");
    }
}
