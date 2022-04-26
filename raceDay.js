////Race Day Registration////
////Author: Wilfredo Mateo////

//Assign a race number that's between 0 and 1000
let raceNumber = Math.floor(Math.random() * 1000);

//Check is racer registered ea
let registeredEarly = true;

const runnersAge = 35;

if (runnersAge >= 18) {
  raceNumber+=1000
}

if (runnersAge > 18 && registeredEarly) {
  console.log(`Runner number ${raceNumber}, your race will begin at 0930.`);
} else if (runnersAge > 18 && !registeredEarly) {
  console.log(`Runner number ${raceNumber}, your race will begin at 1100.`);
} else if (runnersAge < 18) {
  console.log(`Runner number ${raceNumber}, your race will start at 1230.`);
} else if (runnersAge == 18) {
  console.log("Please see the registration desk.");
}