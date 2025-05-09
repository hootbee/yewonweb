//src/components/Header.jsx

import React from "react";
import styled from "styled-components";
import logo from "../img/logo.png";
import Menu from "./Menu";

const HeaderWrapper = styled.div`
  position: fixed; /* 고정 위치 */
  top: 0;
  left: 0;
  z-index: 1000; /* 다른 요소보다 위에 표시 */
  width: 100%;
  height: 60px;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 선택: 그림자 효과 */
`;

const Logo = styled.img`
  padding: 0;
  margin: 0;
  margin-left: 20px;
  height: 60px;
  width: 80px;
  margin-top: 5px;
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
