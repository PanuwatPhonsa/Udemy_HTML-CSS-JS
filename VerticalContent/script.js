const slideContainer = document.querySelector('.slider-container');  // เลือก DOM element ที่มี class เป็น 'slider-container' และเก็บไว้ในตัวแปร slideContainer
const slideRight = document.querySelector('.right-content');  // เลือก DOM element ที่มี class เป็น 'right-content' และเก็บไว้ในตัวแปร slideRight
const slideLeft = document.querySelector('.left-content');  // เลือก DOM element ที่มี class เป็น 'left-content' และเก็บไว้ในตัวแปร slideLeft

const upBtn = document.querySelector('.up-btn');  // เลือก DOM element ที่มี class เป็น 'up-btn' และเก็บไว้ในตัวแปร upBtn
const downBtn = document.querySelector('.down-btn');  // เลือก DOM element ที่มี class เป็น 'down-btn' และเก็บไว้ในตัวแปร downBtn

const slideCount = slideRight.querySelectorAll('div').length;  // นับจำนวน div ที่อยู่ใน slideRight และเก็บค่าไว้ในตัวแปร slideCount

let activeIndex = 0;  // กำหนดค่าเริ่มต้นของตัวแปร activeIndex เป็น 0

upBtn.addEventListener('click',() => changeImg('up'));  // เพิ่ม Event Listener ที่จะเรียกฟังก์ชัน changeImg('up') เมื่อปุ่ม 'up' ถูกคลิก
downBtn.addEventListener('click',() => changeImg('down'));  // เพิ่ม Event Listener ที่จะเรียกฟังก์ชัน changeImg('down') เมื่อปุ่ม 'down' ถูกคลิก

//0-3
function changeImg(direction){
    const slideHeight = slideContainer.clientHeight;  // ดึงค่าความสูงของ slideContainer และเก็บไว้ในตัวแปร slideHeight

    if(direction === 'up'){  // ถ้าทิศทางเป็น 'up'
        activeIndex++;  // เพิ่มค่า activeIndex ขึ้น 1
        // ถ้า activeIndex มีค่ามากกว่า slideCount-1 ให้รีเซ็ตค่ากลับไปที่ 0
        if (activeIndex > slideCount-1) {
            activeIndex = 0;
        }
    } else if(direction === 'down'){  // ถ้าทิศทางเป็น 'down'
        activeIndex--;  // ลดค่า activeIndex ลง 1
        // ถ้า activeIndex มีค่าน้อยกว่า 0 ให้รีเซ็ตค่ากลับไปที่ slideCount-1 = (slideCount)4-1 = 3
        if (activeIndex < 0) {
            activeIndex = slideCount-1;
        }
    }

    // ปรับเปลี่ยนตำแหน่งการแสดงผลของ slideLeft และ slideRight โดยใช้ CSS translateY
    slideLeft.style.transform = `translateY(-${activeIndex * slideHeight}px)`;
    slideRight.style.transform = `translateY(-${activeIndex * slideHeight}px)`;
}
