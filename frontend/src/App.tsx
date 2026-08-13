import { MoviesProvider } from "./context/MovieContext";
import { Router } from "./router/Router";



function App() {
  return(
    <MoviesProvider>
      <Router/>
    </MoviesProvider>
  )
}

export default App;
