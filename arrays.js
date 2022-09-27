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


////6
//Choose a card when certain value es reached

function chooseCard2 () {
    const faceValues = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
    //Recorrer el arreglo
    let _faceValue = faceValues[faceValues.length - 1];
    for (faceValue of faceValues) {
        //Entre cada iteración generar un valor entre 0 y 1
        const value = Math.random();
        console.log(`Para la carta ${faceValue} se obtuvo el valor ${value}`);
        if (value >= 0.9) {
            _faceValue = faceValue;
            break;
        }
        //Si value < 0.9 sigo con la siguiente carta
        //Por defecto devuelvo 2
    }
    return _faceValue;
};
console.log(chooseCard2());

////7
//Reading with for in

const teams = [`australia`, `italia`, `bélgica`, `venezuela`, `perú`, `argentina`];
for (let index in teams) {
    console.log(index);
    console.log(teams[index]);
};
const dog = {
    name: `wotuja`,
    breed: `retriever`,
    age: 1
};
for (let atribute in dog) {
    console.log(atribute);
    console.log(dog[atribute]);
};
for (let [key, value] of Object.entries(dog)) {
    console.log(`${key}:${value}`);
};


////8
//Using forEach two ways to do it

const team2 = [`australia`, `italia`, `bélgica`, `venezuela`, `perú`, `argentina`];
function consoleProbability (_team2) {
    console.log(`${_team2} tiene una probabilidad de ${(Math.random()* 100).toFixed(2)}%`);
};
team2.forEach(consoleProbability);

team2.forEach(function(team){
    console.log(`${team} tiene una probabilidad de ${(Math.random()* 100).toFixed(2)}%`);
});
//In case you want to use the index and the array for some reason
team2.forEach((team, index, _team) => {
    console.log(index);
    if (index > _team.length/2) return;
    console.log(`${team} tiene una probabilidad de ${(Math.random()* 100).toFixed(2)}%`);
});


////9
//Using map

const team3 = [`australia`, `italia`, `bélgica`, `venezuela`, `perú`, `argentina`];
function calculateProbability () {
    return `${(Math.random()*100).toFixed(2)}%`;
}
const probabilities = team3.map(calculateProbability);
console.log(probabilities);


////10
//Using filter

const team4 = [`australia`, `italia`, `bélgica`, `venezuela`, `perú`, `argentina`];
const teamsWithoutMessi = team4.filter((team, index, array) => {
    if (team.toLowerCase() === `argentina`) return false;
    return true;
});
console.log(teamsWithoutMessi);


////11
//Using reduce

const transactionValues = [
    109,
    -182,
    20,
    63,
    -55,
    190
];
const totalAmount = transactionValues.reduce(
    (accumulate, amount) => {
        return accumulate + amount;
    }, 100 //initial value
);
console.log(totalAmount);

const welcomeTeams = teams.reduce(
    (_string, team, index2) => {
        return _string + " " + team + ",";
    }, "Hellow everyone. We welcome the following teams to the tournament:"
);
console.log(welcomeTeams);


////12
//Using some and every

const team5 = [`australia`, `italia`, `bélgica`, `venezuela`, `perú`, `argentina`];
console.log(team5.some((team) => team.charAt(0) === "d"));
console.log(team5.every((team) => typeof team === "string"));

////13
//Using Splice

let y = [14, 3, 3245, 234, 52, 345, 3, 45, 23, 77];
y.splice(2,4,'a');  //returns [3245, 234, 52, 345] 
console.log(y); // [14, 3, 'a', 3, 45, 23, 77]

let x = [14, 3, 3245, 234, 52, 345, 3, 45, 23, 77];
x.splice(2,0,'a');  //returns [] 
console.log(x); // [14, 3, 'a', 3245, 234, 52, 345, 3, 45, 23, 77]

////14
//Using Sort and Reverse

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits); //[ 'Apple', 'Banana', 'Mango', 'Orange' ] 
fruits.reverse();
console.log(fruits); //[ 'Orange', 'Mango', 'Banana', 'Apple' ]

let points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {return a - b});
console.log(points); //[ 1, 5, 10, 25, 40, 100 ] 

let cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
];
cars.sort(function(a, b){return a.year - b.year});
console.log(cars); //[ { type: 'Saab', year: 2001 },{ type: 'BMW', year: 2010 },{ type: 'Volvo', year: 2016 } ]