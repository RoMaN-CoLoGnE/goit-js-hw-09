function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnStartRef = document.querySelector('[data-start]');
const btnStopRef = document.querySelector('[data-stop]');

btnStartRef.addEventListener('click', onBtnStartClick);
btnStopRef.addEventListener('click', onBtnStopClick);

btnStopRef.disabled = true;
let intervalId = null;

function onBtnStartClick(evt) {
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  evt.target.disabled = true;
  btnStopRef.disabled = false;
}
function onBtnStopClick(evt) {
  clearInterval(intervalId);
  btnStartRef.disabled = false;
  evt.target.disabled = true;
}
