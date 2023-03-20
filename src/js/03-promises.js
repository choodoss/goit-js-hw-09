import { Notify } from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';
const form = document.querySelector('form');


function hendleStartCreatePromise(e) {
  e.preventDefault()
  const firstDelay = Number(form.querySelector('input[name="delay"]').value);
  const stepDelay = Number(form.querySelector('input[name="step"]').value);
  const amount = Number(form.querySelector('input[name="amount"]').value);

  let secondStep = firstDelay;

  for (let num = 1; num <= amount; num += 1) {
    const promise = new Promise((resolve, reject) => {
      debugger
      const shouldResolve = Math.random() > 0.3;

      setTimeout(() => {
        if (shouldResolve) {
          resolve()
        } else {
          reject()
        }
      }, secondStep)
    });
    promise
      .then(() => Notify.success(`✅ Fulfilled promise ${num} in ${secondStep}ms`))
      .catch(() => Notify.failure(`❌ Rejected promise ${num} in ${secondStep}ms`));
    secondStep += stepDelay;
  }
};

form.addEventListener('submit', hendleStartCreatePromise);