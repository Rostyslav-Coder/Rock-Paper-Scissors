// Rock-Paper-Scissors logic

// List of words for converting numbers into words.
const CONDITIONS = ['rock', 'paper', 'scissors'];

// Function returning a random number from 0 to 2
const randomInteger = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand)
}

// Function simulating computer selection of a value
const getComputerChoice = () => {
    let computerNumerikChoice = randomInteger(0, 2)
    let computerWordChoice = CONDITIONS[computerNumerikChoice]
    return computerWordChoice
}

// Computer Choice value
let computerChoice = getComputerChoice();

// User Choise value
let userEnter = +prompt('Enter 1 for - Rock, 2 for - Paper, and 3 for - Scissors') - 1;
let userChoice = CONDITIONS[userEnter];
