function speech(){
    const startRecognitionButton = document.getElementById('start-recognition');
    const speechOutput = document.getElementById('speech-output');

    if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';

        recognition.onstart = function() {
            startRecognitionButton.textContent = 'Listening...';
        };

        recognition.onresult = function(event) {
            const transcript = event.results[0][0].transcript.toLowerCase();
            speechOutput.textContent = 'You said: ' + transcript;

            // Navigation commands
            if (transcript.includes('home')) {
                window.location.href = '#';
            } else if (transcript.includes('about')) {
                window.location.href = 'about.html';
            } else if (transcript.includes('services')) {
                window.location.href = 'service.html';
            } else if (transcript.includes('destinations')) {
                window.location.href = 'destination.html';
            } else if (transcript.includes('packages')) {
                window.location.href = 'package.html';
            } else if (transcript.includes('contact')) {
                window.location.href = 'contact.html';
            } else if (transcript.includes('logout')) {
                window.location.href = 'index.html';
            } else {
                speechOutput.textContent += ' - Command not recognized.';
            }
        };

        recognition.onerror = function(event) {
            speechOutput.textContent = 'Error occurred in recognition: ' + event.error;
        };

        recognition.onend = function() {
            startRecognitionButton.textContent = 'Voice Access';
        };

        startRecognitionButton.onclick = function() {
            recognition.start();
        };
    } else {
        speechOutput.textContent = 'Speech recognition not supported in this browser.';
    }

}
