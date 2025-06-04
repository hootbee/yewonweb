// src/menu/Home.jsx
import React from "react";
import About from "../home/About";
import Gradation from "../home/Gradation";
import Footer from "../components/Footer";
import styled from "styled-components";

// 스크롤 스냅 적용을 위한 전체 컨테이너
const ScrollSnapContainer = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
  scroll-behavior: smooth;
`;

// 개별 섹션
const SnapSection = styled.section`
  scroll-snap-align: start;
  min-height: 100vh;
  width: 100%;
`;

const Home = () => {
  return (
    <ScrollSnapContainer>
      <SnapSection>
        <About />
      </SnapSection>
      <SnapSection>
        <Gradation />
      </SnapSection>
      {/* <SnapSection>
        <Footer />
      </SnapSection> */}
    </ScrollSnapContainer>
  );
};

export default Home;
