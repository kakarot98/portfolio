import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// A sample list of target words (can be expanded)
const WORD_LIST = ["REACT", "WORLD", "HAPPY", "SMART", "BRAVE", "LUCKY"];
const MAX_ATTEMPTS = 6;
const WORD_LENGTH = 5;

// Helper: get a random word from the list as the target
const getRandomTarget = () => WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)];

// Helper: generate a random word from A-Z
const randomWord = (length) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let word = "";
  for (let i = 0; i < length; i++) {
    word += letters[Math.floor(Math.random() * letters.length)];
  }
  return word;
};

const WordleGame = () => {
  // The word to guess
  const [targetWord, setTargetWord] = useState(getRandomTarget());
  // The board: an array of MAX_ATTEMPTS strings.
  // Pre-fill the first row with a random word (sample)
  const [guesses, setGuesses] = useState([randomWord(WORD_LENGTH), "", "", "", "", ""]);
  // Track the index for the next guess (start at 1 since row 0 is pre-filled)
  const [attemptIndex, setAttemptIndex] = useState(1);
  // The current guess input from the user
  const [currentGuess, setCurrentGuess] = useState("");
  // Game over state and message
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState("Your turn! (You are guessing)");

  // Check for win/draw whenever a new guess is submitted
  useEffect(() => {
    if (attemptIndex > 0) {
      const lastGuess = guesses[attemptIndex - 1];
      if (lastGuess && lastGuess === targetWord) {
        setGameOver(true);
        setMessage("Congratulations! You guessed it!");
      } else if (attemptIndex > MAX_ATTEMPTS) {
        setGameOver(true);
        setMessage(`Game Over! The word was ${targetWord}.`);
      }
    }
  }, [guesses, attemptIndex, targetWord]);

  const handleInputChange = (e) => {
    setCurrentGuess(e.target.value.toUpperCase());
  };

  const submitGuess = () => {
    if (currentGuess.length !== WORD_LENGTH) {
      setMessage(`Guess must be ${WORD_LENGTH} letters.`);
      return;
    }
    const newGuesses = [...guesses];
    newGuesses[attemptIndex] = currentGuess;
    setGuesses(newGuesses);
    setAttemptIndex(attemptIndex + 1);
    setCurrentGuess("");
    setMessage("Your turn!");
  };

  const restartGame = () => {
    setTargetWord(getRandomTarget());
    setGuesses([randomWord(WORD_LENGTH), "", "", "", "", ""]);
    setAttemptIndex(1);
    setCurrentGuess("");
    setGameOver(false);
    setMessage("Your turn! (You are guessing)");
  };

  return (
    <div className="w-full p-4">
      <h2 className="text-2xl font-bold mb-4 text-center text-text">Wordle Challenge</h2>
      <p className="mb-4 text-center text-sm text-gray-400">
        Guess the {WORD_LENGTH}-letter word. You have {MAX_ATTEMPTS} attempts.
      </p>
      {/* Render the board as rows, one below the other */}
      <div className="space-y-2 mb-4">
        {guesses.map((guess, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-5 gap-1 justify-center">
            {Array.from({ length: WORD_LENGTH }).map((_, colIndex) => (
              <input
                key={colIndex}
                type="text"
                value={guess[colIndex] || ""}
                readOnly
                className="w-12 h-12 border border-gray-600 text-center text-2xl font-bold bg-secondary text-text"
              />
            ))}
          </div>
        ))}
      </div>
      {/* Input for current guess */}
      {!gameOver && (
        <div className="flex flex-col items-center mb-4">
          <input
            type="text"
            value={currentGuess}
            onChange={handleInputChange}
            maxLength={WORD_LENGTH}
            className="w-48 p-2 text-center uppercase bg-secondary border border-gray-600 rounded mb-2 text-text"
          />
          <button
            onClick={submitGuess}
            className="px-4 py-2 bg-accent text-white rounded hover:bg-accent-dark transition-colors"
          >
            Submit Guess
          </button>
        </div>
      )}
      <AnimatePresence>
        {gameOver && (
          <motion.div
            className="text-center text-xl font-bold text-accent mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>
      {gameOver && (
        <button
          onClick={restartGame}
          className="px-4 py-2 bg-accent text-white rounded hover:bg-accent-dark transition-colors block mx-auto"
        >
          Restart Game
        </button>
      )}
    </div>
  );
};

export default WordleGame;
