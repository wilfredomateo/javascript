////Rock, Paper, Scissor Game////
////Author: Wilfredo Mateo////

//Grab input and apply lower case
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
  
    //Check for correct input
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput
    } else {
      console.log('Error! Please provide either rock, paper, or scissor as input!')
    }
  };
  
  //Have the computer generate a choice
  function getComputerChoice() {
    //Random number between 0 and 2
    randomNumber = Math.floor(Math.random() * 3);
  
    //Switch using random number
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors'
    }
  
  };
  
  //Determine a winner
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'Game was a tie...Try again.';
    }
    if (userChoice === 'bomb') {
      return 'You blew away the competition!'
    }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
  };
  
  //Game setup
  function playGame() {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
  
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  //Play Game
  playGame();
  
  