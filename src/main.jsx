import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ClerkProvider } from "@clerk/clerk-react";
import Signin from "./pages/Signin.jsx";
import Home from "./pages/Home.jsx";
import Dash from "./pages/Dash.jsx";
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  {
    element: <App></App>,
    children: [
      {
        path: "/dash",
        element: <Dash></Dash>,
      },
    ],
  },
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/sign",
    element: <Signin></Signin>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>
);
