#! /usr/bin/env node

import inquirer from "inquirer"

const randomNumber = Math.floor(Math.random() *  10);

console.log("welcome to number guessing game");

const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "please guess a number between 1-10",
    },
]);

if(answer.userGuessNumber === randomNumber){
    console.log("Congratulation! you have guessed right number")
} else {
    console.log("Sorry you have guessed the wrong number");
}

