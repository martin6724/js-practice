const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('error');
  }
};

const getComputerChoice = function() {
randomNumber = Math.floor(Math.random() * 3);
 switch(randomNumber) {
   case 0:
     return 'rock';
   case 1:
     return 'paper';
   case 2:
     return 'scissors';
 };
};

function determineWinner(userChoice, computerChoice) {
  if (userChoice === 'bomb') {
    return 'total win';
  }
  if (userChoice === computerChoice) {
    return 'tie';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'scissors') {
      return 'user wins';
    }
    else {
      return 'computer wins';
    };
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      return 'user wins';
    }
    else {
      return 'computer wins';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'paper') {
      return 'user wins';
    }
    else {
      return 'computer wins';
    }
  }
};

const playGame = () => {
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
