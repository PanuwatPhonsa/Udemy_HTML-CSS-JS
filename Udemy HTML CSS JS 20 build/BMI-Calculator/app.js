const btn = document.querySelector(".btn"); // เลือก element ที่มี class เป็น "btn" แล้วเก็บไว้ในตัวแปร btn
const result = document.querySelector(".result"); // เลือก element ที่มี class เป็น "result" แล้วเก็บไว้ในตัวแปร result

btn.addEventListener("click", (e) => {
    e.preventDefault(); // ป้องกันการรีเซ็ตค่าฟอร์มทุกครั้งเมื่อคลิกปุ่ม
    let weight = document.getElementById("weight").value; // ดึงค่าจาก input ที่มี id เป็น "weight" แล้วเก็บไว้ในตัวแปร weight
    let height = document.getElementById("height").value; // ดึงค่าจาก input ที่มี id เป็น "height" แล้วเก็บไว้ในตัวแปร height

    // ตรวจสอบว่าค่าของ weight หรือ height เป็นค่าว่างหรือไม่เป็นตัวเลข
    if (weight === "" || isNaN(weight)) {
        return result.innerHTML = "Please enter your weight!!"; // แสดงข้อความผลลัพธ์หากข้อมูลน้ำหนักไม่ถูกต้องหรือไม่ได้กรอกข้อมูล
    } else if (height === "" || isNaN(height)) {
        return result.innerHTML = "Please enter your height!!"; // แสดงข้อความผลลัพธ์หากข้อมูลส่วนสูงไม่ถูกต้องหรือไม่ได้กรอกข้อมูล
    } else {
        height = height / 100; // แปลงค่าส่วนสูงเป็นเมตร
        let bmi = (weight / Math.pow(height, 2)).toFixed(2); // คำนวณดัชนีมวลกาย (BMI)

        // แสดงผลข้อความและสีพื้นหลังตามค่าดัชนีมวลกาย (BMI) ที่ได้
        if (bmi < 18.5) {
            showResult(bmi, "Thin", "blue"); // เรียกใช้ฟังก์ชัน showResult เพื่อแสดงผลลัพธ์ (ผอม)
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            showResult(bmi, "Normal", "green"); // เรียกใช้ฟังก์ชัน showResult เพื่อแสดงผลลัพธ์ (ปกติ)
        } else if (bmi >= 25 && bmi <= 29.9) {
            showResult(bmi, "Fat", "orange"); // เรียกใช้ฟังก์ชัน showResult เพื่อแสดงผลลัพธ์ (อ้วน)
        } else {
            showResult(bmi, "Obese", "red"); // เรียกใช้ฟังก์ชัน showResult เพื่อแสดงผลลัพธ์ (อ้วนมาก)
        }
    }
});

// ฟังก์ชันที่ใช้แสดงผลลัพธ์ของค่าดัชนีมวลกาย (BMI) และสีพื้นหลังที่แตกต่างกันตามผลลัพธ์
function showResult(bmi, message, color) {
    result.style.backgroundColor = color; // กำหนดสีพื้นหลังของผลลัพธ์ตามที่ระบุ
    return result.innerHTML = `result = ${bmi} (${message})`; // แสดงผลลัพธ์ในรูปแบบ "result = BMI (Message)"
}


// const btn = document.querySelector(".btn")
// const result = document.querySelector(".result")

// btn.addEventListener("click",(e)=>{
//     e.preventDefault()//ไม่ต้องมีการรีเซ็ตค่าที่อยู่ในแบบฟอร์ม ให้คงสภาพตัวเลขและน้ำหนักส่วนสูงเอาไว้
//     let weight = document.getElementById("weight").value //ดึงเอาค่าที่ป้อนค่าเก็บไว้ที่ value และส่งไปที่เก็บที่ weight อีกที
//     let height = document.getElementById("height").value //ดึงเอาค่าที่ป้อนค่าเก็บไว้ที่ value และส่งไปที่เก็บที่ height อีกที

//     if(weight === "" || isNaN(weight)){
//         return result.innerHTML = "Please enter your weight!!"
//     }else if(height === "" || isNaN(height)){
//         return result.innerHTML = "Please enter your height!!"
//     }else{
//         height = height/100
//         let bmi = (weight/Math.pow(height,2)).toFixed(2)

//         //บอกเกณฑ์
//         if(bmi<18.5){
//             showResult(bmi,"Thin","blue")
//             //หรือ return result.innerHTML = `result = ${bmi} (Thin)`
//         }else if(bmi >= 18.5 && bmi <= 24.9){
//             showResult(bmi,"Normal","green")
//             //หรือ return result.innerHTML = `result = ${bmi} (Normal)`
//         }else if(bmi >= 25 && bmi <= 29.9){
//             showResult(bmi,"Fat","orange")
//             //หรือ return result.innerHTML = `result = ${bmi} (fat)`
//         }else{
//             showResult(bmi,"Obese","red")
//             //หรือ return result.innerHTML = `result = ${bmi} (obese)`
//         }

//     }
// })

// function showResult(bmi,meseage,color){
//     result.style.backgroundColor = color
//     return result.innerHTML = `result = ${bmi} (${meseage})`
// }

