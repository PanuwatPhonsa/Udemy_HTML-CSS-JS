const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
const btn=document.querySelector('.control');

function setUpVoice() {
    console.log(recognition);
    recognition.lang = "th-TH";
}

setUpVoice();
