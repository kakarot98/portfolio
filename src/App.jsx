import "./App.css"
import Navbar from "./components/navbar/Navbar"
import StaticContent from "./components/StaticContent"
import { Outlet } from "react-router-dom"
import { motion } from 'framer-motion';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="main-content flex flex-col md:flex-row">
        <StaticContent />
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