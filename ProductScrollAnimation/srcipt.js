const categories = document.querySelectorAll('.category')

// เมื่อหน้าต่างถูกเลื่อนให้เรียกฟังก์ชัน showCategory
window.addEventListener('scroll', showCategory)

function showCategory() {
    /*
        window.innerHeight: คือความสูงของหน้าต่างเบราว์เซอร์ (viewport) ซึ่งเป็นค่าความสูงของพื้นที่
        ที่แสดงผลเนื้อหาทั้งหมดภายในหน้าต่างเบราว์เซอร์
        - 200: ลบด้วย 200 พิกเซล
        ดังนั้น calculateHeight จะเก็บค่าความสูงที่ลดลง 200 พิกเซลจากความสูงของหน้าต่างเบราว์เซอร์.
    */
    const calculateHeight = window.innerHeight - 200;
    console.log(window.innerHeight)

    // วนลูปทุกรายการที่มีคลาส 'category'
    categories.forEach(category => {
        /* 
            คำนวณตำแหน่งของ category ในหน้าต่างเบราว์เซอร์ 
            เมธอด getBoundingClientRect() จะคืนค่าขนาดขององค์ประกอบและตำแหน่งขององค์ประกอบ
            ที่สัมพันธ์กับวิวพอร์ต

            เมธอดนี้ส่งคืนอ็อบเจ็กต์ DOMRect ที่มีคุณสมบัติแปดประการ: ซ้าย, บน, ขวา, ล่าง,
             x, y, ความกว้าง, ความสูง

            หมายเหตุ:จำนวนการเลื่อนที่ทำขึ้นบนพื้นที่วิวพอร์ตจะถูกนำมาพิจารณาด้วยเมื่อคำนวณสี่เหลี่ยม
            ที่มีขอบ ซึ่งหมายความว่าขอบของสี่เหลี่ยมผืนผ้า (บน ซ้าย ล่าง และขวา) 
            จะเปลี่ยนค่าทุกครั้งที่ตำแหน่งการเลื่อนเปลี่ยนไป

            การเพิ่ม .top เข้าไปในการเรียกใช้ getBoundingClientRect() หมายความว่าคุณกำลังเข้าถึงค่า
            ที่เกี่ยวข้องกับตำแหน่งขอบบน (top edge) ของ element นั้นๆ จากขอบบนของ viewport 
            หรือหน้าต่างเบราว์เซอร์ที่แสดงผล.

            ค่าที่ได้จาก topPosition คือตำแหน่งขอบบนของ element นี้จากขอบบนของ viewport. 
            นั่นคือระยะห่างระหว่างขอบบนของ element และขอบบนของ viewport. ถ้า topPosition 
            เป็นค่าบวก, แสดงว่า element ตั้งอยู่ด้านล่างขอบบนของ viewport, และถ้าเป็นค่าลบ,
            แสดงว่า element ตั้งอยู่ด้านบนขอบบนของ viewport.
        */
        const topPosition = category.getBoundingClientRect().top;
        console.log(topPosition);
        // เช็คว่าตำแหน่งของ category อยู่ในพื้นที่ที่เหลือจาก calculateHeight หรือไม่
        if (topPosition < calculateHeight) {
            console.log("s in");
            category.classList.add('active'); // เพิ่มคลาส 'active' ถ้าอยู่ในพื้นที่ที่เหลือจาก calculateHeight
        } else {
            console.log('s out')
            category.classList.remove('active'); // ลบคลาส 'active' ถ้าไม่อยู่ในพื้นที่ที่เหลือจาก calculateHeight
        }
    })
}
