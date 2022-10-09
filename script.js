'use strict';
let diceEl = document.querySelector('.dice');
diceEl.classList.add('hidden');
let score0 = document.querySelector('#score--0');
let score1 = document.querySelector('#score--1');
let current0 = document.querySelector('#current--0');
let current1 = document.querySelector('#current--1');
score0.textContent = 0;
score1.textContent = 0;
let activePlayer = 0;
let b_roll = document.querySelector('.btn--roll');
let b_new = document.querySelector('.btn--new');
let b_hold = document.querySelector('.btn--hold');
let sum = 0;
let ps0 = 0;
let ps1 = 0;

b_roll.addEventListener('click', function () {
  let dice = Math.trunc(Math.random() * 6 + 1);
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  if (dice !== 1) {
    sum += dice;
    document.getElementById(`current--${activePlayer}`).textContent = sum;
  } else {
    changePlayer();
  }
});
let i = 1;
let j = 1;

b_hold.addEventListener('click', function () {
  if (activePlayer) {
    ps1 += sum;
    score1.textContent = ps1;
  } else {
    ps0 += sum;
    score0.textContent = ps0;
  }

  if (ps1 >= 100 && i) {
    document.getElementById(`current--${activePlayer}`).textContent = 100;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    i = 0;
  }
  if (ps0 >= 100 && j) {
    document.getElementById(`current--${activePlayer}`).textContent = 100;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    j = 0;
  }

  changePlayer();
});

function changePlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = sum = 0;
  activePlayer = activePlayer == 0 ? 1 : 0;
  document.querySelector('.player--1').classList.toggle('player--active');
  document.querySelector('.player--0').classList.toggle('player--active');
}
