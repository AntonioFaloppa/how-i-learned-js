////1
//Kitchen mix with arrays

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
//Throwing dice 6 times and total sum of the results

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
let total1 = 0;
let total2 = 0;
for (let index = 0; index < player1.length; index++) {
    total1 = total1 + player1[index];
};
for (let index2 = 0; index2 < player2.length; index2++) {
    total2 = total2 + player2[index2];
};
console.log(player1);
console.log(player2);
console.log(total1);
console.log(total2);


////3
//Throwing dice until result is 6

function throwDice2 () {
    const result = Math.floor(Math.random()* 6 +1);
    return result;
};
const player11 = [];
let result11;
do {
    result11 = throwDice2();
    player11.push(result11);
} while (result11 !== 6);
console.log(`Al jugador 11 le tomó ${player11.length} lanzamientos`);
console.log(player11);

////4
//Throwing dice until someone gets 6 as result

function throwDice3 () {
    const result = Math.floor(Math.random()* 6 +1);
    return result;
};
const player111 = [];
const player222 = [];
let result111;
let result222;
do {
    result111 = throwDice3();
    player111.push(result111);
    result222 =throwDice3();
    player222.push(result222);
} while (result111 !== 6 && result222 !== 6);
if(result111 === 6 && result222 === 6) {
    console.log(`Ganaron los dos jugadores`);
} else if(result111 === 6) {
    console.log(`Ganó el primero`);
} else {
    console.log(`Ganó el segundo`);
};
console.log(player111);
console.log(player222);


////5
//Throwing dice and then choosing the number of cards resulted from the number of the dice (fixed times on the for loop, it can change)

function throwDice4 () {
    const result = Math.floor(Math.random()* 6 +1);
    return result;
};
function chooseCard () {
    const faceValues = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
    return faceValues[Math.floor(Math.random() * faceValues.length)];
}
const player1Results = {
    Dices: [],
    Cards: []
};
for (let time = 1; time < 6; time++) {
    const resultThrow = throwDice4();
    player1Results.Dices.push(resultThrow);
    const cards = [];
    for (let choice = 1; choice <= resultThrow; choice++ ) {
        const card = chooseCard();
        cards.push(card);
    }
    player1Results.Cards.push(cards);
}
console.log(player1Results);