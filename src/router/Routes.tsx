import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout.jsx/MainLayout";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import AboutUs from "../pages/about-us/AboutUs";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            index : true,
            element : <Home></Home> 
        },
        {
            path : "/product",
            element : <Products></Products>
        },
        {
            path : "/about-us",
            element : <AboutUs></AboutUs>
        }
      ]
    },
  ]);