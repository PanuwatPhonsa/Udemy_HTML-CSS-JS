// เลือก element ที่มี tag 'i' และ assign ไปยังตัวแปร icon
const icon = document.querySelector('i')

// เลือก element ที่มี class 'container' และ assign ไปยังตัวแปร image
const image = document.querySelector('.container')

// เพิ่ม event listener สำหรับเหตุการณ์ 'dblclick' ใน element ที่มี class 'container'
image.addEventListener('dblclick', () => {
    // เปลี่ยนค่า opacity ของ element ที่มี tag 'i' เป็น 1 เพื่อทำให้ icon ปรากฏ
    icon.style.opacity = 1;

    // เพิ่ม class 'fa-beat' ใน element ที่มี tag 'i'
    icon.classList.add('fa-beat')

    // ใช้ setTimeout เพื่อทำให้ icon หายไปหลังจาก 2 วินาที
    setTimeout(() => {
        // เปลี่ยนค่า opacity ของ element ที่มี tag 'i' เป็น 0 เพื่อทำให้ icon หายไป
        icon.style.opacity = 0

        // ลบ class 'fa-beat' ออกจาก element ที่มี tag 'i'
        icon.classList.remove('fa-beat')
    }, 2000)
})
let keeping = true;
while(keeping === true){
    console.log("Ok");
    keeping = false;
}