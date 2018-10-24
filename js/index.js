let greetings = 'Hello'; // String
// alert(greetings);

let price = 42; // Number - NaN, Infinity

let productIsAvailable = true; // Boolean

// null
// undefined

// Object - 

// Symbol - ES2015

// Task - move '!' at the end
const userName = prompt('Enter your name');
greetings = addHello(userName);
alert(greetings);

const userAge = parseFloat(prompt('Enter your age'));
const newAge = userAge + 1;
alert('Next year you will be ' + newAge);

if (userAge >= 18 && userAge <= 90) {
    alert('You are adult');
} 
if (userAge > 90) { // <, >, <=, >=, !==, ===
    alert('You are old');
} else {
    alert('You are child');
}

function addHello(text) {
    const result = 'Hello, ' + text;
    return result;
}