const videoEl = document.getElementById('video'); // ดึง Element วิดีโอโดยใช้ ID 'video'
const btnRequest = document.getElementById('requestbtn'); // ดึงปุ่มเพื่อร้องขอสิทธิ์การเข้าถึงอุปกรณ์
const btnShare = document.getElementById('sharebtn'); // ดึงปุ่มเพื่อขอใช้งานโหมด Picture-in-Picture

btnRequest.addEventListener('click', () => {
    selectMediaStream(); // เมื่อคลิกปุ่ม "Request" จะเรียกฟังก์ชัน selectMediaStream() เพื่อขอเข้าถึงอุปกรณ์
});

btnShare.addEventListener('click', async () => {
    btnShare.disabled = true; // ปิดปุ่ม "Share" จากการกดเพื่อป้องกันการกดซ้ำ
    await videoEl.requestPictureInPicture(); // ขอใช้โหมด Picture-in-Picture สำหรับ Element วิดีโอ videoEl
    btnShare.disabled = false; // เปิดให้ปุ่ม "Share" กดได้อีกครั้งหลังจากใช้งาน Picture-in-Picture เสร็จสิ้น
});

// ฟังก์ชันสำหรับร้องขอเข้าถึงอุปกรณ์แสดงหน้าจอของผู้ใช้
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia(); // ร้องขอเข้าถึงอุปกรณ์แสดงหน้าจอของผู้ใช้
        
        videoEl.srcObject = mediaStream; // กำหนดอุปกรณ์ที่เลือกไว้ให้กับ Element วิดีโอ videoEl
        videoEl.onloadedmetadata = () => {
            videoEl.play(); // เมื่อข้อมูลวิดีโอถูกโหลดเสร็จแล้ว ให้เริ่มเล่นวิดีโอ
        };
    } catch (error) {
        console.log(error); // แสดงข้อผิดพลาดที่เกิดขึ้นในกรณีที่ไม่สามารถขอใช้งานอุปกรณ์ได้
    }
}

/* 
เมื่อผู้ใช้คลิกปุ่ม "Request", โค้ดจะเรียกใช้ selectMediaStream() 
เพื่อขอเข้าถึงอุปกรณ์แสดงหน้าจอของผู้ใช้ด้วย getDisplayMedia() และกำหนด srcObject ของ Element 
วิดีโอ videoEl เพื่อแสดงอุปกรณ์ที่เลือกไว้ จากนั้นใช้ onloadedmetadata เพื่อเริ่มเล่นวิดีโอเมื่อมันถูกโหลดเสร็จ

เมื่อผู้ใช้คลิกปุ่ม "Share", โค้ดจะใช้ requestPictureInPicture() เพื่อขอใช้โหมด PiP สำหรับ Element 
วิดีโอ videoEl ที่กำลังแสดงผล และทำให้ปุ่ม "Share" ไม่สามารถกดได้ในขณะที่กำลังใช้ PiP และเมื่อ PiP 
ปิดลง videoEl จะเปิดให้ปุ่ม "Share" กดได้อีกครั้ง 
*/
