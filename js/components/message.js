import Component from '../lib/component.js';
import {initGame} from '../initgame.js';
import * as functions from '../lib/functions.js';
import store from '../store/index.js';

export default class Message extends Component {
    constructor() {
        super({
            store,
            element: document.querySelector('.absolute-row')
        });
    }

    render() {
        let self = this;

        // my attack
        if (store.actionKey === 'myAttack') {
            self.element.style.zIndex = '4';
            self.element.innerHTML = `
                <div class="game-message">
                    <div class="global-message">${store.state.changes.myName} used</div>
                    <div class="global-message">${store.state.changes.clickedMoveName}</div>
                    <div class="global-message">${store.state.changes.clickedMoveDamage === 0 ? 'but missed' : 'and caused'}</div>
                    <div class="global-message">${store.state.changes.clickedMoveDamage === 0 ? '...' : store.state.changes.clickedMoveDamage + ' damage.'}</div>
                </div>
                <div id="next" class="indicator">▼</div>
            `;

            self.element.querySelector('#next').addEventListener('click', () => {
                // if opponent alive, opponent attack
                if (store.state.changes.oppoCurrHealth > 0) {
                    let randomMove = functions.shuffle(store.state.changes.oppoMoves)[0];
                    let damage = functions.calcDamage(store.state.changes.oppoLevel, randomMove.damage) * functions.calcAccuracy(randomMove.accuracy);
                    store.dispatch('oppoAttack', {randomMove, damage});
                // if opponent dead, new game
                } else {
                    document.querySelector('#oppoMonImg').classList.add('monster-dead');

                    self.element.innerHTML = `
                        <div class="game-message">
                            <div class="global-message">${store.state.changes.oppoName} fainted.</div>
                            <div class="global-message">${store.state.changes.myName} won</div>
                            <div class="global-message">the battle.</div>
                            <div class="global-message">Keep going!</div>
                        </div>
                        <div id="next" class="indicator">▼</div>
                    `;

                    self.element.querySelector('#next').addEventListener('click', () => {
                        initGame();
                    });
                }
            });
        }
        // opponent attack
        else if (store.actionKey === 'oppoAttack') {
            self.element.innerHTML = `
                <div class="game-message">
                    <div class="global-message">${store.state.changes.oppoName} used</div>
                    <div class="global-message">${store.state.changes.randomMoveName}</div>
                    <div class="global-message">${store.state.changes.randomMoveDamage === 0 ? 'but missed' : 'and caused'}</div>
                    <div class="global-message">${store.state.changes.randomMoveDamage === 0 ? '...' : store.state.changes.randomMoveDamage + ' damage.'}</div>
                </div>
                <div id="next" class="indicator">▼</div>
            `;

            self.element.querySelector('#next').addEventListener('click', () => {
                // if me alive, show control
                if (store.state.changes.myCurrHealth > 0) {
                    self.element.style.zIndex = '0';
                // if me dead, new game
                } else {
                    document.querySelector('#myMonImg').classList.add('monster-dead');

                    self.element.innerHTML = `
                        <div class="game-message">
                            <div class="global-message">${store.state.changes.myName} fainted.</div>
                            <div class="global-message">${store.state.changes.oppoName} won</div>
                            <div class="global-message">the battle.</div>
                            <div class="global-message">Try again.</div>
                        </div>
                        <div id="next" class="indicator">▼</div>
                    `;

                    self.element.querySelector('#next').addEventListener('click', () => {
                        initGame();
                    });
                }
            });
        }
        // new game
        else {
            self.element.style.zIndex = '0';
        }
    }
}