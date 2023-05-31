import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import NewProduct from "./pages/NewProduct";
import Signup from "./pages/Signup";

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="menu" element={<Menu />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<Login />} />
      <Route path="newProduct" element={<NewProduct />} />
      <Route path="signup" element={<Signup />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
