export default {
    myAttack(context, payload) {
        context.commit('myAttack', payload);
    },
    oppoAttack(context, payload) {
        context.commit('oppoAttack', payload);
    },
    initGame(context, payload) {
        context.commit('initGame', payload);
    }
}