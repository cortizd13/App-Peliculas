import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { NotFoundPage } from "../pages/Not-found";
import { MainLayout } from "../layout/MainLayout";

export const router = createBrowserRouter([
  {path: '/', element:<MainLayout/>, children: [
    {index: true, element:  < HomePage />},
    {path: '*', element: <NotFoundPage/>}
  ]
}])