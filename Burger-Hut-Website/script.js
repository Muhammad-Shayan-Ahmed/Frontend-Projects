// Countdown Timer for Special Offers
const countdown = document.getElementById('countdown');
let timeLeft = 7200; // 2 hours in seconds

const updateTimer = () => {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    countdown.innerHTML = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    if (timeLeft > 0) {
        timeLeft--;
    } else {
        clearInterval(timerInterval);
    }
};

const timerInterval = setInterval(updateTimer, 1000);
