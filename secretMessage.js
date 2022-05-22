////Secret Message, working with Arrays////
////Author: Wilfredo Mateo////

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//Check length of original message
console.log(secretMessage.length)

//Remove the last element in array
secretMessage.pop() //removes JavaScript

//Add two new words to end of array
secretMessage.push('to', 'Program')

//Edit a word within the array
let wordIndex = secretMessage.indexOf('easily');
secretMessage[wordIndex] = 'right';

//Remove the first element of array
secretMessage.shift(); //removes Learning

//Add the string Programming to first index of the array
secretMessage.unshift('Programming');

//Remove get, right, the, first, time. Replace with 'know'
let startingIndex = secretMessage.indexOf('get');
secretMessage.splice(startingIndex, 5, 'know');

//Join the entire message to print out as a sentence
console.log(secretMessage.join(' ')) //use a space
