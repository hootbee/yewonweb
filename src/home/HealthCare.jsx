import React, { useState, useEffect } from "react";
import styled from "styled-components";

// 이미지 배열로 관리
import envImg1 from "../img/logo1.png";
import envImg2 from "../img/logo1.png";
import envImg3 from "../img/logo1.png";
import envImg4 from "../img/logo1.png";
import envImg5 from "../img/logo1.png";
import envImg6 from "../img/logo1.png";

const envImgs = [envImg1, envImg2, envImg3, envImg4, envImg5, envImg6];

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
  max-width: 1000px;
  height: 720px;
  margin-left: 0;
`;

const LayeredBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 210px;
  height: 210px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  padding: 20px;
  opacity: 1;
  overflow: hidden;
  transform: ${({ index, active }) =>
    active
      ? `translate(${index * 240}px, ${index * 30}px)`
      : `translate(0, 0)`};
  z-index: ${({ index }) => 10 - index};
  transition: transform 0.8s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const BoxImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 210px;
  height: 210px;
  object-fit: cover;
  z-index: 1;
  opacity: 0.85;
`;

const BoxContent = styled.div`
  position: relative;
  z-index: 2;
  background: rgba(255, 255, 255, 0.85);
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 5px;
  width: 100%;
`;

const SubTitle = styled.p`
  font: bold 18px "arial";
  color: #2b2b2b;
  margin: 10px 0 5px 0;
`;

const SubContent = styled.p`
  font: 500 13px "arial";
  margin: 0;
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
      <ContentWrapper id="news">
        <MainContainer>
          <MainAnimdation>
            <MainTitle>문자 그대로 고정관념에서 벗어나세요.</MainTitle>
            <Content>
              뛰어난 창의력과 혁신적 상상력의 산물인 ebii는 가능성이 무한한,
              세계 최고의 모듈식 전기 자전거 아키텍처를 기반으로 제작되었습니다.
            </Content>
          </MainAnimdation>
        </MainContainer>

        <SubContainer>
          <LayeredBoxWrapper>
            {envImgs.map((img, idx) => (
              <LayeredBox key={idx} index={idx} active={expand}>
                <BoxImage src={img} alt={`환경 ${idx + 1}`} />
                <BoxContent>
                  <SubTitle>환경 {idx + 1}</SubTitle>
                  <SubContent>
                    지능형 차량 제어 상자에는 배터리 팩과 제어 상자를 비롯하여
                    라이딩을 수월하게 해주는 모든 것이 들어 있습니다.
                  </SubContent>
                </BoxContent>
              </LayeredBox>
            ))}
          </LayeredBoxWrapper>
        </SubContainer>

        <SubContainer>
          <SubWrapper2>
            <SubContent2>
              어디든 가야 할 곳으로 데려가도록 설계된 ebii의 경량 폼 팩터가 도시
              이동을 식은 죽 먹기로 만듭니다.
            </SubContent2>
          </SubWrapper2>
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
