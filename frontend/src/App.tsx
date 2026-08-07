import { MoviesProvider } from "./context/MovieContext";
import { HomePage } from "./pages/Home";



function App() {
  return(
    <MoviesProvider>
      <HomePage/>
    </MoviesProvider>
  )
}

export default App;
