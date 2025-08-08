// Renders a single bingo board

import React from 'react';
import BingoCell from './BingoCell';

const BingoBoard = ({ board, onCellClick }) => {
  // board: { size, name, cells }
  return (
    <div>
      <h4>{board.name}</h4>
      <table>
        <tbody>
          {board.cells.map((row, r) => (
            <tr key={r}>
              {row.map((cell, c) => (
                <td key={c}>
                  <BingoCell cell={cell} onClick={() => onCellClick(r, c)} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BingoBoard;