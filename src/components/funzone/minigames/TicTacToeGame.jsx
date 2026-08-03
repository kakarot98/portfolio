import { useCallback, useEffect, useState } from 'react';

const WINNING_COMBOS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

const checkWinner = (board) => {
  for (const [a, b, c] of WINNING_COMBOS) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { player: board[a], line: [a, b, c] };
    }
  }
  return null;
};

/** Win if possible, else block, else take centre/corner. Beatable, but it tries. */
const pickAiMove = (board) => {
  const empty = board.reduce((acc, cell, i) => (cell === null ? [...acc, i] : acc), []);

  for (const player of ['O', 'X']) {
    for (const i of empty) {
      const next = [...board];
      next[i] = player;
      if (checkWinner(next)) return i;
    }
  }

  return [4, 0, 2, 6, 8, 1, 3, 5, 7].find((i) => empty.includes(i)) ?? empty[0];
};

const TicTacToeGame = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState('X');

  const result = checkWinner(board);
  const isDraw = !result && board.every(Boolean);
  const isGameOver = Boolean(result) || isDraw;

  const message = result
    ? result.player === 'X'
      ? 'You win!'
      : 'The AI takes this one.'
    : isDraw
      ? "It's a draw."
      : turn === 'X'
        ? 'Your turn — you are X.'
        : 'AI is thinking…';

  useEffect(() => {
    if (turn !== 'O' || isGameOver) return undefined;

    const timer = setTimeout(() => {
      setBoard((current) => {
        if (checkWinner(current) || current.every(Boolean)) return current;
        const next = [...current];
        next[pickAiMove(current)] = 'O';
        return next;
      });
      setTurn('X');
    }, 400);

    return () => clearTimeout(timer);
  }, [turn, isGameOver]);

  const handleCellClick = useCallback(
    (index) => {
      if (board[index] || isGameOver || turn !== 'X') return;
      setBoard((current) => {
        const next = [...current];
        next[index] = 'X';
        return next;
      });
      setTurn('O');
    },
    [board, isGameOver, turn]
  );

  const restart = () => {
    setBoard(Array(9).fill(null));
    setTurn('X');
  };

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-xl font-bold text-text">Tic Tac Toe</h3>
      <p aria-live="polite" className="mt-2 text-sm text-muted">{message}</p>

      <div className="mt-6 grid grid-cols-3 gap-2">
        {board.map((cell, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleCellClick(index)}
            disabled={Boolean(cell) || isGameOver || turn !== 'X'}
            aria-label={`Square ${index + 1}${cell ? `, ${cell}` : ', empty'}`}
            className={`flex h-20 w-20 items-center justify-center rounded-lg border text-3xl font-bold transition-colors disabled:cursor-default ${
              result?.line.includes(index)
                ? 'border-accentDeep bg-accent/40 text-accentDeep'
                : 'border-line bg-primary/40 text-text hover:border-accent'
            }`}
          >
            {cell}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={restart}
        className="mt-6 rounded-full border border-line px-5 py-2 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accentDeep"
      >
        {isGameOver ? 'Play again' : 'Reset'}
      </button>
    </div>
  );
};

export default TicTacToeGame;
