const questionData = [
	{
	  question:"1.ข้อใดไม่ใช่ระบบปฏิบัติการ",
      a:"ระบบปฏิบัติการดอส",
      b:"ไมโครซอฟท์เวิร์ด",
      c:"ไมโครซอฟต์วินโดวส์",
      d:"ระบบปฏิบัติการแอนดรอยด์",
      correct:"b"
	},
    {
        question:"2.ข้อใดคือโปรแกรม Web Browser",
        a:"Google Chrome",
        b:"Keyboard",
        c:"Mouse",
        d:"Monitor",
        correct:"a"
    },
    {
        question:"3.ข้อใดคือฮา์ดแวร์",
        a:"Keyboard",
        b:"Mouse",
        c:"Monitor",
        d:"ถูกทุกข้อ",
        correct:"d"
    }
];

const questionEl = document.getElementById('question');
const container = document.querySelector('.question-container');
const answerEls = document.querySelectorAll('.answer');
const choiceA = document.getElementById('a-text');
const choiceB = document.getElementById('b-text');
const choiceC = document.getElementById('c-text');
const choiceD = document.getElementById('d-text');

const submitBtn = document.getElementById('submit');

let currentQuestion = 0;
let score = 0;

// โหลดคำถามเริ่มต้น
loadQuestion();

function loadQuestion(){
    // ตรวจสอบและล้างคำตอบที่ถูกเลือก
    checkChoice();
    
    // ดึงข้อมูลคำถามปัจจุบัน
    const currentQuizData = questionData[currentQuestion];
    
    // แสดงคำถามและตัวเลือก
    questionEl.innerText = currentQuizData.question;
    choiceA.innerText = currentQuizData.a;
    choiceB.innerText = currentQuizData.b;
    choiceC.innerText = currentQuizData.c;
    choiceD.innerText = currentQuizData.d;
}

function checkChoice(){
    // ล้างคำตอบที่ถูกเลือกในทุกตัวเลือก
    answerEls.forEach(answerEl => answerEl.checked = false);
}

submitBtn.addEventListener('click',() => {
    // ตรวจสอบคำตอบที่ถูกเลือก
    let answer = getChoiceAnswer();
    if(answer){
        // ตรวจสอบคำตอบถูกหรือไม่ และเพิ่มคะแนน
        if(answer === questionData[currentQuestion].correct){
            score++;
        }
        
        // เลื่อนไปคำถามถัดไป
        currentQuestion++;
        
        // ถ้ายังมีคำถามอยู่ ให้โหลดคำถาม
        if(currentQuestion < questionData.length){
            loadQuestion();
        }else{
            // ถ้าไม่มีคำถามอยู่แล้ว แสดงคะแนนที่ได้
            container.innerHTML = `<h2>Score ${score}/${questionData.length}</h2>`;
        }
    }
});

function getChoiceAnswer(){
    // หาคำตอบที่ถูกเลือก
    let answer;
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}
