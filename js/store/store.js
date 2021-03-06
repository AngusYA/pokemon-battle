import PubSub from '../lib/pubsub.js';

export default class Store {
    constructor(params) {
        let self = this;
        self.actions = {};
        self.actionKey;
        self.mutations = {};
        self.state = {};
        self.status = 'resting';
        self.events = new PubSub();

        if (params.hasOwnProperty('actions')) {
            self.actions = params.actions;
        }

        if (params.hasOwnProperty('mutations')) {
            self.mutations = params.mutations;
        }

        self.state = new Proxy((params.state || {}), {
            set: function(state, key, value) {
                state[key] = value;

                self.events.publish('stateChange', self.state);

                if (self.status !== 'mutation') {
                    console.warn(`You should use a mutation to set ${key}`);
                }

                self.status = 'resting';

                return true;
            }
        });
    }

    dispatch(actionKey, payload) {
        let self = this;

        if (typeof self.actions[actionKey] !== 'function') {
            console.error(`Action "${actionKey}" doesn't exist.`);
            return false;
        }

        self.actionKey = actionKey;

        self.status = 'action';

        self.actions[actionKey](self, payload);

        return true;
    }

    commit(mutationKey, payload) {
        let self = this;

        if (typeof self.mutations[mutationKey] !== 'function') {
            console.error(`Mutation "${mutationKey}" doesn't exist.`);
            return false;
        }

        self.status = 'mutation';

        self.mutations[mutationKey](self.state, payload);

        return true;
    }
}