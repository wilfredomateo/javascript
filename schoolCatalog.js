////School Catalog////
////Author: Wilfedo Mateo////


class School {
    constructor(name, level, numberOfStudents) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents; 
    }
  
    get name() {
      return this._name;
    }
    get level() {
      return this._level; 
    }
    get numberOfStudents() {
      return this._numberOfStudents;
    }

    quickFacts() {
        console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
      }

      static pickSubstituteTeacher(substituteTeachers) {
        let myIndex = Math.floor(substituteTeachers.length * Math.random());
        return substituteTeachers[myIndex];
      }

    set numberOfStudents(newNumberOfStudents) {
        if (typeof newNumberOfStudents === 'number') {
          this._numberOfStudents = newNumberOfStudents;
        } else {
          console.log('Invalid input: numberOfStudents must be set to a Number value type.')
        }
      }
  
  }
  
class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super()._name = name;
    this._level = 'primary';
    this._numberOfStudents = numberOfStudents;
    this._pickupPolicy = pickupPolicy;
  }
  
  get pickupPolicy() {
    return this._pickupPolicy; 
  }

  
  }
  
class MiddleSchool extends School {
  constructor(name, numberOfStudents, band) {
    super()._name = name;
    this._level = 'middle';
    this._numberOfStudents = numberOfStudents;
    this._band = band;
  }
  get band() {
    return this._band;
  }
  
  }
  
class HighSchool extends School {
  constructor(name, numberOfStudents, sportTeams) {
    super()._name = name;
    this._level = 'high'
    this._numberOfStudents = numberOfStudents;
    this._sportTeams = sportTeams;

  }
  get sportTeams() {
    return this._sportTeams;
  }
    
  }

//Test class instances
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

lorraineHansbury.quickFacts();

School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

console.log(alSmith.sportTeams);

const folks = new MiddleSchool('Folks', 410, ['Guitar', 'Sax', 'Drums', 'Flute']);

console.log(folks.numberOfStudents)
  