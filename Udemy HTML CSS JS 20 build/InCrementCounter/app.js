const counters = document.querySelectorAll(".counter"); // เลือกทุกรายการที่มี class "counter" จาก DOM
counters.forEach(counter => { // วนลูปผ่านทุกรายการที่เลือก
    counter.innerText = '0'; // กำหนดค่าเริ่มต้นของแต่ละ counter เป็น 0
    const updateCounter = () => { // สร้างฟังก์ชัน updateCounter ซึ่งจะทำหน้าที่อัปเดตค่า counter
        const target = counter.getAttribute("data-target"); // ดึงค่าที่กำหนดไว้ใน attribute "data-target"
        const start = +counter.innerText; // ดึงค่าปัจจุบันที่แสดงอยู่ใน counter
        const increment = target / 2000; // คำนวณการเพิ่มขึ้นของ counter ต่อครั้ง

        if (start < target) { // ถ้าค่าปัจจุบันน้อยกว่าค่าที่ต้องการ
            
            /* Math.ceil() เป็นฟังก์ชันใน JavaScript ที่ใช้ในการปัดเศษขึ้นไปถึงจำนวนเต็มที่ใกล้ที่สุด 
            ทำให้ค่าที่ได้เป็นจำนวนเต็มที่มากกว่าหรือเท่ากับค่าต้นฉบับที่มีทศนิยม 

            const roundedUpValue = Math.ceil(4.3); // ผลลัพธ์คือ 5
            const anotherRoundedUpValue = Math.ceil(7.8); // ผลลัพธ์คือ 8
            const integer = Math.ceil(10); // ค่าจะไม่เปลี่ยนแปลงเพราะมันเป็นจำนวนเต็มแล้ว

            */
            counter.innerText = `${Math.ceil(start + increment)}`; // อัปเดตค่า counter และปัดเศษขึ้น
            setTimeout(updateCounter, 1); // เรียกฟังก์ชัน updateCounter ใหม่ในอีก 1 มิลลิวินาที
        } else { // ถ้าค่าปัจจุบันเท่ากับหรือมากกว่าค่าที่ต้องการ
            counter.innerText = target; // กำหนดค่า counter เป็นค่าที่ต้องการ
        }
    };
    updateCounter(); // เรียกใช้ฟังก์ชัน updateCounter เพื่อเริ่มการนับ
});
