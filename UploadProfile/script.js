// เลือก element ที่มี tag 'img' และ assign ไปยังตัวแปร image
const image = document.querySelector('img')

// เลือก element ที่มี tag 'input' และ assign ไปยังตัวแปร input
const input = document.querySelector('input')

// เพิ่ม event listener สำหรับเหตุการณ์ 'change' ใน input element
input.addEventListener('change', () => {
    // ในขณะที่มีการเปลี่ยนแปลงใน input element
    // ใช้ URL.createObjectURL เพื่อสร้าง URL จาก file ที่ถูกเลือก
    // และกำหนดค่า URL นั้นให้กับ 'src' ของ element 'img'
    image.src = URL.createObjectURL(input.files[0])
})
