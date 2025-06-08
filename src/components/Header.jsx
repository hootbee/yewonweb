//src/components/Header.jsx

import React from "react";
import styled from "styled-components";
import logo from "../img/logo.png";
import Menu from "./Menu";

// Header.jsx
const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: clamp(60px, 8vh, 90px); // ✅ 작은 화면에서도 높이 확보
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

const Logo = styled.img`
  height: clamp(40px, 8vh, 60px); // ✅ 로고도 반응형으로
  width: auto;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <a href="/">
        <Logo src={logo} />
      </a>
      <Menu />
    </HeaderWrapper>
  );
};

export default Header;
