const count = 10; // จำนวนรูปภาพที่ต้องการดึงจาก API
const apiKey = 'BWvf8HE_09UjamS47BSHHfj5Gkn6nRux7V__oJw8YuI'; // API key สำหรับการเชื่อมต่อกับ Unsplash API
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`; // URL ของ API ที่ใช้สำหรับการดึงรูปภาพจาก Unsplash

const imgContainer = document.getElementById("img-container"); // เก็บ Element ของ container ที่ใช้แสดงรูปภาพ
let photoArrays = []; // เก็บข้อมูลรูปภาพที่ได้จาก API โดยใช้เป็น Array

// ฟังก์ชัน async สำหรับดึงข้อมูลรูปภาพจาก Unsplash API ด้วย fetch
async function getPhotos() {
    try {
        const res = await fetch(apiUrl); // เรียกใช้ API ด้วย fetch
        photoArrays = await res.json(); // รับข้อมูล JSON ที่ได้จาก API และเก็บไว้ในตัวแปร photoArrays
        displayImg(); // เรียกใช้ฟังก์ชัน displayImg เพื่อแสดงรูปภาพ
    } catch (err) {
        console.log(err); // แสดง error ถ้าการดึงข้อมูลไม่สำเร็จ
    }
}

// ฟังก์ชันสำหรับแสดงรูปภาพบนหน้าเว็บ
function displayImg() {
    photoArrays.forEach((photo => {
        const item = document.createElement('a'); // สร้าง Element 'a' เพื่อใช้เป็นลิงก์สำหรับรูปภาพ
        item.setAttribute('href', photo.links.html); // กำหนด href ให้กับ Element 'a' เพื่อให้มีลิงก์ไปยังหน้ารูปที่อยู่ใน Unsplash
        item.setAttribute('target', '_blank'); // เปิดลิงก์ในหน้าต่างใหม่

        const img = document.createElement('img'); // สร้าง Element 'img' เพื่อแสดงรูปภาพ
        img.setAttribute('src', photo.urls.regular); // กำหนด URL ของรูปภาพให้กับ src ของ Element 'img'
        img.setAttribute('title', photo.alt_description); // กำหนด title ของรูปภาพ
        img.setAttribute('alt', photo.alt_description); // กำหนด attribute alt ของรูปภาพ

        item.appendChild(img); // เพิ่ม Element 'img' เข้าไปใน Element 'a'
        imgContainer.appendChild(item); // เพิ่ม Element 'a' (ที่มีรูปภาพและลิงก์) เข้าไปใน Element ของ container ที่ใช้แสดงรูปภาพ
    }));
}

// ตรวจสอบเมื่อเกิดการ scroll ในหน้าเว็บ
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        // ถ้า scroll ไปถึงส่วนท้ายของหน้าเว็บให้เรียกใช้ getPhotos() เพื่อดึงรูปภาพเพิ่ม
        getPhotos();
    }
});

// เรียกใช้ฟังก์ชัน getPhotos() เมื่อโหลดหน้าเว็บครั้งแรก
getPhotos();
