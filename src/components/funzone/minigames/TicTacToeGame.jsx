import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const TicTacToeGame = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState("X"); // User is "X", AI is "O"
  const [isGameOver, setIsGameOver] = useState(false);
  const [winner, setWinner] = useState(null);
  const [message, setMessage] = useState("Your turn! (You are X)");


  useEffect(() => {
    const checkWinner = (board) => {
      for (let combo of winningCombos) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          return board[a];
        }
      }
      return null;
    };

    const currentWinner = checkWinner(board);
    if (currentWinner) {
      setIsGameOver(true);
      setWinner(currentWinner);
      setMessage(currentWinner === "X" ? "Congratulations! You win!" : "AI wins. Better luck next time!");
    } else if (board.every(cell => cell !== null)) {
      setIsGameOver(true);
      setWinner("draw");
      setMessage("It's a draw!");
    } else if (turn === "O" && !isGameOver) {

      const timer = setTimeout(() => {
        aiMove();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [board, turn, isGameOver]);

  const handleCellClick = (index) => {
    if (board[index] || isGameOver || turn !== "X") return; 
    const newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);
    setTurn("O");
    setMessage("AI's turn...");
  };

  const aiMove = () => {
    const emptyIndices = board
      .map((cell, idx) => (cell === null ? idx : null))
      .filter(val => val !== null);
    if (emptyIndices.length === 0) return;
    const randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
    const newBoard = [...board];
    newBoard[randomIndex] = "O";
    setBoard(newBoard);
    setTurn("X");
    setMessage("Your turn!");
  };

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setTurn("X");
    setIsGameOver(false);
    setWinner(null);
    setMessage("Your turn! (You are X)");
  };

  const cellClasses = "w-20 h-20 border border-gray-500 flex items-center justify-center text-3xl font-bold bg-secondary text-text";

  return (
    <div className="flex flex-col items-center p-4">
      <h3 className="text-2xl font-bold mb-4">Tic Tac Toe</h3>
      <p className="mb-4 text-lg">{message}</p>
      <div className="grid grid-cols-3 gap-2 max-w-xs w-full">
        {board.map((cell, idx) => (
          <button 
            key={idx}
            className={cellClasses}
            onClick={() => handleCellClick(idx)}
            disabled={cell !== null || isGameOver}
          >
            {cell}
          </button>
        ))}
      </div>
      <AnimatePresence>
        {isGameOver && (
          <motion.div
            className="mt-4 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl font-bold mb-2">
              {winner === "draw" ? "It's a Draw!" : `Game Over: ${winner} wins!`}
            </p>
            <button 
              onClick={restartGame}
              className="px-4 py-2 bg-accent text-white rounded hover:bg-accent-dark transition-colors"
            >
              Restart
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TicTacToeGame;
