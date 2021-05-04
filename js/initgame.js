import store from './store/index.js';

import oppoMons from './lib/oppomons.js';
import myMons from './lib/mymons.js';
import * as functions from './lib/functions.js';

import Opponent from './components/opponent.js';
import Me from './components/me.js';
import Message from './components/message.js';

export function initGame() {
    // game setup
    let spinner = document.querySelector('#spinner');
    let currHour = new Date().getHours();
    let characterImg = 'https://media4.giphy.com/media/10fFq51F1Z2mlO/100.gif?cid=767ec31195v8va3ox4skk3zdmnrocexl6pbpam3zndtjwoox&rid=100.gif';
    let oppoMonImg = document.querySelector('#oppoMonImg');
    let myMonImg = document.querySelector('#myMonImg');

    spinner.classList.add('loading');

    if (currHour > 5 && currHour < 18) {
        spinner.style.backgroundImage = 'url(' + characterImg + '), url("img/bg_day.png")';
    } else {
        spinner.style.backgroundImage = 'url(' + characterImg + '), url("img/bg_night.png")';
    }

    oppoMonImg.classList.remove('monster-in-position', 'monster-dead');
    myMonImg.classList.remove('monster-in-position', 'monster-dead');

    setTimeout(function() {
        spinner.classList.remove('loading');
        oppoMonImg.classList.add('monster-in-position');
        myMonImg.classList.add('monster-in-position');
    }, (Math.floor(Math.random() * 3) + 1) * 1000)

    // initial state
    let randomOpponent = functions.shuffle(oppoMons)[0];
    let randomBoy = functions.shuffle(myMons)[0];

    store.dispatch('initGame', {randomOpponent, randomBoy});

    // my moves info
    let control = document.querySelector('.bot-row');

    control.innerHTML = `
        <div class="game-message">
            ${randomBoy.moves.map(move => {
                return `
                    <div class="global-message">Type / ${move.type}</div>
                `
            }).join('')}
        </div>
        <div class="game-option">
            ${randomBoy.moves.map(move => {
                return `
                    <div class="option-item">${move.name}</div>
                `
            }).join('')}
        </div>
    `;

    let moveSet = document.querySelectorAll('.option-item');

    moveSet.forEach((move, index) => {
        move.addEventListener('click', () => {
            let damage = functions.calcDamage(randomBoy.level, randomBoy.moves[index].damage) * functions.calcAccuracy(randomBoy.moves[index].accuracy);
            store.dispatch('myAttack', {
                clickedMove: randomBoy.moves[index],
                damage
            });
        });
    });

    let opponentInstance = new Opponent();
    let meInstance = new Me();
    let messageInstance = new Message();

    opponentInstance.render();
    meInstance.render();
}