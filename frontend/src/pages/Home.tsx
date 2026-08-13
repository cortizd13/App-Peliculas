
import { Footer } from "../components/Footer";
import { GridMovie } from "../components/GridMovie";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";



export function HomePage () {


  return(
    <div className="bg-black min-h-screen">
      <Navbar />
      <HeroSection/>
      <GridMovie/>
      <Footer/>
    </div>
  )
}