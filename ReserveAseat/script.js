// เลือก element ที่มี class "container"
const container = document.querySelector(".container")

// เลือกทุกที่นั่งที่ไม่ถูกจองภายในคลาส "seat" ภายในคลาส "row"
const seats = document.querySelectorAll(".row .seat:not(.reserved)")

// เลือก element ที่มี id "count" และ "total"
const count = document.getElementById("count")
const total = document.getElementById("total")

// เลือก element ที่มี id "movie"
const movieSelect = document.getElementById("movie")

// ราคาของภาพยนตร์ที่ถูกเลือก
let price = +movieSelect.value;

// เมื่อคลิกที่ "container"
container.addEventListener('click',e =>{
    // ตรวจสอบว่าองค์ประกอบที่ถูกคลิกคือที่นั่ง ("seat") และไม่ได้ถูกจอง ("reserved")
    if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')){ 
        // เปลี่ยนแปลงคลาสเป็น 'selected' หรือยกเลิกการเลือกของที่นั่งนั้น ๆ เมื่อมีการกดหรือ toggle()
        e.target.classList.toggle('selected')
        // อัพเดทข้อมูลที่นั่งที่ถูกเลือก
        updateSelected();
    }
})

// เมื่อมีการเปลี่ยนภาพยนตร์ที่ถูกเลือก
movieSelect.addEventListener('change', e => {
    // อัพเดทราคาของภาพยนตร์
    price = +e.target.value
    // บันทึกข้อมูลภาพยนตร์ที่ถูกเลือก
    setMovieData(e.target.selectedIndex,e.target.value)
    // อัพเดทข้อมูลที่นั่งที่ถูกเลือก
    updateSelected();
})

// อัพเดทข้อมูลที่นั่งที่ถูกเลือก
function updateSelected(){
    // เลือกที่นั่งที่ถูกเลือกทั้งหมด
    const selectedSeat = document.querySelectorAll(".row .seat.selected")
    // นับจำนวนที่นั่งที่ถูกเลือก
    const countSeats = selectedSeat.length;
    // แปลง index ของที่นั่งที่ถูกเลือกให้เป็น array
    const seatsIndex = [...selectedSeat].map(seat =>[...seats].indexOf(seat))
    // บันทึกข้อมูลที่นั่งที่ถูกเลือกลงใน Local Storage
    localStorage.setItem("selectedSeats",JSON.stringify(seatsIndex))
    // แสดงจำนวนที่นั่งที่ถูกเลือกและราคารวม
    count.innerText = countSeats;
    total.innerText = countSeats * price
}

// บันทึกข้อมูลภาพยนตร์ที่ถูกเลือกลงใน Local Storage
function setMovieData(movieIndex,moviePrice){
    localStorage.setItem("movieIndex",movieIndex)
    localStorage.setItem("moviePrice",moviePrice)
}

// แสดงข้อมูลที่นั่งที่ถูกเลือกและภาพยนตร์ที่ถูกเลือก
function showDatatoUI(){
    // ดึงข้อมูลที่นั่งที่ถูกเลือกจาก Local Storage
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"))
    // ดึงข้อมูลของภาพยนตร์ที่ถูกเลือกจาก Local Storage
    const selectMovieIndex = localStorage.getItem("movieIndex")
    
    // ให้ทุกที่นั่งที่ถูกเลือกเป็นสี 'selected'
    seats.forEach((seat,index) => {
        if (selectedSeats.indexOf(index) > -1) {
            seat.classList.add('selected')
        }
    })

    // ถ้ามีข้อมูลของภาพยนตร์ที่ถูกเลือกใน Local Storage
    if(selectMovieIndex != null){
        // กำหนดให้ภาพยนตร์ที่ถูกเลือกมี index เป็นตำแหน่งของภาพยนตร์ที่เรากดจอง
        movieSelect.selectedIndex = selectMovieIndex
    }
}

// แสดงข้อมูลที่นั่งที่ถูกเลือกและภาพยนตร์ที่ถูกเลือกเมื่อโหลดหน้าเว็บ
showDatatoUI();
// อัพเดทข้อมูลที่นั่งที่ถูกเลือก
updateSelected()
