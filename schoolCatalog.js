////School Catalog////
////Author: Wilfredo Mateo////

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
        super()._level = 'primary';
        super()._numberOfStudents = numberOfStudents;
        this._pickupPolicy = pickupPolicy;

    }

    get pickupPolicy() {
        return this._pickupPolicy; 
      }
  
  }
  
  class MiddleSchool extends School {
  
  }
  
  class HighSchool extends School {
    
  }