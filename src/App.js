import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
// import Grocery from "./components/Grocery";

//Lazy Loading of Grocery 
const Grocery = lazy(() => import('./components/Grocery'));

const AppLayout = () => { 
  return (
    <div className="app">
      <Header />
      <Outlet />
{/* Outlet shows header + chilren */}
    </div>
  );
};

const appRouter =  createBrowserRouter([
  {
path: "/",
element: <AppLayout />,
children: [
   {
path: "/",
element: <Body />
  },
  {
    path: "/grocery",
    element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
  },
 {
path: "/about",
element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  },
   {
    path: "restaurants/:resId",
    element: <RestaurantMenu />
  }
],
errorElement: <Error />
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter}/>);
