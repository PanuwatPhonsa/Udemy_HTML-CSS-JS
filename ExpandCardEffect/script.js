// เลือกทุกรายการที่มีคลาส 'item'
const items = document.querySelectorAll('.item')

// เพิ่ม Event Listener ให้กับทุกรายการ
items.forEach((item) => {
    // เมื่อคลิกที่รายการ
    item.addEventListener('click', () => {
        // เรียกใช้ฟังก์ชัน removeActive เพื่อลบคลาส 'active' จากทุกรายการ
        removeActive();
        // เพิ่มคลาส 'active' ให้กับรายการที่ถูกคลิก
        item.classList.add('active');
    })
})

// ฟังก์ชันที่ใช้เพื่อลบคลาส 'active' จากทุกรายการ
function removeActive() {
    // ใช้ forEach เพื่อลบคลาส 'active' จากทุกรายการ
    items.forEach((item) => {
        item.classList.remove('active');
    })
}
