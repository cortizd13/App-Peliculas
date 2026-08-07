
import { Footer } from "../components/Footer";
import { GridMovie } from "../components/GridMovie";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";



export function HomePage () {


  return(
    <body className="bg-black">
      <Navbar />
      <HeroSection/>
      <GridMovie/>
      <Footer/>
    </body>
  )
}