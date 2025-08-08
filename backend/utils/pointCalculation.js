// Point calculation helpers

const rarityToPoints = {
  common: 1,
  uncommon: 3,
  rare: 5,
};

function calculateTeamPoints(boards) {
  let total = 0;
  for (const board of boards) {
    for (const row of board.cells) {
      for (const cell of row) {
        if (cell && cell.acquired) {
          total += rarityToPoints[cell.rarity] || 1;
        }
      }
    }
  }
  return total;
}

module.exports = { rarityToPoints, calculateTeamPoints };