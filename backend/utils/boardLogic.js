// Board and item randomization helpers

// Example: randomize items onto board cells
function randomizeItems(items, size) {
  // items: array of item objects (with image, rarity, etc.)
  // size: 3, 4, or 5 (board dimension)
  const shuffled = items.slice().sort(() => Math.random() - 0.5);
  const board = [];
  let idx = 0;
  for (let r = 0; r < size; r++) {
    const row = [];
    for (let c = 0; c < size; c++) {
      row.push(shuffled[idx] || null);
      idx++;
    }
    board.push(row);
  }
  return board;
}

module.exports = { randomizeItems };