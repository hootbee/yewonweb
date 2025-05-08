//src/App.js

import React from "react";
import Header from "./components/Header";
import Home from "./menu/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import { createGlobalStyle } from "styled-components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header></Header>
      <RouterProvider router={router} />
      <Footer></Footer>
    </>
  );
};

export default App;
