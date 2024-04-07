// เลือก element ที่เป็น input
const input = document.querySelector('input')

// เลือก element ที่เป็น button
const button = document.querySelector('button')

// เพิ่ม event listener ที่จะทำงานเมื่อมีการคลิกที่ button
button.addEventListener('click', () => {
    // ตรวจสอบประเภทของ input
    if (input.getAttribute('type') === 'password') {
        // ถ้าประเภทของ input เป็น 'password'
        // กำหนดประเภทของ input เป็น 'text'
        input.setAttribute('type', 'text')
        // เปลี่ยนข้อความบน button เป็น 'Hide Password'
        button.innerText = 'Hide Password'
    } else {
        // ถ้าประเภทของ input เป็น 'text'
        // กำหนดประเภทของ input เป็น 'password'
        input.setAttribute('type', 'password')
        // เปลี่ยนข้อความบน button เป็น 'Show Password'
        button.innerText = 'Show Password'
    }
})
