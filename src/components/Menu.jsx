import React from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

// ✅ isDark props로 스타일 지정
const MenuWrapper = styled.div`
  flex: 1;
  max-width: 800px;
  margin: 0px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  color: ${({ isDark }) => (isDark ? "white" : "black")}; // ✅ 글씨 색

  a {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    color: ${({ isDark }) => (isDark ? "#ddd" : "gray")}; // 밝기 보정
  }

  h5 {
    font-size: 16px;
    padding: 6px 14px;
    font-weight: 600;
    margin: 0;
    border-radius: 12px;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    h5 {
      font-size: 16px;
    }
  }
`;

const Hamburger = styled(GiHamburgerMenu)`
  font-size: 24px;
  color: ${({ isDark }) => (isDark ? "white" : "black")}; // ✅ 아이콘 색
`;

// ✅ isDark 받는 컴포넌트 정의
const Menu = ({ isDark }) => {
  return (
    <MenuWrapper isDark={isDark}>
      <a href="#about"><h5>ABOUT</h5></a>
      <a href="#research"><h5>RESEARCH</h5></a>
      <a href="#airStellar"><h5>PRODUCT</h5></a>
      <a href="#news"><h5>NEWS</h5></a>
      <a href="#ceo"><h5>CEO</h5></a>
      <a href="#contact"><h5>CONTACT</h5></a>
      <Hamburger isDark={isDark} />
    </MenuWrapper>
  );
};

export default Menu;