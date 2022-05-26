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
  
  }
  
  class Primary extends School() {
  
  }
  
  class Middle extends School() {
  
  }
  
  class High extends School() {
    
  }