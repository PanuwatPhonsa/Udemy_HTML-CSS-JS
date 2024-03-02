// เลือก element ที่มีคลาส 'count'
const countEl = document.querySelector(".count");

// เลือก element input จาก DOM
const input = document.querySelector("input");

// เพิ่ม event listener สำหรับตรวจสอบการปล่อยปุ่มหลังจากป้อนข้อมูลใน input
input.addEventListener("keyup", () => {
    // ดึงค่าข้อความจาก input และทำให้ทั้งหมดเป็นตัวพิมพ์เล็ก
    let word = input.value.toLowerCase();

    // กำหนดตัวแปรเพื่อเก็บจำนวนสระในคำ
    let vowelCount = 0;

    // วนลูปตามทุกตัวอักษรในคำ
    for (let i = 0; i < word.length; i++) {
        // ดึงตัวอักษรที่ตำแหน่ง i
        let letter = word[i];

        // ตรวจสอบว่าตัวอักษรเป็นสระหรือไม่
        if (letter.match(/([a,e,i,o,u])/)) {
            // ถ้าเป็นสระ ให้เพิ่มจำนวนสระ
            vowelCount++;
        }
    }

    // แสดงผลลัพธ์จำนวนสระใน element 'countEl'
    countEl.innerHTML = `${vowelCount}`;
});
