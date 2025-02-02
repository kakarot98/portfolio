import "./App.css"
import Navbar from "./components/navbar/Navbar"
import profile from './assets/profile_glasses.jpg'
import { Outlet } from "react-router-dom"
import { motion } from 'framer-motion';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="main-content flex flex-col md:flex-row">

        {/* Static Content: Profile Picture and Name */}

        <div className="static-content w-full md:w-1/3 flex flex-col items-center justify-center flex-shrink-0 p-4 bg-secondary md:h-screen">
          <motion.img src={profile} alt="Profile" className="mt-10 w-40 h-auto shadow-md" whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}/>
          <div className="font-semibold text-2xl mt-4 m-2">Hrushikesh Mohanty</div>
          <div className="mt-2 text-center text-sm text-gray-400">!!! This website is still under construction !!!</div>
          <div className="mt-2 text-center text-sm text-gray-400">I can do Front-end/Full-stack development. Do not hesitate to contact me for such a role {`:)`}</div>
        </div>

        {/* Dynamic Content: Outlet for Routing */}

        <div className="dynamic-content w-full md:flex-grow p-6 bg-primary">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </div>
      </div>

    </>
  )
}

export default App