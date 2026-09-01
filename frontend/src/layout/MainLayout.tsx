import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";


export function MainLayout () {
  return(
    <div className="app">
      <Navbar/>
      <Outlet />
      <Footer/>
    </div>
  )
}