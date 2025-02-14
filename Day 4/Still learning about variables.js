/*
let greeting = "Hello!";
let counter = 100;

console.log(greeting);
greeting = 1;
console.log(greeting);

greeting = "Hello!";
greeting = greeting + counter;
console.log(greeting); // -> Hello!100

const greeting = "Hello!";

const greeting; // -> Uncaught SyntaxError: Missing initializer in const declaration.
greeting = "Hello!";

let counter;
console.log(counter); // -> undefined.
{
    counter = 1;
    console.log(counter); // -> 1
}

counter = counter + 1;
console.log(counter); // -> 2

let counter;
console.log(counter); // -> undefined
{
    counter = 1;
    {
        console.log(counter); // -> 1
    }
}
counter = counter + 1;
console.log(counter); // -> 2

let height = 180;
{
    let weight = 70;
    console.log(height); // -> 180
    console.log(weight); // -> 70
}
console.log(height) // -> 180
console.log(weight); // -> Uncaught ReferenceError: weight is undefined.

let height = 200;
{
    let weight = 100;
    {
        let info = "tall";
        console.log(height); // -> 200
        console.log(weight); // -> 100
        console.log(info); // -> tall
    }

    console.log(height); // -> 200
    console.log(weight); // -> 100
    console.log(info); // -> Uncaught ReferenceError: info isn't defined.
    
}

var height = 180;
{
    var weight = 70;
    console.log(height); // -> 180
    console.log(weight); // -> 70
}
console.log(height); // -> 180
console.log(weight); // -> 70

function testFunction() {
    console.log("Hello");
    console.log("World");
}

testFunction()

var globalGreeting = "Good";

function testFunction() {
    var localGreeting = "Morning";
    console.log("function:");
    console.log(globalGreeting);
    console.log(localGreeting);
}

testFunction();

console.log("main program:");
console.log(globalGreeting);
console.log(localGreeting); // -> Uncaught ReferenceError: localGreeting isn't defined.

let counter = 100;
console.log(counter); // -> 100
{
    counter = 200;
    console.log(counter); // -> 200
}
console.log(counter); // -> 200


let counter = 100;
console.log(counter); // -> 100
{
    let counter = 200;
    console.log(counter); // -> 200
}
console.log(counter); // -> 100

var counter = 100;

function testFunction() {
    var counter = 200;
    console.log(counter);
}

console.log(counter); // -> 100
testFunction();
console.log(counter); // -> 100

var height = 180;
console.log(height); // -> 180
console.log(weight); // -> Uncaught ReferenceError: weight isn't defined.

var height = 180;
console.log(height); // -> 180
console.log(weight); // -> undefined
var weight = 70;
console.log(weight); // -> 70
*/

//SECTION QUIZ - QUESTION 1:

const single_rose = 8;
let numberOfRoses = 70;

const single_lily = 10;
let numberOfLilies = 50;

const single_tulip = 2;
let numberOfTulips = 120;

let total_rose = single_rose * numberOfRoses;
let total_lily = single_lily * numberOfLilies;
let total_tulip = single_tulip * numberOfTulips;

let total_total = total_rose + total_lily + total_tulip;

console.log(`Rose - unit price: ${single_rose} , quantity: ${numberOfRoses} , value: ${total_rose}`)
console.log(`Lily - unit price: ${single_lily} , quantity: ${numberOfLilies} , value: ${total_lily}`)
console.log(`Tulip - unit price: ${single_tulip} , quantity: ${numberOfTulips} , value: ${total_tulip}`)
console.log(`Total: ${total_total}\n`);

//SECTION QUIZ - QUESTION 2:

numberOfRoses -= 20
numberOfLilies -= 30

total_rose = single_rose * numberOfRoses;
total_lily = single_lily * numberOfLilies;
total_tulip = single_tulip * numberOfTulips;

total_total = total_rose + total_lily + total_tulip;

console.log(`Rose - unit price: ${single_rose} , quantity: ${numberOfRoses} , value: ${total_rose}`)
console.log(`Lily - unit price: ${single_lily} , quantity: ${numberOfLilies} , value: ${total_lily}`)
console.log(`Tulip - unit price: ${single_tulip} , quantity: ${numberOfTulips} , value: ${total_tulip}`)
console.log(`Total: ${total_total}`);