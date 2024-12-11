import "./App.css"
import Navbar from "./components/navbar/Navbar"
import profile from './assets/profile_glasses.jpg'
import { Outlet } from "react-router-dom"

const App = () => {
  return (
    <>
      <Navbar />
      <div className="main-content flex flex-row">
         
         {/* Static Content: Profile Picture and Name */}

        <div className="static-content w-64 flex flex-col justify-center items-center flex-shrink-0 bg-cream">
          <div className="image m-4">
            <img src={profile} alt="Profile" className="w-52 h-auto p-1 rounded-full shadow-md" />
          </div>
          <div className="font-semibold text-2xl">Hrushikesh Mohanty</div>
        </div>

        {/* Dynamic Content: Outlet for Routing */}

        <div className="dynamic-content flex-grow p-6 bg-white">
          <Outlet />
        </div>
      </div>

    </>
  )
}

export default App