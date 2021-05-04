export default {
    myAttack(state, payload) {
        state.changes = Object.assign(state.changes, {
            oppoCurrHealth: state.changes.oppoCurrHealth - payload.damage,
            clickedMoveName: payload.clickedMove.name,
            clickedMoveDamage: payload.damage
        });
    },
    oppoAttack(state, payload) {
        state.changes = Object.assign(state.changes, {
            myCurrHealth: state.changes.myCurrHealth - payload.damage,
            randomMoveName: payload.randomMove.name,
            randomMoveDamage: payload.damage
        });
    },
    initGame(state, payload) {
        state.changes = Object.assign(state.changes, {
            oppoName: payload.randomOpponent.name,
            oppoLevel: payload.randomOpponent.level,
            oppoMaxHealth: payload.randomOpponent.health,
            oppoCurrHealth: payload.randomOpponent.health,
            oppoMoves: payload.randomOpponent.moves,
            oppoImg: payload.randomOpponent.image,

            myName: payload.randomBoy.name,
            myLevel: payload.randomBoy.level,
            myMaxHealth: payload.randomBoy.health,
            myCurrHealth: payload.randomBoy.health,
            myImg: payload.randomBoy.image
        });
    }
}