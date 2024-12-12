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

        <div className="static-content w-1/3 flex flex-col items-center flex-shrink-0">
          <img src={profile} alt="Profile" className="mt-10 w-40 h-auto shadow-md" />
          <div className="font-semibold text-2xl mt-4 m-2">Hrushikesh Mohanty</div>
          <div className="mt-2 text-center">!!! This website is still under construction !!!</div>
        </div>

        {/* Dynamic Content: Outlet for Routing */}

        <div className="dynamic-content flex-grow p-6 ">
          <Outlet />
        </div>
      </div>

    </>
  )
}

export default App