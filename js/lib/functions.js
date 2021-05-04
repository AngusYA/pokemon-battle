export function shuffle(input) {
    for (let i = input.length - 1; i >= 0; i--) {

        let randomIndex = Math.floor(Math.random() * (i + 1));
        let randomItem = input[randomIndex];

        input[randomIndex] = input[i];
        input[i] = randomItem;
    }

    return(input);
}

export function calcDamage(level, moveDamage) {
    let realDamage = Math.floor((Math.random() * 0.4 + 0.8) * (((2 * level / 5 + 2) * moveDamage / 50) + 2));
    return realDamage;
}

export function calcAccuracy(moveAccuracy) {
    let persentage = moveAccuracy / 100;
    let randomNum = Math.random() * 1;
    if (persentage > randomNum) {
        return 1;
    } else {
        return 0;
    }
}