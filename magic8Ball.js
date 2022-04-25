////Magic 8 Ball Game////
////Author: Wilfredo Mateo////

//Set the user's name
let userName = 'Wolf'

//Process the userName
userName ? console.log(`Hello, ${userName}!`)
: console.log('Hello!');

//Store the question for the Magic 8 Ball
const userQuestion = 'Will I become a great programmer?'

//Print out the question the user has asked
console.log(`${userName} has asked the Magic 8 Ball the following question: ${userQuestion}`)

//Random number generator
let randomNumber = Math.floor(Math.random() * 8)

//Establish the 8ball's variable to hold phrases
let eightBall = ''

//Switch statement to cycle through 8Ball responses 
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain'
    break;
  case 1:
    eightBall = 'It is decidedly so'
    break;
  case 2:
    eightBall = 'Reply hazy try again'
    break;
 case 3:
    eightBall = 'Cannot predit now'
    break;
 case 4:
    eightBall = 'Do not count on it'
    break;
 case 5:
    eightBall = 'My sources say no'
    break;
 case 6:
    eightBall = 'Outlook not so good'
    break;
 case 7:
    eightBall = 'Signs point to yes'
    break;
 default:
    eightBall = 'Error'
    break;

}

//Print out the 8Balls predictions
console.log(eightBall)




