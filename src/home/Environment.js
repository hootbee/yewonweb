import React, { useState, useEffect } from "react";
import styled from "styled-components";
import envImg1 from "../img/logo1.png";
import envImg2 from "../img/logo1.png";
import envImg3 from "../img/logo1.png";
import envImg4 from "../img/logo1.png";
import envImg5 from "../img/logo1.png";
import envImg6 from "../img/logo1.png";

const ContentWrapper = styled.div`
  margin: 0 25px;
  @media screen and (min-width: 768px) {
    margin: 0 170px;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 0.5px solid #8e8d8d;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    border: none;
  }
`;

const MainAnimdation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const MainTitle = styled.p`
  font: 400 35px "arial";
  color: #2b2b2b;
  margin: 60px 0 30px 0;
  @media screen and (min-width: 768px) {
    margin: 150px 0;
    flex: 1;
  }
`;

const Content = styled.p`
  font: 500 13px "arial";
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    flex: 1;
    margin: 0;
    padding: 0;
  }
`;

const LayeredBoxWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1400px;
  height: 800px;
`;

const LayeredBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 230px;
  height: 230px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  padding: 10px;
  opacity: 1;
  transform: ${({ index, active }) =>
    active
      ? `translate(${index * 220}px, ${index * 20}px)`
      : `translate(0, 0)`};
  z-index: ${({ index }) => 10 - index};
  transition: transform 1s ease;
`;

const SubTitle = styled.p`
  font: bold 16px "arial";
  color: #2b2b2b;
  margin: 5px 0;
`;

const SubContent = styled.p`
  font: 500 12px "arial";
`;

const SubImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  margin-bottom: 8px;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 60px;
  margin-top: 60px;
  @media screen and (min-width: 768px) {
    justify-content: space-between;
  }
`;

const SubWrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

const SubContent2 = styled.p`
  font: 500 13px "arial";
  margin-top: 30px;
  @media screen and (min-width: 768px) {
    padding-bottom: 70px;
    margin: 0 auto;
  }
`;

const LastContainer = styled.div`
  width: 100%;
  height: 350px;
  background: #4a4a4a;
  display: flex;
  justify-content: center;
`;

const LastWrapper = styled.div`
  width: 90%;
  height: 40px;
  margin-top: 80px;
  padding-bottom: 50px;
  border-bottom: 1px solid white;
  @media screen and (min-width: 768px) {
    width: 70%;
  }
`;

const LastContent = styled.p`
  font: bold 32px "arial";
  color: white;
  margin: 0;
  @media screen and (min-width: 768px) {
    width: 47%;
  }
`;

const envContents = [
  {
    img: envImg1,
    title: "스마트 제어 시스템",
    content: "배터리 팩과 제어 상자를 포함한 통합형 제어 박스.",
  },
  {
    img: envImg2,
    title: "지능형 라이딩 보조",
    content: "AI 기반의 라이딩 모드 전환 및 최적화된 경로 지원.",
  },
  {
    img: envImg3,
    title: "친환경 배터리 팩",
    content: "재활용이 가능한 고효율 리튬 배터리 팩 탑재.",
  },
  {
    img: envImg4,
    title: "모듈형 프레임 디자인",
    content: "다양한 환경에 맞춘 프레임 확장 및 교체 가능.",
  },
  {
    img: envImg5,
    title: "스마트 락 시스템",
    content: "앱 기반 자동 잠금 및 위치 추적 기능 제공.",
  },
  {
    img: envImg6,
    title: "주행 데이터 시각화",
    content: "모바일 앱에서 실시간 라이딩 데이터 확인 가능.",
  },
];

const HealthCare = () => {
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPoint = document.body.scrollHeight * 0.2;
      if (scrollY >= triggerPoint) setExpand(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <ContentWrapper id="environment">
        <MainContainer>
          <MainAnimdation>
            <MainTitle>ENVIRONMENT.</MainTitle>
            <Content>
              뛰어난 창의력과 혁신적 상상력의 산물인 ebii는 가능성이 무한한,
              세계 최고의 모듈식 전기 자전거 아키텍처를 기반으로 제작되었습니다.
            </Content>
          </MainAnimdation>
        </MainContainer>

        <SubContainer>
          <LayeredBoxWrapper>
            {envContents.map((item, idx) => (
              <LayeredBox key={idx} index={idx} active={expand}>
                <SubImage src={item.img} alt={item.title} />
                <SubTitle>{item.title}</SubTitle>
                <SubContent>{item.content}</SubContent>
          </LayeredBox>
        ))}
          </LayeredBoxWrapper>
        </SubContainer>
      </ContentWrapper>

      <LastContainer>
        <LastWrapper>
          <LastContent>
            모든 라이딩을 진정으로 나만의 것으로 만드는 스마트 기능.
          </LastContent>
        </LastWrapper>
      </LastContainer>
    </>
  );
};

export default HealthCare;
