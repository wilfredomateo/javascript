////Team Stats////
////Author: Wilfredo Mateo////

//Create team object
const team = {
    _players: [{firstName: 'Will', lastName: 'Mateo', age: 35}],
    _games: [{opponent: '', teamPoints: 0, opponentPoints: 0}],
  
    //Getter for players
    get players() {
      return this._players
    },
  
    //Getter for games
    get games() {
      return this._games
    },
  
    //Add new player data
    addPlayer(newFirstName, newLastName, newAge) {
      
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      };
      this.players.push(player);
    },
  
    //Add new game data
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };
      this.games.push(game);
    }
  }
  
  //Test adding a player
  team.addPlayer("Bugs", "Bunny", 76)
  console.log(team.players)
  
  //Test adding game data
  team.addGame('Titans', 100, 98)
  console.log(team.games)