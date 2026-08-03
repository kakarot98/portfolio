import { useMemo, useState } from 'react';

const WORD_LIST = [
  'REACT', 'WORLD', 'HAPPY', 'SMART', 'BRAVE', 'LUCKY',
  'PIXEL', 'QUERY', 'STACK', 'LOGIC', 'CRAFT', 'SHINE',
];
const MAX_ATTEMPTS = 6;
const WORD_LENGTH = 5;

const randomWord = () => WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)];

/**
 * Standard Wordle scoring: exact matches first, then present-but-misplaced
 * letters drawn from the remaining pool so duplicates score correctly.
 */
const scoreGuess = (guess, target) => {
  const result = Array(WORD_LENGTH).fill('absent');
  const pool = {};

  for (let i = 0; i < WORD_LENGTH; i += 1) {
    if (guess[i] === target[i]) result[i] = 'correct';
    else pool[target[i]] = (pool[target[i]] || 0) + 1;
  }

  for (let i = 0; i < WORD_LENGTH; i += 1) {
    if (result[i] === 'correct') continue;
    if (pool[guess[i]] > 0) {
      result[i] = 'present';
      pool[guess[i]] -= 1;
    }
  }

  return result;
};

const TILE_STYLES = {
  correct: 'border-accentDeep bg-accentDeep text-white',
  present: 'border-accent bg-accent/50 text-text',
  absent: 'border-line bg-line/60 text-muted',
  empty: 'border-line bg-primary/30 text-text',
};

const WordleGame = () => {
  const [target, setTarget] = useState(randomWord);
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [error, setError] = useState('');

  const hasWon = guesses.at(-1) === target;
  const isGameOver = hasWon || guesses.length >= MAX_ATTEMPTS;

  const scored = useMemo(
    () => guesses.map((guess) => ({ guess, marks: scoreGuess(guess, target) })),
    [guesses, target]
  );

  const submitGuess = (event) => {
    event.preventDefault();
    if (isGameOver) return;

    if (currentGuess.length !== WORD_LENGTH) {
      setError(`Guess must be ${WORD_LENGTH} letters.`);
      return;
    }

    setGuesses((current) => [...current, currentGuess]);
    setCurrentGuess('');
    setError('');
  };

  const restart = () => {
    setTarget(randomWord());
    setGuesses([]);
    setCurrentGuess('');
    setError('');
  };

  const rows = Array.from({ length: MAX_ATTEMPTS }, (_, rowIndex) => {
    if (scored[rowIndex]) return scored[rowIndex];
    if (rowIndex === guesses.length && !isGameOver) {
      return { guess: currentGuess.padEnd(WORD_LENGTH), marks: Array(WORD_LENGTH).fill('empty') };
    }
    return { guess: ' '.repeat(WORD_LENGTH), marks: Array(WORD_LENGTH).fill('empty') };
  });

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-xl font-bold text-text">Wordle</h3>
      <p className="mt-2 text-sm text-muted">
        Guess the {WORD_LENGTH}-letter word in {MAX_ATTEMPTS} tries.
      </p>

      <div className="mt-6 space-y-1.5">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-1.5">
            {Array.from({ length: WORD_LENGTH }, (_, colIndex) => (
              <div
                key={colIndex}
                className={`flex h-12 w-12 items-center justify-center rounded-md border text-xl font-bold uppercase transition-colors ${
                  TILE_STYLES[row.marks[colIndex]]
                }`}
              >
                {row.guess[colIndex]?.trim() || ''}
              </div>
            ))}
          </div>
        ))}
      </div>

      {!isGameOver ? (
        <form onSubmit={submitGuess} className="mt-6 flex flex-col items-center gap-3">
          <label htmlFor="wordle-guess" className="sr-only">
            Your guess
          </label>
          <input
            id="wordle-guess"
            type="text"
            value={currentGuess}
            onChange={(event) => {
              setCurrentGuess(event.target.value.toUpperCase().replace(/[^A-Z]/g, ''));
              setError('');
            }}
            maxLength={WORD_LENGTH}
            autoComplete="off"
            className="w-48 rounded-lg border border-line bg-primary/30 px-4 py-2 text-center text-lg font-semibold uppercase tracking-[0.3em] text-text"
          />
          <button
            type="submit"
            className="rounded-full bg-accentDeep px-5 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Submit guess
          </button>
          <p aria-live="polite" className="h-4 text-sm text-muted">{error}</p>
        </form>
      ) : (
        <div className="mt-6 flex flex-col items-center gap-3">
          <p aria-live="polite" className="text-base font-semibold text-text">
            {hasWon ? 'Nailed it!' : `The word was ${target}.`}
          </p>
          <button
            type="button"
            onClick={restart}
            className="rounded-full border border-line px-5 py-2 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accentDeep"
          >
            Play again
          </button>
        </div>
      )}
    </div>
  );
};

export default WordleGame;
