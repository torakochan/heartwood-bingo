// Team model stub

class Team {
  constructor({ name, boards }) {
    this.name = name;
    this.boards = boards || [];
    this.score = 0;
  }
}

module.exports = Team;