////Meal Maker////
////Author: Wilfredo Mateo////

//Create the Menu Object
const menu = {
    _meal: '',
    _price: 0,
  
    //Create setter to check for string 
    set meal(mealToCheck) {
      if (typeof mealToCheck === 'string') {
        return this._meal = mealToCheck
      }
    },
  
    //Create setter to check for number
    set price(priceToCheck) {
      if (typeof priceToCheck === 'number') {
        return this._price = priceToCheck
      }
    },
  
    //Create getter for today's special
    get todaysSpecial() {
    if (this._meal !== '' && this._price !== 0) {
      return `Today's Special is ${this._meal} for $${this._price}!`
    } else {
      return 'Meal or price was not set correctly!'
    }
  }
  
  }
  
  //Set today's special
  menu.meal = 'Pizza';
  menu.price = 3.50;
  
  //Test output
  console.log(menu.todaysSpecial)
