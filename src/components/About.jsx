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
        className="text-center text-2xl font-bold text-text"
      >
        Hey there, I’m Hrushikesh! I’m a Software Engineer who loves turning ideas into pixel‑perfect websites and crafting engaging games. When I’m not coding, you can catch me jamming to my Spotify playlists or diving into my favorite games and thrillers. Let’s team up and build something awesome!
      </motion.p>
    </motion.div>
  );
};

export default About;
