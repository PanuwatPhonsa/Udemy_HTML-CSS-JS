// สร้างอาร์เรย์เสียงที่ต้องการใช้
const sounds = ["Effect1", "Effect2", "Effect3", "Effect4", "Effect5"];

// สร้างปุ่มสำหรับเล่นเสียงแต่ละตัว
sounds.forEach(sound => {
    // สร้างปุ่ม
    const btn = document.createElement("button");
    // กำหนดข้อความของปุ่มเป็นชื่อเสียง
    btn.innerText = sound;
    // เพิ่มคลาส 'btn' ให้กับปุ่ม
    btn.classList.add("btn");
    // เพิ่ม event listener สำหรับคลิกที่ปุ่ม
    btn.addEventListener("click", () => {
        // เมื่อคลิกที่ปุ่ม จะหยุดการเล่นเสียงทั้งหมดก่อน
        stopSound();
        // เล่นเสียงที่ตรงกับปุ่มที่ถูกคลิก
        document.getElementById(sound).play();
    });
    // เพิ่มปุ่มลงใน element ที่มี id เป็น 'controller'
    document.getElementById("controller").appendChild(btn);
});

// ฟังก์ชันหยุดเสียงทั้งหมด
function stopSound() {
    sounds.forEach(sound => {
        // หยุดการเล่นเสียงและเริ่มที่ต้นของเสียงทั้งหมด
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    });
}
