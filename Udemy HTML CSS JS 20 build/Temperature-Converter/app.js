const celciusInput = document.getElementById("celcius"); // เลือก input element ที่มี id เป็น "celcius" แล้วเก็บไว้ในตัวแปร celciusInput
const fahrenheitInput = document.getElementById("fahrenheit"); // เลือก input element ที่มี id เป็น "fahrenheit" แล้วเก็บไว้ในตัวแปร fahrenheitInput
const kelvinInput = document.getElementById("kelvin"); // เลือก input element ที่มี id เป็น "kelvin" แล้วเก็บไว้ในตัวแปร kelvinInput
const tempInputs = document.querySelectorAll("input"); // เลือกทุก input element ทั้งหมดใน document แล้วเก็บไว้ในตัวแปร tempInputs

tempInputs.forEach(input => {
    input.addEventListener("input", (e) => {
        // แสดงตัวเลขที่ผู้ใช้ป้อนเข้ามา
        let tempValue = parseInt(e.target.value);
        // ชื่อของ input ที่มีการป้อนข้อมูลเข้ามา
        let inputName = e.target.name;

        // กรณีที่ไม่มีค่าที่ถูกป้อนเข้ามา
        if (e.target.value === "") {
            celciusInput.value = null; // ตั้งค่าค่าใน input ชื่อ "celcius" เป็น null
            fahrenheitInput.value = null; // ตั้งค่าค่าใน input ชื่อ "fahrenheit" เป็น null
            kelvinInput.value = null; // ตั้งค่าค่าใน input ชื่อ "kelvin" เป็น null
            return; // ออกจาก function
        }

        // กระบวนการแปลงอุณหภูมิตามชนิดของ input
        if (inputName === "celcius") {
            // แปลงอุณหภูมิ c -> f
            let fahrenheit = tempValue * 1.8 + 32;
            fahrenheitInput.value = fahrenheit.toFixed(2); // ตั้งค่าค่าใน input ชื่อ "fahrenheit" เป็นผลลัพธ์ที่แปลงแล้ว และปัดเศษทศนิยมเป็นสองตำแหน่งทศนิยม

            // แปลงอุณหภูมิ c -> k
            let kelvin = tempValue + 273;
            kelvinInput.value = kelvin.toFixed(2); // ตั้งค่าค่าใน input ชื่อ "kelvin" เป็นผลลัพธ์ที่แปลงแล้ว และปัดเศษทศนิยมเป็นสองตำแหน่งทศนิยม
        } else if (inputName === "fahrenheit") {
            // แปลงอุณหภูมิ f -> c
            let celcius = (tempValue - 32) / 1.8;
            celciusInput.value = celcius.toFixed(2); // ตั้งค่าค่าใน input ชื่อ "celcius" เป็นผลลัพธ์ที่แปลงแล้ว และปัดเศษทศนิยมเป็นสองตำแหน่งทศนิยม

            // แปลงอุณหภูมิ f -> k
            let kelvin = (tempValue - 32) / 1.8 + 273;
            kelvinInput.value = kelvin.toFixed(2); // ตั้งค่าค่าใน input ชื่อ "kelvin" เป็นผลลัพธ์ที่แปลงแล้ว และปัดเศษทศนิยมเป็นสองตำแหน่งทศนิยม
        } else if (inputName === "kelvin") {
            // แปลงอุณหภูมิ k -> c
            let celcius = tempValue - 273;
            celciusInput.value = celcius.toFixed(2); // ตั้งค่าค่าใน input ชื่อ "celcius" เป็นผลลัพธ์ที่แปลงแล้ว และปัดเศษทศนิยมเป็นสองตำแหน่งทศนิยม

            // แปลงอุณหภูมิ k -> f
            let fahrenheit = (tempValue - 273) * 1.8 + 32;
            fahrenheitInput.value = fahrenheit.toFixed(3); // ตั้งค่าค่าใน input ชื่อ "fahrenheit" เป็นผลลัพธ์ที่แปลงแล้ว และปัดเศษทศนิยมเป็นสองตำแหน่งทศนิยม
        }
    });
});
