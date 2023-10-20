// Rock-Paper-Scissors game

// Объект для хранения состояния игры
let gameState = {
    playerWin: 0,
    computerWin: 0,
    playerChoice: null,
    computerChoice: null,
    counterRaunds: 0
};


// Контейнер с игровым полем
const container = document.querySelector('#container');
// Карты игрока 
const cards = document.querySelectorAll('.player');
// Счет игрока
const playerInfo = document.querySelector('.top-player');
// Счет компьютера
const computerInfo = document.querySelector('.top-computer');
// Информация об игроке
const playerInfoText = document.querySelector('.bottom-player');
// Информация о компьютере
const computerInfoText = document.querySelector('.bottom-computer');
// Обявление о победе или поражении
const promotion = document.createElement('div');
// Список значений для реализации выбора компьютером. 
const CONDITIONS = [ 'rock', 'paper', 'scissors' ];


// Скрывает игровое поле до ножатия кнопки "LET`S PLAY".
container.style.opacity = '0';
container.style.visibility = 'hidden';


// Возвращает случайное число от 0 до 2.
const randomInteger = function( min, max ) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


// Имитирует принятие компьютером решения.
const getComputerChoice = function() {
    let computerNumerikChoice = randomInteger(0, 2)
    let computerWordChoice = CONDITIONS[computerNumerikChoice]    
    return computerWordChoice
};


// Определяет победителя раунда.
const playRound = (computerChoice, playerChoice) => {
    roundCounter();
    const winConditions = {
        'rock': 'scissors',
        'paper': 'rock',
        'scissors': 'paper'
    };
    
    // Устанавливаем текст один раз в начале функции
    playerInfoText.textContent = `You choice ${playerChoice}`;
    computerInfoText.textContent = `Cpu choice ${computerChoice}`;
    
    if (playerChoice === computerChoice) {
        // Ничего не делаем
    } else if (winConditions[playerChoice] === computerChoice) {
        ++gameState.playerWin;
        playerInfo.textContent = `Your score: ${gameState.playerWin}`;
    } else {
        ++gameState.computerWin;
        computerInfo.textContent = `Computer score: ${gameState.computerWin}`;
    }
};


// Определяет победителя игры.
const winTheGame = function () {
    if (gameState.playerWin === 5) {
        computerInfoText.textContent = '.';
        promotion.textContent = 'you won the game';
        document.body.appendChild(promotion);
        container.style.opacity = '0';
        container.style.visibility = 'hidden';
    } else if (gameState.computerWin === 5) {
        computerInfoText.textContent = '.';
        promotion.textContent = 'you lost the game';
        document.body.appendChild(promotion);
        container.style.opacity = '0';
        container.style.visibility = 'hidden';
    }
};


// Основная функция игры
const game = function() {
    winTheGame();
    gameState.computerChoice = getComputerChoice();
    playRound(gameState.computerChoice, gameState.playerChoice);
};


// Обработчики событий для карт игрока
cards.forEach(card => {
    card.addEventListener('mouseover', function() {
        let cardType = this.classList[2];
        playerInfoText.textContent = cardType;
    });

    card.addEventListener('mouseout', function () {
        playerInfoText.textContent = '.';
    });

    card.addEventListener('click', function() {
        gameState.playerChoice = this.classList[2];
        game(gameState.playerChoice);
    });
});


// Обработчик события для начала игры.
const startGame = document.querySelector('#play');
startGame.addEventListener('click', () => {
    if (container.style.opacity === '0') {
        container.style.opacity = '1';
        container.style.visibility = 'visible';
        roundCounter();
        container.style.transition = 'opacity 3s';
    } else {
        container.style.display = 'none';
    }
});


// Счетчик раундов.
const roundCounter = function() {
    gameState.counterRaunds++;
    startGame.textContent = `ROUND ${gameState.counterRaunds}`;
};


// Добавление стилей к элементу
promotion.style.width = '1000px';
promotion.style.fontFamily = 'Courgette';
promotion.style.fontSize = '100px';
promotion.style.color = '#f5ceff';
promotion.style.textShadow = '0 0 32px #ff0180';
promotion.style.display = 'flex';
promotion.style.justifyContent = 'center';
promotion.style.alignItems = 'center';
promotion.style.position = 'fixed';
promotion.style.top = '50%';
promotion.style.left = '50%';
promotion.style.transform = 'translate(-50%, -50%)';
promotion.style.transition = '3s';


// // Функция для сброса состояния игры
// const resetGame = function() {
//     // Сброс состояния игры
//     gameState.playerWin = 0;
//     gameState.computerWin = 0;
//     gameState.playerChoice = null;
//     gameState.computerChoice = null;
//     gameState.roundCounter = 0;

//     // Сброс отображения
//     playerInfo.textContent = '';
//     computerInfo.textContent = '';
//     playerInfoText.textContent = '.';
//     computerInfoText.textContent = '.';

//     // Удаление сообщения о выигрыше/проигрыше
//     if (promotion.parentNode) {
//         promotion.parentNode.removeChild(promotion);
//     }

//     // Показ игрового поля
//     container.style.opacity = '1';
//     container.style.visibility = 'visible';
// };
