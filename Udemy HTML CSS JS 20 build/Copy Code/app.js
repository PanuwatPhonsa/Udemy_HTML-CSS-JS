const btn = document.querySelector(".btn"); // เลือก element ที่มี class เป็น "btn" แล้วเก็บไว้ในตัวแปร btn
const coupon = document.querySelector(".coupon"); // เลือก element ที่มี class เป็น "coupon" แล้วเก็บไว้ในตัวแปร coupon

btn.addEventListener("click", () => {
  coupon.select(); // select() เลือกข้อความใน input ที่มี class เป็น "coupon"
  coupon.setSelectionRange(0, 999999); // setSelectionRange(0, 999999) ตั้งค่าการเลือกข้อความใน input ที่มี class เป็น "coupon" จากตำแหน่ง 0 ถึง 999999

/* navigator เป็นอ็อบเจกต์ใน JavaScript ที่ใช้ในการให้ข้อมูลเกี่ยวกับเบราว์เซอร์และระบบปฏิบัติการที่กำลังทำงานอยู่ ซึ่งมีคุณสมบัติหรือเมทอดที่ช่วยให้เราสามารถเข้าถึงข้อมูลเหล่านี้ได้ เช่น:

    navigator.userAgent: คืนค่าสตริงที่บ่งบอกเกี่ยวกับเบราว์เซอร์ที่ผู้ใช้ใช้อยู่ ซึ่งรวมถึงข้อมูลเกี่ยวกับรุ่นและระบบปฏิบัติการ

    navigator.platform: คืนค่าสตริงที่บ่งบอกถึงระบบปฏิบัติการของผู้ใช้

    navigator.clipboard: ใช้ในการเข้าถึงคลิปบอร์ดของเครื่อง ซึ่งสามารถคัดลอกและวางข้อความได้

    navigator.language: คืนค่าสตริงที่บ่งบอกถึงภาษาที่ถูกตั้งค่าในเบราว์เซอร์ของผู้ใช้ 
*/

  // คัดลอกข้อความที่ถูกเลือกไว้ใน input ที่มี class เป็น "coupon" ลงในคลิปบอร์ด
  navigator.clipboard.writeText(coupon.value);

  // เปลี่ยนข้อความบนปุ่มเป็น "Copy Successfully!!"
  btn.textContent = "Copy Successfully!!";

  // กำหนดให้ปุ่มเปลี่ยนข้อความกลับเป็น "Copy Code Now!!" หลังจากผ่านไป 3 วินาที
  setTimeout(() => {
    btn.textContent = "Copy Code Now!!";
  }, 3000);
});
