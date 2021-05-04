import Component from '../lib/component.js';
import store from '../store/index.js';

export default class Me extends Component {
    constructor() {
        super({
            store,
            element: document.querySelector('.mid-row')
        });
    }

    render() {
        let self = this;
        let color;

        if (store.state.changes.myCurrHealth / store.state.changes.myMaxHealth <= 0.2) {
            color = '#b81d13';
        } else if (store.state.changes.myCurrHealth / store.state.changes.myMaxHealth <= 0.5) {
            color = '#efb700';
        } else {
            color = '#009450';
        }

        self.element.querySelector('#myMonImg').classList.remove('my-monster-attack');
        
        if (store.actionKey === 'oppoAttack') {
            self.element.querySelector('#myMonCurrHealth').innerText = store.state.changes.myCurrHealth < 0 ? '0' : store.state.changes.myCurrHealth;
            self.element.querySelector('#myMonCurrHealth').style.color = color;
        } else if (store.actionKey === 'myAttack') {
            self.element.querySelector('#myMonImg').classList.add('my-monster-attack');
        } else {
            self.element.querySelector('#myMonName').innerText = store.state.changes.myName;
            self.element.querySelector('#myMonLevel').innerText = store.state.changes.myLevel;
            self.element.querySelector('#myMonCurrHealth').innerText = store.state.changes.myCurrHealth;
            self.element.querySelector('#myMonMaxHealth').innerText = store.state.changes.myMaxHealth;
            self.element.querySelector('#myMonURL').src = `img/${store.state.changes.myImg}.png`;
            self.element.querySelector('#myMonCurrHealth').style.color = color;
        }
    }
}