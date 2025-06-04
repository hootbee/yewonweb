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
  overflow-x: hidden;
  word-break: break-word;
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
      <FooterText>Email. humanai.plus@gmail.com</FooterText>
      <FooterText>Tel. 063-270-4771</FooterText>
      <FooterText>Address. 전라북도 전주시 덕진구 백제대로 567 전북대학교 공학5호관 504-2호</FooterText>
    </FooterWrapper>
  );
};

export default Footer;
