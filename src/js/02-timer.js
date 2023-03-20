import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.6.min.css";
import "flatpickr/dist/flatpickr.min.css";
import "flatpickr/dist/themes/confetti.css";//додав гарненьку тему із дефолтних.
import { Ukrainian } from "flatpickr/dist/l10n/uk.js"//імпорт мовного пакету.

const startBtn = document.querySelector("[data-start]");
startBtn.disabled = true;
startBtn.classList.add('js-main-button')

const myInput = document.querySelector(".myInput");
const fp = flatpickr(myInput, {
    locale: Ukrainian,//додав Українську))
    enable: [
        {
            from: 'today', //прибрав можливість вибрати не валідну дату, але можна це зробити обравши той самий день і підкрутити час
            to: '2099-12-31'
        }],
    enableTime: true,
    allowInput: true,//додав можоивість вводу даних в інпуті
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose() {
        startBtn.classList.remove('js-main-button')
        startBtn.disabled = false;
    },
});

function updateTimer() {
    const currentDate = new Date();
    const selectedDate = fp.selectedDates[0];
    const daysEl = document.querySelector("[data-days]");
    const hoursEl = document.querySelector("[data-hours]");
    const minutesEl = document.querySelector("[data-minutes]");
    const secondsEl = document.querySelector("[data-seconds]");

    const totalSeconds = Math.floor(((selectedDate.getTime() - currentDate.getTime()) / 1000));
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    daysEl.textContent = days < 10 ? `0${days}` : days;
    hoursEl.textContent = hours < 10 ? `0${hours}` : hours;
    minutesEl.textContent = minutes < 10 ? `0${minutes}` : minutes;
    secondsEl.textContent = seconds < 10 ? `0${seconds}` : seconds;

    if (daysEl.textContent === '00' && hoursEl.textContent === '00' && minutesEl.textContent === '00' && secondsEl.textContent === '00') {
        clearInterval(intervalId);
        startBtn.disabled = true;
        startBtn.classList.add('js-main-button')
        return;
    };
}

let intervalId;

startBtn.addEventListener("click", () => {
    const currentDate = new Date();
    const selectedDate = fp.selectedDates[0];
    if (selectedDate < currentDate) {
        Notiflix.Report.failure('Ой, а що сталося?', 'ви обрали не валідну дату!');
        startBtn.disabled = true;
        startBtn.classList.add('js-main-button')
        return;
    }
    intervalId = setInterval(updateTimer, 1000);
});