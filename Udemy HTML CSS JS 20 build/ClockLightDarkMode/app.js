const timeEl = document.querySelector(".time"); // เลือก element ที่มีคลาส "time" และเก็บไว้ในตัวแปร timeEl
const btntoggle = document.querySelector(".toggle"); // เลือก element ที่มีคลาส "toggle" และเก็บไว้ในตัวแปร btntoggle

function setTime() {
  const time = new Date(); // สร้าง object ของเวลาปัจจุบัน
  const hours = time.getHours(); // ดึงค่าชั่วโมงจาก object ของเวลา
  const minutes = time.getMinutes(); // ดึงค่านาทีจาก object ของเวลา
  const seconds = time.getSeconds(); // ดึงค่าวินาทีจาก object ของเวลา
  // แสดงผลเวลาในรูปแบบ HH:MM:SS โดยใช้เงื่อนไข ternary operator เพื่อเพิ่มเลข 0 ข้างหน้าหากน้อยกว่า 10
  timeEl.innerHTML = `${hours < 10 ? `0${hours}` : hours}:
        ${minutes < 10 ? `0${minutes}` : minutes}:
        ${seconds < 10 ? `0${seconds}` : seconds}`;
}

// เพิ่ม Event Listener สำหรับการคลิกที่ปุ่ม toggle (เปลี่ยนโหมดหน้าเว็บ)
btntoggle.addEventListener("click", (e) => {
  const html = document.querySelector("html"); // เลือก element <html> และเก็บไว้ในตัวแปร html
  // ตรวจสอบว่า <html> มีคลาส "dark" หรือไม่
  if (html.classList.contains("dark")){
    html.classList.remove("dark"); // ถ้ามี ให้ลบคลาส "dark" ออก
    e.target.innerHTML = "Dark Mode"; // เปลี่ยนข้อความบนปุ่ม toggle เป็น "Dark Mode"
  } else {
    html.classList.add("dark"); // ถ้าไม่มี ให้เพิ่มคลาส "dark" เข้าไป
    e.target.innerHTML = "Light Mode"; // เปลี่ยนข้อความบนปุ่ม toggle เป็น "Light Mode"
  }
});

setTime(); // เรียกใช้ฟังก์ชัน setTime เพื่อแสดงเวลาที่เริ่มต้น
setInterval(setTime, 1000); // เรียกใช้ฟังก์ชัน setTime ทุก 1 วินาที เพื่ออัพเดทเวลาทุกๆ 1 วินาที

/*  
ในโค้ด JavaScript ภายใน Event Listener ที่ถูกเชื่อมต่อกับปุ่มหรือ element อื่น ๆ 
เมื่อเกิดการเรียกใช้งานฟังก์ชัน (callback function) ที่ต้องการทำงานเมื่อเกิดเหตุการณ์ต่าง ๆ มีค่า event object ที่ถูกสร้างขึ้นและส่งผ่านไปยังฟังก์ชันนั้น เรียกว่า Event Object หรือ event.

e.target คือ property ใน Event Object ที่ชี้ไปยัง element ที่เป็นตัวกำหนดเหตุการณ์ (event target)
 ที่เกิดเหตุการณ์นั้น ๆ หรือ element ที่ทำให้เกิดเหตุการณ์นั้นๆ เกิดขึ้น เช่น เมื่อมีการคลิกปุ่ม ถ้า Event Listener ถูกติดตั้งบนปุ่มนั้น ๆ แล้วเมื่อมีการคลิก e.target จะชี้ไปยัง element ปุ่มนั้นๆ

ดังนั้น e.target.innerHTML คือการเข้าถึง property innerHTML ของ element ที่ทำให้เกิดเหตุการณ์ 
ซึ่งในที่นี้คือปุ่มที่ถูกคลิก ซึ่งใช้เพื่อเปลี่ยนแปลงเนื้อหาที่อยู่ภายใน element นั้นๆ ตามโค้ดที่ได้กำหนดไว้ในโค้ด JavaScript นั้นๆ ในที่นี้คือการเปลี่ยนข้อความบนปุ่ม toggle ระหว่าง "Dark Mode" และ "Light Mode" ในขณะที่ผู้ใช้กดคลิกปุ่มนั้นๆ 
*/
