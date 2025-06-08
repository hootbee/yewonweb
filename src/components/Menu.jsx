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

  h5 {
    font-size: 16px; // ✅ 원하는 크기로 조절 (기본 h5는 0.83em ≒ 13.3px)
    margin: 0;
    font-weight: 600;
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
