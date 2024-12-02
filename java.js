let countdownTime = 10 * 60; 
let timerInterval;
let isRunning = true;

const timerElement = document.getElementById('timer');
const toggleButton = document.getElementById('toggleButton');
const hozzaadasContainer = document.getElementById('hozzaadasContainer');
const hozzaadasButton = document.getElementById('hozzaadasButton');
const hozzaadasInput = document.getElementById('hozzaadasInput');

function updateTimerDisplay() {
    const minutes = Math.floor(countdownTime / 60);
    const seconds = countdownTime % 60;
    timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startCountdown() {
    timerInterval = setInterval(() => {
        if (countdownTime > 0) {
            countdownTime--;
            updateTimerDisplay();
        } 
        else {
            clearInterval(timerInterval);
            alert('Lejárt az idő!');
            hozzaadasContainer.style.display = 'block'; 
        }
            }, 1000);
        }

function toggleTimer() {
    if (isRunning) {
        clearInterval(timerInterval);
        toggleButton.textContent = 'Start';
     } 
     else {
        startCountdown();
        toggleButton.textContent = 'Stop';
        }
            isRunning = !isRunning;
        }

function addExtraTime() {
    const extraTime = parseInt(hozzaadasInput.value, 10); 
    if (!isNaN(extraTime) && extraTime > 0) {
        countdownTime += extraTime;
        updateTimerDisplay();
        hozzaadasContainer.style.display = 'none'; 
        startCountdown(); 
        isRunning = true;
        toggleButton.textContent = 'Stop';
        hozzaadasInput.value = ''; 
        } 
    else {
            alert('Kérlek, érvényes számot adj meg, ami nem negatív!');
            }
        }

        
toggleButton.addEventListener('click', toggleTimer);
hozzaadasButton.addEventListener('click', addExtraTime);

updateTimerDisplay();
startCountdown();