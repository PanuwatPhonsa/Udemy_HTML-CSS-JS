const search = document.querySelector(".search"); // เลือก element ที่มี class "search" จาก HTML แล้วเก็บไว้ในตัวแปร search
const input = document.querySelector(".input"); // เลือก element ที่มี class "input" จาก HTML แล้วเก็บไว้ในตัวแปร input
const btn = document.querySelector(".btn"); // เลือก element ที่มี class "btn" จาก HTML แล้วเก็บไว้ในตัวแปร btn

btn.addEventListener("click", () => {
    // เมื่อมีการคลิกที่ปุ่ม (event click)
    search.classList.toggle("active"); // ทำการ toggle เพิ่ม class "active" ของ element ที่ชื่อ "search" ใน HTML
    input.focus(); // ทำให้ cursor หรือ focus ของการพิมพ์ข้อความอยู่ใน input element
});
