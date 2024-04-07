const data = [
    "Python",
    "Java",
    "Javascript",
    "React",
    "Next.js"
];

const search = document.getElementById("search");
const outPut = document.getElementById('output');

// เพิ่มฟังก์ชัน onkeyup ที่จะทำงานเมื่อมีการปล่อยปุ่มขึ้น
search.onkeyup = function () {
    let word = search.value;
    let result = [];

    // ตรวจสอบว่ามีคำค้นหาหรือไม่
    if (word.length) {
        // กรองข้อมูลที่มี substring ตามคำค้น
        result = data.filter((value) => {
            return value.toLowerCase().includes(word.toLowerCase());
        });
        console.log(result);
    }

    // ตรวจสอบว่ามีผลลัพธ์หรือไม่
    if (result.length > 0) {
        // สร้าง HTML จากผลลัพธ์ที่พบ
        const content = result.map((value) => {
            return "<li onclick=selectChoice(this)>" + value + "</li>";
        });
        // แสดงผลลัพธ์ใน HTML
        outPut.innerHTML = "<ul>" + content.join("") + "</ul>";
    } else {
        // ล้างผลลัพธ์ที่แสดง
        outPut.innerHTML = "";
    }
};

// ฟังก์ชันที่จะเรียกเมื่อผู้ใช้คลิกเลือกรายการ
function selectChoice(word) {
    // กำหนดค่าใน input เป็นค่าที่ผู้ใช้เลือก
    search.value = word.innerHTML;
}
