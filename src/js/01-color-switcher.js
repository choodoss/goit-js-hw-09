function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

const bodyEl = document.querySelector('body');
let intervalSetColor = null;

const cahngeBackgroundColor = () => bodyEl.setAttribute('Style', `background-color: ${getRandomHexColor()}`);

function hendleCahngeBackgroundColor({ target }) {
    if (target.type === 'button') {
        if (target.dataset.start === '') {
            intervalSetColor = setInterval(cahngeBackgroundColor, 1000);
            target.disabled = true;
        };
        if (target.dataset.stop === '') {
            const startButtonEl = target.previousElementSibling
            clearInterval(intervalSetColor);
            startButtonEl.disabled = false;
        }
    };
}
bodyEl.addEventListener('click', hendleCahngeBackgroundColor);
