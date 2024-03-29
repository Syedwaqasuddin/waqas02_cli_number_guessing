#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("Welcome to the number guessing Game")

const answer = await inquirer.prompt([
    {
    name:"userGuessedNumber",
    message:"please guess one random number between 1 - 6.",
    type:"number"

    },
])
if (answer.userGuessedNumber === randomNumber){
    console.log("Congratulation you guessed right number")
}
else{
console.log("you guessed wrong number")

}