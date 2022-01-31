console.log('Js file connected');

var count = 1;
var minute = 0;
var timer;

const watchCountSeconds = document.getElementById('watch_count_seconds');
const watchCountMinutes = document.getElementById('watch_count_minutes');
const startButton = document.getElementById('watch_count_start');
const stopButton = document.getElementById('watch_count_stop');
const resetButton = document.getElementById('watch_count_reset');

// Event listeners

startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', resetCounter);

//Application functions

function start() {
    timer = setInterval(() => {
        let currentCount = count++;
        setCount(currentCount);
    }, 1000);

    startButton.disabled = true;
}

function setCount(countNumber) {
    if (countNumber != 0 && countNumber % 60 == 0) {
        minute += 1;
        count = 1;
    }
    watchCountMinutes.innerText = minute;
    watchCountSeconds.innerText = countNumber;
}

function stop() {
    startButton.disabled = false;
    clearInterval(timer);
    console.log('stopped');
}

function resetCounter() {
    count = 0;
    minute = 0;
    setCount(0);
}
