// Rock-Paper-Scissors game

// Array of words for converting numbers into words.
const CONDITIONS = [ 'rock', 'paper', 'scissors' ];

// Function that returns a random number from 0 to 2.
const randomInteger = ( min, max ) => {
    let rand = min + Math.random() * ( max + 1 - min );

    return Math.floor(rand)
}

// Function simulating the computer's choice.
const getComputerChoice = () => {
    let computerNumerikChoice = randomInteger(0, 2)
    let computerWordChoice = CONDITIONS[computerNumerikChoice]

    return computerWordChoice
}

// Function for getting the user's choice.
const getUserChoise = () => {
    let userEnter = +prompt(
    'Enter 1 for Rock, 2 for Paper, and 3 for Scissors'
        ) - 1;
    if (userEnter < 0 || userEnter > 2) {
        console.log(
            "Invalid input! Please enter a number between 1 and 3."
            );

        return getUserChoise();
    }

    let userChoice = CONDITIONS[userEnter];

    return userChoice
}

// Wins counters.
let computerWin = 0;
let userWin = 0

// Conditional block to determine the winner.
const playRound = (computerChoice, userChoice) => {
    const winConditions = {
        'rock': 'scissors',
        'paper': 'rock',
        'scissors': 'paper'
    };
    
    if (winConditions[userChoice] === computerChoice) {
        console.log(
            `You won! You chose ${userChoice}, while the Computer chose ${computerChoice}`
            )
        ++userWin
    } else {
        console.log(
            `You lost! You chose ${userChoice}, while the Computer chose ${computerChoice}`
            )
        ++computerWin
    }
}

// Main game function
const game = () => {
    // The game loop continues until one of the players has 5 wins
    while (computerWin < 5 && userWin < 5) {
        let computerChoice = getComputerChoice();
        let userChoice = getUserChoise();
        playRound(computerChoice, userChoice)
        
        // Check win conditions and display appropriate message
        if (computerWin === 5) {
            alert('You Lost the Game')
        } else if (userWin === 5) {
            alert('You Won the Game')
        }
    }
}

// Start the game
game()
