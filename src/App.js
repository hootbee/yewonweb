import React from "react";
import Header from "./components/Header";
import Home from "./menu/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

// 스크롤 부드럽게 설정
const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
`;

// Header 높이만큼 여백을 줘서 본문이 가려지지 않도록 함
const MainWrapper = styled.div`
  padding-top: 60px;
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainWrapper>
        <RouterProvider router={router} />
      </MainWrapper>
      <Footer />
    </>
  );
};

export default App;
