const left = document.querySelector('.left');
const right = document.querySelector('.right');

const container = document.querySelector('.container');

// เพิ่ม class 'hover-left' เมื่อเมาส์เข้าไปในพื้นที่ของ element ที่มี class 'left'
left.addEventListener('mouseenter', () => {
    container.classList.add('hover-left');
});

// ลบ class 'hover-left' เมื่อเมาส์ออกจากพื้นที่ของ element ที่มี class 'left'
left.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left');
});

// เพิ่ม class 'hover-right' เมื่อเมาส์เข้าไปในพื้นที่ของ element ที่มี class 'right'
right.addEventListener('mouseenter', () => {
    container.classList.add('hover-right');
});

// ลบ class 'hover-right' เมื่อเมาส์ออกจากพื้นที่ของ element ที่มี class 'right'
right.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right');
});
