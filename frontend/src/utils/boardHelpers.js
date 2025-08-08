// Client-side board utilities (randomization, scoring, etc.)

export function rarityToPoints(rarity) {
  switch (rarity) {
    case 'rare':
      return 5;
    case 'uncommon':
      return 3;
    case 'common':
    default:
      return 1;
  }
}