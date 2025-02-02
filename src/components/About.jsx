// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-full py-8 px-4 overflow-x-hidden"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <motion.p
        className="text-center text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
        style={{ backgroundSize: '200% auto' }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        Hey there, I’m Hrushikesh! I’m a Software Engineer who loves turning ideas into pixel‑perfect websites and crafting engaging games. When I’m not coding, you can catch me jamming on my guitar or diving into my favorite games. Let’s team up and build something awesome!
      </motion.p>
    </motion.div>
  );
};

export default About;
