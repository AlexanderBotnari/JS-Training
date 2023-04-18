const secondsInput = document.getElementById("seconds-input");
const startButton = document.getElementById("start-button");
const timer = document.getElementById("timer");
let intervalId;

function startTimer() {
  let seconds = parseInt(secondsInput.value);

  if (!seconds) {
    alert("Введите количество секунд!");
    return;
  }

        timer.innerText = seconds;
        intervalId = setInterval(() => {
            seconds--;
            timer.innerText = seconds;
            if (seconds === 0) {
            clearInterval(intervalId);
            alert("Таймер закончил свою работу!");
            }
        }, 1000);
}

startButton.addEventListener("click", startTimer);