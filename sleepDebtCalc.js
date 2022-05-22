////Sleep Debt Calculator////
////Author: Wilfredo Mateo////

//Returns number of rest hours
const getSleepHours = day => {

    switch (day.toLowerCase()) {
      case 'monday':
        return 8;
        break;
      case 'tuesday':
        return 9;
        break;
      case 'wednesday':
        return 9;
        break;
      case 'thursday':
        return 8;
        break;
      case 'friday':
        return 8;
        break;
      case 'saturday':
        return 11;
        break;
      case 'sunday':
        return 10;
        break;
    }
  };
  
//Returns total sleep hours
const getActualSleepHours = () => {
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday'); 
   };
   
//Returns the ideal sleep hours
const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
   };

//Calculates sleep numbers
const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    
    if (actualSleepHours === idealSleepHours) {
      console.log('You got the perfect amount of sleep this week.')
    } else if (actualSleepHours > idealSleepHours) {
      console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hours(s) more sleep than you needed this week. Lazy! Lol.')
    } else if (actualSleepHours < idealSleepHours) {
      console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hours(s) less sleep than you needed this week. Get some rest.')
    }
  };
  
  //Start program
  calculateSleepDebt()