var ask = require('readline-sync');
console.log('Hello! My name is Hal. Help me get to know you!\n');
var firstName = ask.question('What is your first name? ');
console.log(`Hello ${firstName}, it's a pleasure to meet you!`)
var lastName = ask.question('May I get your last name too, please? ');
console.log(`Great! Thanks, ${firstName}.`)
var age = ask.question("How many times has the earth circled our sun since you were born? That's just a fancy way of asking how old you are, lol! ")
console.log(`Thanks again, ${age} year old ${firstName} ${lastName}. In case you're curious, I'm older than dirt!`)
var from = ask.question('Where did you grow up? ')
var up = from.toUpperCase();
console.log(`${up}!! What a small world! I have a good friend who also hails from ${from}! `)
var places = ask.question(`So, ${firstName}, where are your favorite places to visit? `)
/*
if (places > 8) {
    var x = (places.length / 2);
    halfLength = (Math.floor(x))
    console.log (`That's quite a list! I'm unable to show all ${places.length} characters, but the last half is ${places}`);
} else {
    console.log(`I've never been to ${places}, but I understand they're great places!`)
}

function returnFirstHalf(str) {
    var newStr = str.slice(0, (str.length / 2));
    console.log (newStr);
*/