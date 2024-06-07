import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './pages/Home.jsx';
import Error from './pages/Error.jsx'
import Queue from "./pages/Queue.jsx"
import MyQueue from "./pages/MyQueue.jsx";
import Admin from "./pages/Admin.jsx";
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import {MyContext} from './context/MyContext.jsx';
import Help from './pages/Help.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/add-queue",
    element: <Queue />,
  },
  {
    path: "/my-queue",
    element: <MyQueue />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/how-it-work",
    element: <Help/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <MyContext>
      <RouterProvider router={router} />
    </MyContext>
);
