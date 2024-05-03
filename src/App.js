import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/ResturantDeails";
import Login from "./components/Login"; 
import Profile from "./components/profile";
import Shimmer from "./components/Shimmer";


const InstaMart = lazy(()=> import("./components/InstaMart"));
const About = lazy(()=>import("./components/About"));

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
      path: "/",
      element: <AppLayout />,
      children: [
          {
              path: "/",
              element: <Body />
          },
          {
              path: "/about",
              element: <Suspense><About /></Suspense>,
              children: [{
                path: "profile",
                element: <Profile/>
              }]
          },
          {
              path: "/contact",
              element: <Contact />
          },
          {
              path: "/restaurant/:resId",
              element: <RestaurantMenu />,
          },
          {
            path: "/instamart",
            element: <Suspense fallback={<Shimmer/>}><InstaMart /></Suspense>,
        },
      ],
      errorElement: <Error />
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
