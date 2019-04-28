// import third party code
var readline = require('readline-sync')

// .question will return a string
var response = readline.question("What is your name?: ")

console.log(`Hello ${response}, good to meet you!`)

// key in select for helping the user select from options in your array
var animals = ['Lion', 'Elephant', 'Crocodile', 'Giraffe', 'Hippo']

var index = readline.keyInSelect(animals, 'Which animal?');

if(animals[index] === "Lion"){
    console.log("you've selected the lion")
}

// do the following commands in the folder where you'll use them. 

npm init -y // -> creates new package.json

npm i readline-sync // -> creates "node_modules" and downloads readline-sync to that folder