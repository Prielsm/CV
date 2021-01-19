import './style/stars.sass';
import './style/fireflies.sass';
import './style/main.scss';

// Background Day Mode
const quantity = 15;

for (let index = 1; index < quantity; index++) {
  document.body.innerHTML += '<div class="firefly"></div>';
}

// Boutons night/day mode
const main = document.body.querySelector('main');
console.log(main);
const buttonsMode = document.body.querySelectorAll('.mode');

buttonsMode.forEach((buttonMode) => {
  buttonMode.addEventListener('click', (event) => {
    if (event.currentTarget.id === 'night-mode') {
      main.className = 'night-main';
      document.body.className = 'night';
      console.log(main.className);
    } else {
      main.className = 'day-main';
      document.body.className = 'day';
    }
  });
});
