// Board model stub

// For now, just a JS object structure. Replace with DB model as needed.
class Board {
  constructor({ size, name, cells, teamId }) {
    this.size = size; // 3, 4, or 5
    this.name = name;
    this.cells = cells; // array of arrays (rows of cells)
    this.teamId = teamId;
  }
}

module.exports = Board;