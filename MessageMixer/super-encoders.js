//Super Encoder Program. Decode and Encodes user input
//Author: Wilfredo Mateo

// Import the encryptors functions here.
const encryptors = require('./encryptors.js');

//Extract methods from encryptors
const caesarCipher = encryptors.caesarCipher;
const symbolCipher = encryptors.symbolCipher;
const reverseCipher = encryptors.reverseCipher;

const encodeMessage = (str) => {
  // Use the encryptor functions here.
  return reverseCipher(symbolCipher(caesarCipher(str, 6)));

}

const decodeMessage = (str) => {
  // Use the encryptor functions here.
  
}

// User input / output.

const handleInput = (userInput) => {
  const str = userInput.toString().trim();
  let output;
  if (process.argv[2] === 'encode') {
    output = encodeMessage(str);
  } 
  if (process.argv[2] === 'decode') {
    output = decodeMessage(str);
  } 
  
  process.stdout.write(output + '\n');
  process.exit();
}

// Run the program.
process.stdout.write('Enter the message you would like to encrypt...\n> ');
process.stdin.on('data', handleInput);