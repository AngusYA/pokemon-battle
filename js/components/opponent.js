import Component from '../lib/component.js';
import store from '../store/index.js';

export default class Opponent extends Component {
    constructor() {
        super({
            store,
            element: document.querySelector('.top-row')
        });
    }

    render() {
        let self = this;
        let color;

        if (store.state.changes.oppoCurrHealth / store.state.changes.oppoMaxHealth <= 0.2) {
            color = '#b81d13';
        } else if (store.state.changes.oppoCurrHealth / store.state.changes.oppoMaxHealth <= 0.5) {
            color = '#efb700';
        } else {
            color = '#009450';
        }

        self.element.querySelector('#oppoMonImg').classList.remove('opponent-attack');

        if (store.actionKey === 'myAttack') {
            self.element.querySelector('#oppoMonCurrHealth').innerText = store.state.changes.oppoCurrHealth < 0 ? '0' : store.state.changes.oppoCurrHealth;
            self.element.querySelector('#oppoMonCurrHealth').style.color = color;
        } else if (store.actionKey === 'oppoAttack') {
            self.element.querySelector('#oppoMonImg').classList.add('opponent-attack');
        } else {
            self.element.querySelector('#oppoMonName').innerText = store.state.changes.oppoName;
            self.element.querySelector('#oppoMonLevel').innerText = store.state.changes.oppoLevel;
            self.element.querySelector('#oppoMonCurrHealth').innerText = store.state.changes.oppoCurrHealth;
            self.element.querySelector('#oppoMonMaxHealth').innerText = store.state.changes.oppoMaxHealth;
            self.element.querySelector('#oppoMonURL').src = `img/${store.state.changes.oppoImg}.png`;
            self.element.querySelector('#oppoMonCurrHealth').style.color = color;
        }
    }
}