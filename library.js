////Library Program////
////Author: Wilfedo Mateo////

class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = []; 
    }
  
    //Setters
    set isCheckedOut(newCheckOut) {
      this._isCheckedOut = newCheckOut;
    }
  
    //Getters
    get title() {
      return this._title;
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    get ratings() {
      return this._ratings;
    }
  
    //Methods
    toggleCheckedOutStatus() {
      this._isCheckedOut = !this._isCheckedOut;
    }
  
    getAverageRating() {
      let ratingsSum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
      const lengthOfArray = this._ratings.length;
      return ratingsSum / lengthOfArray;
    }
  
    addRating(rate) {
      this._ratings.push(rate);
    }
  
  }
  
  class Book extends Media {
    constructor(author, title, pages) {
      super()._title = title;
      this._author = author;
      this._pages = pages;
    }
  
    //Getters
    get author() {
      return this._author;
    }
  
    get pages() {
      return this._pages;
    }
  }
  
class Movie extends Media {
    constructor(director, title, runTime) {
      super()._title = title;
      this._director = director;
      this._runTime = runTime;
    }
  
    get director() {
      return this._director;
    }
  
    get runTime() {
      return this._runTime;
    }
  
  }
  
class CD extends Media {
    constructor(artist, title, songs) {
      super()._title = title;
      this._artist = artist;
      this._songs = songs;
    }
  
    get artist() {
      return this._artist;
    }
  
    get songs() {
      return this._songs;
    }
  }
  
  //Test 1
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  
  historyOfEverything.toggleCheckedOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log(historyOfEverything.getAverageRating());
  
  //Test 2
  const speed = new Movie('Jan de Bont', 'Speed', 166);
  speed.toggleCheckedOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());
  
  
  