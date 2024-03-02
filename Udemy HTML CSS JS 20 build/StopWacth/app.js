const timeEl = document.querySelector(".time"); // เลือก element ที่มี class เป็น "time" แล้วเก็บไว้ในตัวแปร timeEl
const startBtn = document.querySelector(".start"); // เลือก element ที่มี class เป็น "start" แล้วเก็บไว้ในตัวแปร startBtn
const pauseBtn = document.querySelector(".pause"); // เลือก element ที่มี class เป็น "pause" แล้วเก็บไว้ในตัวแปร pauseBtn
const resetBtn = document.querySelector(".reset"); // เลือก element ที่มี class เป็น "reset" แล้วเก็บไว้ในตัวแปร resetBtn

// การกำหนดตัวแปรสำหรับเก็บค่าเวลาในรูปแบบ millisecond, second, minute, และ hour
let [millseconds, second, minutes, hours] = [0, 0, 0, 0];
let timer = null; // ตัวแปรเก็บ setInterval สำหรับการทำงานของตัวจับเวลา

startBtn.addEventListener("click", startTimer); // เมื่อคลิกที่ปุ่ม "start" ให้เรียกฟังก์ชัน startTimer
pauseBtn.addEventListener("click", pauseTimer); // เมื่อคลิกที่ปุ่ม "pause" ให้เรียกฟังก์ชัน pauseTimer
resetBtn.addEventListener("click", resetTime); // เมื่อคลิกที่ปุ่ม "reset" ให้เรียกฟังก์ชัน resetTime

function startTimer() {
    //เงื่อนไขเพื่อควบคุมเวลา
    if (timer != null) {
        clearInterval(timer); // หยุดการทำงานของ setInterval ถ้ามีการเริ่มต้นในครั้งก่อนหน้า
    }
    timer = setInterval(displayTime, 10); // เริ่มต้นตัวจับเวลาด้วยการเรียกใช้ setInterval ทุกๆ 10ms
}

function pauseTimer() {
    clearInterval(timer); // หยุดการทำงานของ setInterval
}

function resetTime() {
    clearInterval(timer); // หยุดการทำงานของ setInterval
    // รีเซ็ตค่าเวลาทั้งหมดให้เป็น 0
    hours = 0;
    minutes = 0;
    second = 0;
    millseconds = 0;
    timeEl.innerHTML = "00:00:00:000"; // แสดงเวลาเป็น 00:00:00:000 ใน element ที่มี class เป็น "time"
}

function displayTime() {
    millseconds += 10; // เพิ่มค่า millisecond ทุก 10ms
    // ตรวจสอบและเปลี่ยนค่าของ millisecond, second, minutes, hours ตามเงื่อนไขที่กำหนด
    if (millseconds === 1000) {
        millseconds = 0;
        second += 1;
    } else if (second === 60) {
        second = 0;
        minutes += 1;
    } else if (minutes === 60) {
        minutes = 0;
        hours += 1;
    }
    // กำหนดเวลาแสดงผลในรูปแบบ 00:00:00:000
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = second < 10 ? "0" + second : second;
    let ms = millseconds < 10 ? "00" + millseconds : millseconds < 100 ? "0" + millseconds : millseconds;
    timeEl.innerHTML = `${h}:${m}:${s}:${ms}`; // แสดงเวลาใน element ที่มี class เป็น "time"
}
