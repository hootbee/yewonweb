import React from "react";
import styled from "styled-components";
import { FiArrowRight } from "react-icons/fi";
import cardBg from "../img/object.png"; // 카드 배경 이미지

const offerings = [
  {
    title: "IoT 센서를 통한 스마트 시티 구축 및 실시간 제어 시스템 연구",
    bg: cardBg,
  },
  {
    title:
      "교통 및 이동 패턴 예측을 위한\n지리·시간적 LSTM 딥러닝\n프레임워크 개발",
    bg: cardBg,
  },
  {
    title: "AI 기반의 자전거 수요 예측을 통한\n지속 가능한 교통 시스템 구축",
    bg: cardBg,
  },
  {
    title: "딥러닝을 활용한 산불 및\n연기감지 시스템 개발",
    bg: cardBg,
  },
  {
    title: "환경 오염물질의 축매 환원 성능\n예측을 위한 머신러닝 모델 연구",
    bg: cardBg,
  },
];

const Container = styled.div`
  min-height: 100vh;
  padding: 80px 40px;
  color: white;
  position: relative;
`;

const CenterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 60px;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin: 0;
`;

const SubTitle = styled.p`
  font-size: 16px;
  margin-top: 8px;
  color: #dcdcdc;
`;

const ViewButton = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  background: transparent;
  color: white;
  border: 1px solid white;
  border-radius: 30px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 40px;
`;

const Card = styled.div`
  background: url(${(props) => props.bg}) no-repeat center center / cover;
  border-radius: 16px;
  padding: 20px;
  height: 200px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
  cursor: pointer;
  transform: translateY(${(props) => (props.index % 2 === 0 ? "0px" : "30px")});

  &:hover {
    transform: translateY(${(props) => (props.index % 2 === 0 ? "-8px" : "22px")});
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 16px;
    background: rgba(0, 0, 0, 0.4); /* 어두운 오버레이 */
    z-index: 0;
  }
`;

const ArrowIcon = styled(FiArrowRight)`
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 22px;
  color: white;
  z-index: 2;
`;

const CardText = styled.div`
  font-size: 15px;
  font-weight: bold;
  line-height: 1.4;
  white-space: pre-line;
  z-index: 2;
`;

const Environment = () => {
  return (
    <Container id="environmentAI">
      <CenterSection>
        <Title>Smart Environment AI</Title>
        <SubTitle>
          지속 가능한 환경을 위한 인공지능 기반 스마트 기술의 혁신
        </SubTitle>
        <ViewButton
          href="https://scholar.google.co.kr/citations?user=K63R-W0AAAAJ&hl=ko&oi=ao"
          target="_blank"
          rel="noopener noreferrer"
        >
          보러가기 →
        </ViewButton>
      </CenterSection>

      <CardGrid>
        {offerings.map((item, index) => (
          <Card key={index} index={index} bg={item.bg}>
            <ArrowIcon />
            <CardText>{item.title}</CardText>
          </Card>
        ))}
      </CardGrid>
    </Container>
  );
};

export default Environment;