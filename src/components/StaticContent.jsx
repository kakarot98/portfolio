import React from 'react'
import {motion} from 'framer-motion'
import profile from '../assets/profile_glasses.jpg'

const StaticContent = () => {
  return (
    <motion.div 
        className="static-content w-full md:w-[23%] max-h-fit flex flex-col items-center md:m-20 justify-center flex-shrink-0 p-4 md:h-screen"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          // Set an initial background gradient with dark tones
          initial={{ backgroundImage: "linear-gradient(45deg, #000000, #2c2c2c, #000000)" }}
          // Ensure the animated gradient remains in dark tones throughout the cycle
          style={{
            backgroundImage: "linear-gradient(45deg, #000000, #2c2c2c, #000000)",
            backgroundSize: "200% 200%"
          }}
        >
          <motion.img src={profile} alt="Profile" className="mt-10 w-40 h-auto shadow-md" whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}/>
          <motion.div
           className="font-semibold text-2xl mt-4 m-2 bg-clip-text text-transparent"
           style={{
             backgroundImage: "linear-gradient(90deg, #4f46e5, #9333ea, #ec4899)",
             backgroundSize: "200% auto",
           }}
           animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
           transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
           >
            Hrushikesh Mohanty</motion.div>
          <motion.div 
          className="mt-2 text-center text-sm italic bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(90deg, #fca5a5, #fcd34d, #a7f3d0)",
            backgroundSize: "200% auto",
          }}
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          >
            Software Engineer | Front-end Designer & Developer | Writer | Doodler</motion.div>
        </motion.div>
  )
}

export default StaticContent