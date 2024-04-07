let city = "Loei";
const apiKey = "f907202ab1a95db2cb9ef82b68ad228d";

const form = document.getElementById('form');
const search = document.getElementById('search');

// เรียกใช้ฟังก์ชัน setData เมื่อโหลดหน้าเว็บ
function setData() {
    showWeather();
}

// แสดงข้อมูลสภาพอากาศ
async function showWeather() {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        showDataToUI(data);

    } catch (error) {
        console.log(error);
    }
}

// แสดงข้อมูลสภาพอากาศที่ได้จาก API ลงใน UI
function showDataToUI(data) {
    console.log(data);
    const cityElement = document.getElementById('city');
    const stateElement = document.getElementById('state');
    const weatherElement = document.getElementById('weather');
    const statusElement = document.getElementById('status');
    const humidityElement = document.getElementById('humidity');
    const windElement = document.getElementById('wind');

    cityElement.innerText = data.name;
    stateElement.innerText = data.sys.country;
    weatherElement.children[0].innerHTML = calculate(parseInt(data.main.temp)) + " C&deg;";
    weatherElement.children[1].innerHTML = ` Max : ` + calculate(parseInt(data.main.temp_max)) + " C&deg;" + ' Min : ' + calculate(parseInt(data.main.temp_min)) + " C&deg;";

    // แสดงข้อมูลสภาพอากาศและความชื้น
    statusElement.innerText = data.weather[0].description;
    humidityElement.innerText = 'Humidity : ' + data.main.humidity;
    windElement.innerText = 'Wind Speed : ' + data.wind.speed;
}

// คำนวณอุณหภูมิจาก Kelvin เป็น Celsius
function calculate(k) {
    return k - 273;
}

// ฟังก์ชันที่เรียก API เมื่อ submit ฟอร์ม
function callDataAPI(e) {
    e.preventDefault();
    city = search.value;
    showWeather();
}

// เพิ่ม Event Listener ให้กับฟอร์ม
form.addEventListener('submit', callDataAPI);

// เรียกใช้ฟังก์ชัน setData เพื่อแสดงข้อมูลสภาพอากาศเริ่มต้น
setData();
