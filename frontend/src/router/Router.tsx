import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { NotFoundPage } from "../pages/Not-found";

export function Router () {
  return(
    <Routes>
      <Route path="/" element={ <HomePage /> }/>
      <Route path="*" element={ <NotFoundPage /> } />
    </Routes>
  )
}