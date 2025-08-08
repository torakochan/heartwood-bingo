// Renders a single cell (image, rarity, acquired/star)

import React from 'react';

const BingoCell = ({ cell, onClick }) => {
  if (!cell) return <div className="empty-cell"></div>;
  return (
    <div
      className={`bingo-cell ${cell.rarity} ${cell.acquired ? 'acquired' : ''}`}
      onClick={onClick}
      style={{
        border: cell.rare ? '2px solid gold' : '',
        background: cell.acquired ? '#e6ffe6' : '',
        position: 'relative',
        width: 64,
        height: 64,
      }}
    >
      {cell.imageUrl && (
        <img src={cell.imageUrl} alt={cell.label || 'item'} width={48} height={48} />
      )}
      {cell.acquired && (
        <span
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            color: 'gold',
            fontSize: 24,
          }}
        >
          🌟
        </span>
      )}
    </div>
  );
};

export default BingoCell;