//src/components/Menu.jsx

import React from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

const MenuWrapper = styled.div`
  flex: 1;
  max-width: 800px;
  margin: 0px 10px 0px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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
`;

const Hamburger = styled(GiHamburgerMenu)``;

const Menu = () => {
  return (
    <MenuWrapper>
      <a href="#about">
        <h5>ABOUT</h5>
      </a>

      <a href="#healthCare">
        <h5>HEALTH CARE</h5>
      </a>

      <a href="#environment">
        <h5>ENVIRONMENTAL</h5>
      </a>

      <a href="#nlp">
        <h5>NLP</h5>
      </a>

      <a href="#contact">
        <h5>CONTACT</h5>
      </a>
    </MenuWrapper>
  );
};

export default Menu;
