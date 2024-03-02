const result = document.getElementById("result"); // เลือก element ที่มี id เป็น "result" แล้วเก็บไว้ในตัวแปร result
const filter = document.getElementById("filter"); // เลือก element ที่มี id เป็น "filter" แล้วเก็บไว้ในตัวแปร filter
const listItem = []; // สร้างตัวแปร listItem เป็น array เพื่อเก็บข้อมูล element li ที่สร้าง

filter.addEventListener("input", (e) => {
  const search = e.target.value.toLowerCase(); // เก็บค่าของการค้นหาที่ผู้ใช้ป้อนเข้ามาในตัวแปร search และเปลี่ยนเป็นตัวพิมพ์เล็กทั้งหมด
  listItem.forEach((item) => {
    /* 
    includes() เป็นเมธอดที่ใช้กับอ็อบเจ็กต์ของ JavaScript ที่เป็น Array 
    เพื่อตรวจสอบว่ามีค่าที่กำหนดในอาร์เรย์หรือไม่ โดยการเปรียบเทียบแบบเนสเท็ด (strict equality)

    const array = [1, 2, 3, 4, 5];

    // ตรวจสอบว่ามีค่า 3 ในอาร์เรย์หรือไม่
    const isInArray = array.includes(3);
    const isOutArray = array.includes(6)

    console.log(isInArray); // true
    console.log(isOutArray) //false
    */
    if (item.innerText.toLowerCase().includes(search)) {
      // ถ้าข้อความที่อยู่ใน item มีการค้นหาที่ตรงกัน
      item.classList.remove("hide"); // แสดงรายการที่ค้นเจอโดยลบ class "hide" ออก
    } else {
      // ถ้าข้อความที่อยู่ใน item ไม่เกี่ยวข้องกับการค้นหา
      item.classList.add("hide"); // ซ่อนรายการที่ไม่เกี่ยวข้องโดยเพิ่ม class "hide"
    }
  });
});

async function getData() {
  const url = "https://restcountries.com/v2/all";
  const res = await fetch(url); // ส่งคำขอไปยัง URL และรอข้อมูล response
  const items = await res.json(); // แปลงข้อมูล response เป็น JSON format
  result.innerHTML = ""; // ล้างข้อมูลที่อยู่ใน element result

  items.forEach((data) => {
    const li = document.createElement("li"); // สร้าง element li ใหม่
    listItem.push(li); // เพิ่ม element li ลงใน listItem array

    // กำหนด HTML ให้กับ element li โดยใส่รายละเอียดของแต่ละประเทศ
    li.innerHTML = `
            <img src="${data.flag}" />
            <div class="info">
                <h4>${data.name}</h4>
                <p>${formatNumber(data.population)}</p>
            </div>
        `;

    result.appendChild(li); // เพิ่ม element li ลงใน element result
  });
}

function formatNumber(num) {
  // แปลงตัวเลขให้เป็นรูปแบบที่มี comma ในการคั่นพัน หมื่น ล้าน เป็นต้น
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

getData(); // เรียกใช้ฟังก์ชัน getData() เพื่อดึงข้อมูลประเทศ
