import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./pages/App";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Gallery from "./components/dashboard/Gallery";
import UserProvider from "./context/UserContext";
import Dashboard from "./pages/dashboard/Dashboard";
import Profile from "./components/dashboard/Profile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/gallery",
        element: <Gallery />,
      },
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
