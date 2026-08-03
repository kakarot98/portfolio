import { Suspense, lazy, useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Section from '../ui/Section';
import Reveal from '../layout/Reveal';
import funZone from '../../data/funZoneData.json';

// Game code is split out of the main bundle and only fetched on first open.
const GAMES = {
  tictactoe: lazy(() => import('../funzone/minigames/TicTacToeGame')),
  wordle: lazy(() => import('../funzone/minigames/WordleGame')),
  sudoku: lazy(() => import('../funzone/minigames/SudokuGame')),
};

const FunZone = () => {
  const [activeGame, setActiveGame] = useState(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = activeGame ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeGame]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setActiveGame(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const ActiveGame = activeGame ? GAMES[activeGame.id] : null;

  return (
    <Section id="funzone" kicker="A little less serious" title="Fun Zone">
      <div className="grid gap-5 sm:grid-cols-3">
        {funZone.games.map((game, index) => (
          <Reveal key={game.id} delay={index * 0.05}>
            <motion.button
              type="button"
              onClick={() => setActiveGame(game)}
              whileHover={reduceMotion ? {} : { y: -3 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="flex h-full w-full flex-col rounded-xl border border-line bg-secondary p-6 text-left shadow-sm transition-shadow duration-200 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-text">{game.title}</h3>
              <p className="mt-2 flex-grow text-[15px] leading-relaxed text-muted">
                {game.description}
              </p>
              <span className="mt-5 text-sm font-medium text-accentDeep">Play →</span>
            </motion.button>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14 rounded-xl border border-line bg-secondary p-6 sm:p-8">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
          Certified achievements
        </h3>
        <ul className="mt-4 space-y-2.5">
          {funZone.achievements.map((achievement) => (
            <li key={achievement} className="flex gap-3 text-[15px] leading-relaxed text-muted">
              <span aria-hidden="true" className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      <AnimatePresence>
        {activeGame && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-text/40 p-4 backdrop-blur-sm"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? {} : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setActiveGame(null)}
            role="dialog"
            aria-modal="true"
            aria-label={activeGame.title}
          >
            <motion.div
              className="relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-line bg-secondary p-6 shadow-xl"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduceMotion ? {} : { opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveGame(null)}
                aria-label="Close game"
                className="absolute right-4 top-4 text-2xl leading-none text-muted transition-colors hover:text-text"
              >
                ×
              </button>

              <Suspense
                fallback={<p className="py-16 text-center text-muted">Loading game…</p>}
              >
                <ActiveGame />
              </Suspense>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default FunZone;
