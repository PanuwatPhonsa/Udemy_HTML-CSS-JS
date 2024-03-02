// const progressEl = document.querySelector(".progress");
// window.onscroll = () => scrollProgress();

// function scrollProgress() {
//     const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     const scrollTop = document.documentElement.scrollTop;
//     const scrollPercentage = (scrollTop / pageHeight) * 100;
    
//     // ตรวจสอบเงื่อนไขเพื่อซ่อน progress bar เมื่อ scroll bar อยู่ที่ด้านบนหรือด้านล่างของหน้าเว็บ
//     if (scrollPercentage > 0 && scrollPercentage < 100) {
//         progressEl.style.visibility = "visible";
//         progressEl.style.width = scrollPercentage + "%";
//     } else {
//         progressEl.style.visibility = "hidden";
//     }
// }

// เลือก DOM element ที่มี class เป็น "progress"
const progressEl = document.querySelector(".progress");

// กำหนดฟังก์ชัน scrollProgress ไว้ใน window.onscroll เพื่อให้ทำงานเมื่อเกิดการ scroll
window.onscroll = () => scrollProgress();

// ฟังก์ชัน scrollProgress ทำหน้าที่คำนวณความก้าวหน้าของการ scroll และปรับค่าความก้าวหน้าใน progress bar
function scrollProgress() {
    // คำนวณความสูงทั้งหมดของหน้าเว็บ
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    // คำนวณค่า scrollTop หรือตำแหน่งการ scroll ของหน้าเว็บ
    const scrollTop = document.documentElement.scrollTop;

    // คำนวณความก้าวหน้าเป็นเปอร์เซ็นต์
    const scrollPercentage = (scrollTop / pageHeight) * 100;

    // กำหนดให้ progress bar มีความก้าวหน้าเท่ากับ scrollPercentage
    progressEl.style.visibility = "visible";
    progressEl.style.width = scrollPercentage + "%";
}

