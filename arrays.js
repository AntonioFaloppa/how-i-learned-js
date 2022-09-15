////1
function mezclar (...ingredientes) {
    return ingredientes.join(",") + " todo mezclado ahí";
};
function freir (...ingredientes) {
    const _ingredientes = [
        ...ingredientes,
        "vegetal oil"
    ];
    return _ingredientes.join(",") + " todo frito ahí";
};
function comprarIngredientes (){
    return [
        "mushrooms",
        "pasta",
        "milk cream",
        "cheese",
        "bacon"
    ];
};
function hacerAlmuerzo (ingredientes, metodoDeCocina) {
    console.log(metodoDeCocina);
    return metodoDeCocina(ingredientes);
};
console.log(hacerAlmuerzo(comprarIngredientes(), mezclar));
console.log(hacerAlmuerzo(comprarIngredientes(), freir));
////2
function throwDice () {
    const result = Math.floor(Math.random()* 6 +1);
    return result;
};
const player1 = [];
const player2 = [];
for (let _throw = 1; _throw < 6; _throw++) {
    const result1 = throwDice();
    player1.push(result1);
    const result2 = throwDice();
    player2.push(result2);
};
console.log(player1);
console.log(player2);
////3