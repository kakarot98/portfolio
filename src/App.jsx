import "./App.css"
import Navbar from "./components/navbar/Navbar"
import profile from './assets/profile_glasses.jpg'
import { Outlet } from "react-router-dom"

const App = () => {
  return (
    <>
      <Navbar />
      <div className="main-content flex flex-row">
        <div className="static-content w-3/12 flex flex-col justify-center align-middle">
          <div className="image m-4">
            <img src={profile} alt="Profile" className="w-52 h-auto p-1" />
          </div>
          <div className="font-semibold text-2xl">Hrushikesh Mohanty</div>
        </div>
        <div className="dynamic-content w-9/12">
          <Outlet />
        </div>
      </div>

    </>
  )
}

export default App