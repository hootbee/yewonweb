// src/components/Footer.jsx
import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  width: 100%;
  box-sizing: border-box;
  background-color: #2c2c2c;
  color: white;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 100px;
`;

const FooterTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const FooterText = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
`;

const FooterLink = styled.a`
  color: #ccc;
  text-decoration: none;
  font-size: 14px;
  margin-top: 10px;
  &:hover {
    color: white;
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper id="contact">
      <FooterTitle>문의하기</FooterTitle>
      <FooterText>이메일: hello@jbnu.ac.kr</FooterText>
      <FooterText>전화: 063-123-4567</FooterText>
      <FooterText>서울특별시 성북구 미래로 101</FooterText>
    </FooterWrapper>
  );
};

export default Footer;
