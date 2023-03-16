import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

Notiflix.Notify.init({
  position: 'center-bottom',
  distance: '100px',
});

const daysRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours]');
const minutesRef = document.querySelector('[data-minutes]');
const secondsRef = document.querySelector('[data-seconds]');

const inputRef = document.querySelector('#datetime-picker');
const btnStartRef = document.querySelector('[data-start]');
btnStartRef.addEventListener('click', onBtnStartClick);

btnStartRef.disabled = true;
let selectDate = null;
let intervalId = null;

function onBtnStartClick(evt) {
  btnStartRef.disabled = true;
  inputRef.disabled = true;
  intervalId = setInterval(() => {
    const differenceTime = selectDate - Date.now();
    if (differenceTime <= 0) {
      clearInterval(intervalId);
      inputRef.disabled = false;
      return;
    }
    const { days, hours, minutes, seconds } = convertMs(differenceTime);
    daysRef.textContent = addLeadingZero(days);
    hoursRef.textContent = addLeadingZero(hours);
    minutesRef.textContent = addLeadingZero(minutes);
    secondsRef.textContent = addLeadingZero(seconds);
  }, 1000);
}

const options = {
  position: 'center center',
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    validateDate(selectedDates[0]);
  },
};

flatpickr(inputRef, options);

function validateDate(date) {
  if (date <= Date.now()) {
    Notiflix.Notify.failure('Please choose a date in the future');
    btnStartRef.disabled = true;
    selectDate = null;
  } else {
    btnStartRef.disabled = false;
    selectDate = date;
  }
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, 0);
}
