let intervalId;
let isPaused = true;
let remainingTime = 0;

const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');
const timerDisplay = document.querySelector('.timer-display');
const startButton = document.getElementById('start-button');
const pauseButton = document.getElementById('pause-button');
const resetButton = document.getElementById('reset-button');

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer() {
    if (isPaused) {
        const minutes = parseInt(minutesInput.value);
        const seconds = parseInt(secondsInput.value);
        remainingTime = minutes * 60 + seconds;
        intervalId = setInterval(updateTimer, 1000);
        isPaused = false;
    }
}

function pauseTimer() {
    if (!isPaused) {
        clearInterval(intervalId);
        isPaused = true;
    }
}

function resetTimer() {
    clearInterval(intervalId);
    timerDisplay.textContent = '00:00';
    minutesInput.value = '';
    secondsInput.value = '';
    remainingTime = 0;
    isPaused = true;
}

function updateTimer() {
    if (remainingTime > 0) {
        remainingTime--;
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        timerDisplay.textContent = `${padZero(minutes)}:${padZero(seconds)}`;
    } else {
        timerDisplay.textContent = '00:00';
        clearInterval(intervalId);
        isPaused = true;
    }
}

function padZero(value) {
    return (value < 10 ? '0' : '') + value;
}