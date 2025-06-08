//src/components/Menu.jsx

import React from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

const MenuWrapper = styled.div`
  flex: 1;
  max-width: 800px;
  margin: 0px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  a {
    text-decoration: none;
  }

  a:link,
  a:visited {
    color: inherit;
  }

  a:hover {
    color: gray;
  }

  // Menu.jsx
  h5 {
    font-size: 16px; // ✅ 고정 폰트 크기
    padding: 6px 14px;
    font-weight: 600;
    margin: 0;
    border-radius: 12px;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    h5 {
      font-size: 16px; // ✅ 모바일 대응
    }
  }
`;

const Hamburger = styled(GiHamburgerMenu)``;

const Menu = () => {
  return (
    <MenuWrapper>
      <a href="#about">
        <h5>ABOUT</h5>
      </a>

      <a href="#research">
        <h5>RESEARCH</h5>
      </a>

      <a href="#airStellar">
        <h5>PRODUCT</h5>
      </a>

      <a href="#news">
        <h5>NEWS</h5>
      </a>

      <a href="#ceo">
        <h5>CEO</h5>
      </a>

      <a href="#contact">
        <h5>CONTACT</h5>
      </a>
    </MenuWrapper>
  );
};

export default Menu;
