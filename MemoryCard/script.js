const showBtn = document.getElementById('show');
const hidden = document.getElementById('btn-hidden');
const cardcontainer = document.getElementById('card-container');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const currentEl = document.getElementById('current');
const clearBtn = document.getElementById('clear');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const addCards = document.getElementById('add-card');
let currentActiveCard = 0;
let cardEl = []; // Array ที่เก็บ Element ของการ์ดทั้งหมด
const cardData = getCardData(); // ดึงข้อมูลการ์ดจาก Local Storage

// ฟังก์ชันที่เรียกใช้เพื่อสร้างการ์ด
function createcard() {
    cardData.forEach((data, index) => {
        createSingleCard(data, index);
    });
}

// ฟังก์ชันที่ใช้สร้าง Element ของการ์ด
function createSingleCard(data, index) {
    const card = document.createElement('div');
    card.classList.add('card');

    if (index === 0) {
        card.classList.add('active');
    }

    card.innerHTML = `
        <div class="inner-card">
            <div class="inner-card-front">
                <p>${data.question}</p>
            </div>
            <div class="inner-card-back">
                <p>${data.answer}</p>
            </div>
        </div>
    `;

    // เพิ่ม Event Listener สำหรับการคลิกที่การ์ดเพื่อแสดงคำตอบ
    card.addEventListener('click', () => card.classList.toggle('show-answer'));

    cardEl.push(card);
    cardcontainer.appendChild(card);
    updateCurrentQuestion();
}

const addContainer = document.getElementById('add-container');

// ฟังก์ชันที่ใช้ในการอัพเดทข้อความ "คำถามที่ X / ทั้งหมด"
function updateCurrentQuestion() {
    currentEl.innerText = `${currentActiveCard + 1} / ${cardEl.length}`;
}

// เรียกใช้ฟังก์ชันสร้างการ์ด
createcard();

// เพิ่ม Event Listener สำหรับปุ่ม "Show" เพื่อแสดงฟอร์มเพิ่มการ์ด
showBtn.addEventListener('click', () => addContainer.classList.add('show'));

// เพิ่ม Event Listener สำหรับปุ่ม "Hide" เพื่อซ่อนฟอร์มเพิ่มการ์ด
hidden.addEventListener('click', () => addContainer.classList.remove('show'));

// เพิ่ม Event Listener สำหรับปุ่ม "Next" เพื่อแสดงการ์ดถัดไป
nextBtn.addEventListener('click', () => {
    // กำหนดคลาสเพื่อทำการสไลด์ซ้าย
    cardEl[currentActiveCard].className = 'card left';
    currentActiveCard = currentActiveCard + 1;

    // ตรวจสอบว่า currentActiveCard มีค่ามากกว่าจำนวนการ์ดทั้งหมดหรือไม่
    if (currentActiveCard > cardEl.length - 1) {
        currentActiveCard = cardEl.length - 1;
    }

    // กำหนดคลาสเพื่อแสดงการ์ดที่ถูกเลือก
    cardEl[currentActiveCard].className = 'card active';
    updateCurrentQuestion();
});

// เพิ่ม Event Listener สำหรับปุ่ม "Previous" เพื่อแสดงการ์ดก่อนหน้า
prevBtn.addEventListener('click', () => {
    // กำหนดคลาสเพื่อทำการสไลด์ขวา
    cardEl[currentActiveCard].className = 'card right';
    currentActiveCard = currentActiveCard - 1;

    // ตรวจสอบว่า currentActiveCard มีค่าน้อยกว่า 0 หรือไม่
    if (currentActiveCard < 0) {
        currentActiveCard = 0;
    }

    // กำหนดคลาสเพื่อแสดงการ์ดที่ถูกเลือก
    cardEl[currentActiveCard].className = 'card active';
    updateCurrentQuestion();
});

// เพิ่ม Event Listener สำหรับปุ่ม "Add Card" เพื่อเพิ่มการ์ดใหม่
addCards.addEventListener('click', () => {
    const question = questionEl.value.trim();
    const answer = answerEl.value.trim();

    // ตรวจสอบว่ามีข้อความคำถามและคำตอบหรือไม่
    if (question && answer) {
        const newCard = { question, answer };
        createSingleCard(newCard);
        questionEl.value = '';
        answerEl.value = '';
        addContainer.classList.remove('show');
        cardData.push(newCard);
        setCardData(cardData);
    }
});

// ฟังก์ชันที่ใช้ในการบันทึกข้อมูลการ์ดลง Local Storage
function setCardData(cards) {
    localStorage.setItem('cards', JSON.stringify(cards));
    window.location.reload();
}

// ฟังก์ชันที่ใช้ในการดึงข้อมูลการ์ดจาก Local Storage
function getCardData() {
    const cards = JSON.parse(localStorage.getItem('cards'));
    return cards === null ? [] : cards;
}

// เพิ่ม Event Listener สำหรับปุ่ม "Clear All" เพื่อลบข้อมูลการ์ดทั้งหมด
clearBtn.addEventListener('click', () => {
    localStorage.clear();
    cardcontainer.innerHTML = '';
    window.location.reload();
});
