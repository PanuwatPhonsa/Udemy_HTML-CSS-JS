const ratingContainer = document.querySelector('.ratings-container');
const ratings = document.querySelectorAll('.rating');
const panel = document.getElementById('panel');
const sendBtn = document.getElementById('send');

let selected;

// เมื่อมีการคลิกที่ ratingContainer  
ratingContainer.addEventListener('click', (e) => {
    /*ตรวจสอบว่า element ที่ถูกคลิกเป็น rating หรือไม่ สามารถใช้ parentElement หรือ parentNode
        ก็ได้มีความหมายคล้ายๆกัน
    */ 
    if (e.target.parentNode.classList.contains('rating')) {//สามารถใช้ parentElement ได้
        // เรียกใช้ฟังก์ชันเพื่อลบ class 'active' จากทุก ratings
        removeActive();
        // เพิ่ม class 'active' ให้กับ rating ที่ถูกคลิก
        e.target.parentElement.classList.add('active'); //สามารถใช้ parentNode ได้
        // เก็บค่าข้อความที่อยู่ใน sibling element ที่ตั้งหน้า rating ที่ถูกคลิก
        selected = e.target.nextElementSibling.innerHTML;
        // แสดงค่าที่ถูกเลือกใน console
        console.log(selected);
    }
});

// ฟังก์ชันเพื่อลบ class 'active' จากทุก ratings
function removeActive() {
    for (let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active');
    }
}

// เมื่อมีการคลิกที่ปุ่ม 'send'
sendBtn.addEventListener('click', () => {
    // แทนที่ HTML ของ panel ด้วย HTML ที่กำหนด
    panel.innerHTML = `
        <img src="img/heart.svg" alt="" class ="complete">
        <strong>Thank you</strong>
        <br>
        <strong>Satisfaction is ${selected}</strong>
    `;
});

/*
    *** ตัวอย่างการใช้ 
    <div id="parent">
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
        <p>Paragraph 3</p>
    </div>

    <script>
        // เลือก element ที่มี id เท่ากับ 'parent'
        const parentElement = document.getElementById('parent');

        // เข้าถึง child node แรกของ parentElement
        const firstChild = parentElement.firstChild;

        // ใช้ parentNode เพื่อเข้าถึง parent node ของ firstChild
        console.log(firstChild.parentNode); 
         ผลลัพธ์:
            <div id="parent">
                <p>Paragraph 1</p>
                <p>Paragraph 2</p>
                <p>Paragraph 3</p>
            </div> 
        

        // ใช้ nextElementSibling เพื่อเข้าถึง element ที่มีลำดับต่อจาก firstChild
        console.log(parentElement.parentElement); // ผลลัพธ์: <p>Paragraph 1</p>
        console.log(parentElement.firstElementChild.nextElementSibling); // ผลลัพธ์: <p>Paragraph 2</p>

    </script>
*/