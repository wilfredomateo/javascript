////Kelvin Weather Converter////
////Author: Wilfredo Mateo////

//set constant variable for kelvin
const kelvin = 0 //Change temp here

//convert kelvin to celsius
const celsius = kelvin - 273

//convert celsius to fahrenheit
let fahrenheit = celsius * (9/5) + 32

//use the .floor() method from Math to round down
fahrenheit = Math.floor(fahrenheit);

//use string interpolation to log temp in fahrenheit
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)