const hoursDisplay = document.getElementById('hours');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');

let inputHours = document.getElementById('inputHours');
let inputMinutes = document.getElementById('inputMinutes');
let inputSeconds = document.getElementById('inputSeconds');

let countdown;
let totalTimeInSeconds;

function updateTimerDisplay() {
    let hours = Math.floor(totalTimeInSeconds / 3600);
    let minutes = Math.floor((totalTimeInSeconds % 3600) / 60);
    let seconds = totalTimeInSeconds % 60;

    hoursDisplay.textContent = String(hours).padStart(2, '0');
    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');
}

function startCountdown() {
    let hours = parseInt(inputHours.value) || 0;
    let minutes = parseInt(inputMinutes.value) || 0;
    let seconds = parseInt(inputSeconds.value) || 0;

    totalTimeInSeconds = hours * 3600 + minutes * 60 + seconds;

    if (totalTimeInSeconds <= 0) {
        alert('Please enter a valid time!');
        return;
    }

    countdown = setInterval(() => {
        if (totalTimeInSeconds <= 0) {
            clearInterval(countdown);
            alert('Time is up!');
        } else {
            totalTimeInSeconds--;
            updateTimerDisplay();
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(countdown);
    totalTimeInSeconds = 0;
    updateTimerDisplay();
    inputHours.value = '';
    inputMinutes.value = '';
    inputSeconds.value = '';
}

startButton.addEventListener('click', startCountdown);
resetButton.addEventListener('click', resetTimer);
