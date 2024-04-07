// เลือกทุกรายการที่มีแท็ก 'i'
const rating = document.querySelectorAll('i')

// เลือก element ที่มี id เป็น 'result'
const result = document.getElementById('result')

// วนลูปทุกรายการที่เป็น 'i'
rating.forEach((star, selectIndex) => {
    // เพิ่ม event listener ที่จะทำงานเมื่อมีการคลิกที่ดาว
    star.addEventListener('click', () => {
        // วนลูปทุกรายการที่เป็น 'i' อีกครั้ง
        rating.forEach((star, index) => {
            // ตรวจสอบว่า index ของดาวที่ถูกคลิกมากกว่าหรือเท่ากับ index ของดาวในลูปนี้หรือไม่
            if (selectIndex >= index) {
                // ถ้าใช่ ให้เพิ่ม class 'active' หรือกำหนดสีเป็นสีส้ม
                star.classList.add('active')
                // star.style.color = 'orange'
            } else {
                // ถ้าไม่ ให้ลบ class 'active' หรือกำหนดสีเป็นสีเทา
                star.classList.remove('active')
                // star.style.color = '#e6e6e6'
            }
        })
        // แสดงผลลัพธ์ดาวที่ถูกคลิก
        result.innerText = 'Result ' + (selectIndex + 1) + '/5 '
    })
})
