import React, { useState } from 'react';
import { motion } from 'framer-motion';

const initialBoard = Array.from({ length: 9 }, () => Array(9).fill(''));

const SudokuGame = () => {
  const [board, setBoard] = useState(initialBoard);

  const handleChange = (row, col, value) => {
    const newBoard = board.map((r, i) =>
      i === row ? r.map((cell, j) => (j === col ? value : cell)) : r
    );
    setBoard(newBoard);
  };

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-xl font-bold mb-4 text-text">Sudoku Challenge</h3>
      <div className="grid grid-cols-9 gap-1">
        {board.map((row, i) =>
          row.map((cell, j) => (
            <input
              key={`${i}-${j}`}
              type="text"
              value={cell}
              onChange={(e) => handleChange(i, j, e.target.value)}
              maxLength="1"
              className="w-8 h-8 border border-gray-600 text-center bg-secondary text-text"
            />
          ))
        )}
      </div>
      <p className="mt-4 text-sm text-gray-400">Fill in the Sudoku puzzle and challenge yourself!</p>
    </div>
  );
};

export default SudokuGame;
