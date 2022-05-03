////Whale Talk Program////
////Author: Wilfredo Mateo////
////What: This program takes any input and translates it into whale speak, which consist of only vowels.////

const input = 'King Geedorah'
const vowels = ['a', 'e', 'i', 'o', 'u'];

const resultArray = []

for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
    if(input[inputIndex] === 'e'){
        resultArray.push(input[inputIndex]);
    }
    if(input[inputIndex] === 'u'){
        resultArray.push(input[inputIndex]);
    }
    for (let vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex++) {
        if (input[inputIndex] === vowels[vowelsIndex]) {
            resultArray.push(input[inputIndex]);
        }
    }
}
//join the array and capitaize all letters
const resultString = resultArray.join('').toUpperCase();
console.log(resultString)
