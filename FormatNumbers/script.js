// เลือก element ที่มี id เป็น 'amount'
const amountEl = document.getElementById('amount')

// เลือก element ที่มี id เป็น 'output'
const OutputEl = document.getElementById('output')

// เพิ่ม event listener ที่จะทำงานเมื่อมี input ใน element 'amount'
amountEl.addEventListener('input', (e) => {
    // ดึงค่าจาก input ที่มีการเปลี่ยนแปลง
    const number = e.target.value

    //แสดงสัญลักษณ์สกุลเงินของประเทศไทย
    // const result = Intl.NumberFormat('th-TH',{
    //     style:'currency',
    //     currency:'THB'
    // }).format(number)

    // ใช้ Intl.NumberFormat เพื่อทำการจัดรูปแบบตัวเลข
    const result = Intl.NumberFormat('en', { notation: 'compact' }).format(number)

    // กำหนดข้อความที่ได้ใน 'output' element
    OutputEl.innerText = result;
})

