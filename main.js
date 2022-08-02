////Functions and basic JS
////1
function isOdd(myNumber)
{
	return !(myNumber % 2 == 0);
}
console.log(isOdd(45345));
////2
function addNumbers(a,b)
{
	let sum = a + b;
	return sum;
}
console.log(addNumbers(3,4));
////3
function generateRandom(){
    return Math.floor(Math.random() * 10)
};
console.log(generateRandom(10))
////4
var total = prompt('How many km are left to go?');
var final = parseInt(total);
// Your code below:
if (total > 100) {
    console.log("We still have a bit of driving left to go");
} else if (final > 50 && final <= 100) {
    console.log("We'll be there in 5 minutes");
} else if (final <= 50) {
    console.log("I'm parking. I'll see you right now");
} 
////5
let guests = prompt('How many people are coming to your wedding?');
let guest = parseInt(guests);
function getPrice(guest){
    let cost = 0;
    // Your code here
    if (guest <= 50) {
        cost = 4000;
    } else if (guest <= 100) {
        cost = 10000;
    } else if (guest <= 200) {
        cost = 15000;
    } else if (guest > 200) {
        cost = 20000;
    }
    return cost;
}
let price = getPrice(guest);
console.log('Your wedding will cost '+price+' dollars');
////6
function getColor(selection)
{
	switch(selection){
		// Add more options here
		case 'red':
			return true;
		case 'green':
			return true;
		case 'blue':
			return true;
	    default:
	    	return false;  //returns false because the user picked an unavailable color
	    break;               
	}
}
var colorname = prompt('What color do you want?').trim();
var isAvailable = getColor(colorname);
if(isAvailable)
	console.log('Good news! That color is available');
else 
	console.log('We are sorry, that color is not available');
////7
function getRandomInt()
{
	var randomNumber = Math.floor(Math.random()*10);
	return randomNumber;
}
console.log(getRandomInt());
////8
function getRandomInt()
{
	var randomNumber = Math.ceil(Math.random()*6);
	return randomNumber;

}
console.log(getRandomInt());
////9
function startCounting()
{
	for(var i = 0; i <= 100; i++)
	{
		console.log(i);
	}
	return i;
}
startCounting();
////10
function standardsMaker (u) {
    for (let u = 1; u <= 300; u++) {
        console.log("I will write questions if I'm stuck")
    }
}
standardsMaker()
////11
function startCounting()
{
	var counter = 101;
	while(counter <= 101 && counter > 0)
	{
		counter --;
		console.log(counter);
	}
	return counter;
}
startCounting();
////12
function getColor(colorNumber)
{
	colorNumber = parseInt(colorNumber);
	switch(colorNumber){
		case 1: return "red"; 
				break;
		case 2: return "yellow"; 
				break;
		case 3: return "blue"; 
				break;
		case 4: return "green"; 
				break;
		default: return "black"; 
				break;
	}
}
function getAllStudentColors(i){
	//your loop here
	for (i; i>0; i--) {
	var exampleColor = getColor(Math.floor(Math.random()*5));
	console.log(exampleColor);
	}
}
getAllStudentColors(10);
////13
function fizzBuzz() {  
	for (let i = 1; i < 101; i++) {
		if(i % 3 == 0 && i % 5 == 0){
			console.log('FizzBuzz');
		} else if (i % 3 == 0) {
			console.log('Fizz');
		} else if (i % 5 == 0) {
			console.log('Buzz');
		} else {
			console.log(i);
		}
	}
}
fizzBuzz();
////14
let firePosition = 1;
const spinChamber = () => {
	let chamberPosition = Math.floor((Math.random() * 6) + 1);
	return chamberPosition;
};
const fireGun = (spinChamber) => {
    if (spinChamber == firePosition) return "You're dead!";
    else return "Keep playing!";
};
console.log(fireGun(spinChamber()));
////15
let i = 99
function sing () {
    for (i; i >= 0; i--) {
        if (i > 1) {
            console.log("`" + i + " bottles of milk on the wall, " + i + " bottles of milk.`")
            console.log("`Take one down and pass it around, " + (i -1) + " bottles of milk on the wall.`")
        } else if (i == 1) {
            console.log("`" + i + " bottles of milk on the wall, " + i + " bottles of milk.`")
            console.log("`Take one down and pass it around, no more bottles of milk on the wall.`")      
        } else if (i == 0) {
            console.log("`No more bottles of milk on the wall, no more bottles of milk`")
            console.log("`Go to the store and buy some more, 99 bottles of milk on the wall.`") 
        } else {
            console.log('There is an error')
        }
    }
}
sing()
////16
var person = {
    name: "John",           
    lastname: "Doe",
    age: 35,                     
    gender: "male",
    lucky_numbers: [ 7, 11, 13, 17],
    significant_other: person2  
};
var person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [ 2, 4, 6, 8],
    significant_other: person
};
var person3 = {
    name: 'Jimmy',
    lastname: 'Doe',
    age: 13,
    gender: "male",
    lucky_numbers: [1, 2, 3, 4],
    significant_other: null
}
var family = {
    lastname: "Doe",
    members: [person, person2, person3]
};
function addAllFamilyLuckyNumbers(anArray){
  var sumOfAllLuckyNumbers = 0;
    for (let i=0; i<anArray.length;i++){
        for(let x=0;x<anArray[i].lucky_numbers.length; x++){
            sumOfAllLuckyNumbers += anArray[i].lucky_numbers[x];
        }
    }
  return sumOfAllLuckyNumbers;
}
person.lucky_numbers[3] = 33;
console.log(addAllFamilyLuckyNumbers(family.members)); 