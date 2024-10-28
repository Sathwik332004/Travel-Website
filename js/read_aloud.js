const toggleSpeechButton = document.getElementById('toggle-speech');
let isReading = false;
const synth = window.speechSynthesis;
let utterance;

toggleSpeechButton.onclick = function() {
    if (isReading) {
        synth.cancel();
        toggleSpeechButton.textContent = 'Read Aloud';
    } else {
        const textToRead = document.body.innerText;
        utterance = new SpeechSynthesisUtterance(textToRead);
        synth.speak(utterance);
        toggleSpeechButton.textContent = 'Stop Reading';
    }
    isReading = !isReading;
};