const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');

// กำหนดข้อความที่ต้องการแสดง
const text = " Hello World Pdev   ";

// คำนวณความเร็วตามค่าที่ผู้ใช้เลือก
let speed = 300 / speedEl.value;

// เริ่มต้นตำแหน่งของตัวอักษร
let characterId = 1;

// เรียกใช้ฟังก์ชันเพื่อแสดงข้อความ
writeText();

function writeText(){
    /*
        แสดงข้อความตามตำแหน่งปัจจุบันของตัวอักษร  
        บรรทัดนี้ใช้เมธอด slice ของ JavaScript กับตัวแปร text เพื่อดึงส่วนของข้อความ
        ตั้งแต่ตำแหน่งที่ 0 ถึงตำแหน่งที่ characterId
    */ 
    textEl.innerText = text.slice(0, characterId);
    
    // เพิ่มตำแหน่งของตัวอักษร
    characterId++;
    
    // ตั้งเวลาในการเรียกใช้ฟังก์ชันใหม่
    setTimeout(writeText, speed);
    
    // ถ้าเราได้แสดงตัวอักษรทั้งหมดแล้ว ให้กลับไปที่ตำแหน่งแรก
    if(characterId > text.length){
        characterId = 1;
    }
}

// ตั้งค่าเวลาที่ใช้ในการแสดงข้อความต่อตัวอักษรตามความเร็วที่ผู้ใช้เลือก
speedEl.addEventListener('input', (e) => {
    speed = 300 / e.target.value;
});
