import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./page/Home";
import Shop from "./page/Shop";
import About from "./page/About";
import Latest from "./page/Latest";
import Blog from "./page/Blog";
import Pages from "./page/Pages";
import Contact from "./page/Contact";
import Admin from "./page/Admin";
import Wishlist from "./page/Wishlist";
import Basket from "./page/Basket";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/latest",
          element: <Latest />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/pages",
          element: <Pages />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/admin",
          element: <Admin />,
        },
        {
          path: "/wishlist",
          element: <Wishlist />,
        },
        {
          path: "/basket",
          element: <Basket />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
