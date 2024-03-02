const container = document.getElementById("container"); // เลือก element ที่มี id เป็น "container" และเก็บไว้ในตัวแปร container

const getCountries = async () => {
    const url = "https://restcountries.com/v2/all"; // URL สำหรับเรียกข้อมูลประเทศ
    const res = await fetch(url); // เรียกใช้งาน fetch API เพื่อดึงข้อมูลจาก URL
    const items = await res.json(); // ใช้ await เพื่อรอข้อมูล JSON จาก Promise ที่ถูกส่งกลับมา แปลงเป็น JSON
    items.forEach(element => {
        createCard(element); // เรียกใช้ฟังก์ชัน createCard สำหรับแต่ละข้อมูลประเทศ
    });
}

const createCard = (data) => {
    const cardEl = document.createElement("div"); // สร้าง element div สำหรับบัตรข้อมูลประเทศแต่ละอัน
    cardEl.classList.add("country"); // เพิ่มคลาส "country" ให้กับ div ที่สร้างขึ้น

    // สร้าง HTML สำหรับแสดงข้อมูลประเทศแต่ละอัน
    const contentHTML = `
        <div class="img-container">
            <img src="${data.flag}" />
        </div>
        <div class="img-info">
            <h3 class="name">${data.name}</h3>
            <small>Capital :<span>${data.capital}</span></small>
        </div>
    `;
    cardEl.innerHTML = contentHTML; // กำหนด HTML ที่สร้างไว้ให้กับ div ที่สร้างขึ้น
    container.appendChild(cardEl); // เพิ่ม div ที่สร้างไว้เข้าไปใน container ที่เลือกมาก่อนหน้านี้
}

getCountries(); // เรียกใช้ฟังก์ชันเพื่อดึงข้อมูลประเทศและสร้างบัตรสำหรับแสดงข้อมูล
