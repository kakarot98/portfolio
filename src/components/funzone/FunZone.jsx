import React, { useState, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { div } from 'framer-motion/client';

const TicTacToeGame = lazy(() => import('./minigames/TicTacToeGame'));

const funCards = [
    {
      id: 1,
      title: "Tic Tac Toe with AI",
      description: "Play a game of Tic Tac Toe against an AI opponent. Click on this card to start playing!",
    },
    
  ];


const FunZone = () => {

    const [activeCard, setActiveCard] = useState(null);

    const openModal = (card) => {
        setActiveCard(card);
      };
    
      const closeModal = () => {
        setActiveCard(null);
      };

      
  return (
    <div className='py-8 px-4 bg-primary text-text min-h-screen'>
        <h2 className="text-3xl font-bold text-center mb-8 text-text">Fun Zone</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {funCards.map(card => (
          <motion.div
            key={card.id}
            className="bg-secondary rounded-lg p-4 shadow-md cursor-pointer hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.03 }}
            onClick={() => openModal(card)}
          >
            <h3 className="text-xl font-bold mb-2 text-text">{card.title}</h3>
            <p className="text-sm text-text">{card.description}</p>
          </motion.div>
        ))}


<AnimatePresence>
        {activeCard && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-secondary rounded-lg shadow-lg w-full max-w-md p-4 relative overflow-y-auto max-h-[80vh]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.x < -50) closeModal();
              }}
            >
              {/* Instead of a close button, the modal will close when clicking outside */}
              <Suspense fallback={<div className="p-4 text-center text-text">Loading game...</div>}>
                <TicTacToeGame />
              </Suspense>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

        </div>


    </div>
  );
};

export default FunZone;