import { useMemo, useState } from 'react';

// A single hand-checked puzzle with its solution. 0 = blank.
const PUZZLE = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

const SOLUTION = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
];

const toBoard = () => PUZZLE.map((row) => row.map((n) => (n === 0 ? '' : String(n))));

const SudokuGame = () => {
  const [board, setBoard] = useState(toBoard);
  const [checked, setChecked] = useState(false);

  const isComplete = board.every((row) => row.every((cell) => cell !== ''));

  const isSolved = useMemo(
    () => board.every((row, i) => row.every((cell, j) => cell === String(SOLUTION[i][j]))),
    [board]
  );

  const handleChange = (row, col, rawValue) => {
    const value = rawValue.replace(/[^1-9]/g, '').slice(-1);
    setChecked(false);
    setBoard((current) =>
      current.map((r, i) => (i === row ? r.map((cell, j) => (j === col ? value : cell)) : r))
    );
  };

  const reset = () => {
    setBoard(toBoard());
    setChecked(false);
  };

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-xl font-bold text-text">Sudoku</h3>
      <p className="mt-2 text-sm text-muted">Fill every row, column and box with 1–9.</p>

      <div className="mt-6 grid grid-cols-9 gap-px overflow-hidden rounded-lg border-2 border-text/70 bg-text/30">
        {board.map((row, i) =>
          row.map((cell, j) => {
            const isGiven = PUZZLE[i][j] !== 0;
            const isWrong = checked && cell !== '' && cell !== String(SOLUTION[i][j]);

            return (
              <input
                key={`${i}-${j}`}
                type="text"
                inputMode="numeric"
                value={cell}
                readOnly={isGiven}
                onChange={(event) => handleChange(i, j, event.target.value)}
                aria-label={`Row ${i + 1}, column ${j + 1}`}
                className={`h-8 w-8 text-center text-sm font-semibold outline-none sm:h-9 sm:w-9 sm:text-base ${
                  // Thicker separators between the 3x3 boxes.
                  j % 3 === 2 && j !== 8 ? 'mr-px' : ''
                } ${i % 3 === 2 && i !== 8 ? 'mb-px' : ''} ${
                  isWrong
                    ? 'bg-red-100 text-red-700'
                    : isGiven
                      ? 'cursor-default bg-line/50 text-text'
                      : 'bg-secondary text-accentDeep focus:bg-accent/25'
                }`}
              />
            );
          })
        )}
      </div>

      <p aria-live="polite" className="mt-4 h-5 text-sm font-medium text-text">
        {isSolved ? 'Solved — nicely done.' : checked ? 'Not quite — errors are highlighted.' : ''}
      </p>

      <div className="mt-2 flex gap-3">
        <button
          type="button"
          onClick={() => setChecked(true)}
          disabled={!isComplete}
          className="rounded-full bg-accentDeep px-5 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-40"
        >
          Check
        </button>
        <button
          type="button"
          onClick={reset}
          className="rounded-full border border-line px-5 py-2 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accentDeep"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default SudokuGame;
