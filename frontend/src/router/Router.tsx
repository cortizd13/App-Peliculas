import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { NotFoundPage } from "../pages/Not-found";
import { MainLayout } from "../layout/MainLayout";
import { RegisterPage } from "../pages/RegisterPage";
import { MovieDetails } from "../pages/MovieDetails";
import { LoginPage } from "../pages/LoginPage";

export const router = createBrowserRouter([
  {path: '/', element:<MainLayout/>, children: [
    {index: true, element:  < HomePage />},
    {path: '*', element: <NotFoundPage/>},
    {path:'register', element: <RegisterPage/>},
    {path:'login', element: <LoginPage/>},
    {path:'/movies/:id', element: <MovieDetails/>}
  ]
}])