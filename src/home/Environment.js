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
  width: 100%;
  box-sizing: border-box;
  padding: 100px 20px 40px;
  color: white;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const CenterSection = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3.2vw;
  font-weight: bold;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const SubTitle = styled.p`
  font-size: 1.2vw;
  margin-top: 10px;
  color: #dcdcdc;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ViewButton = styled.a`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  background: transparent;
  color: white;
  border: 1px solid white;
  border-radius: 30px;
  text-decoration: none;
  display: inline-block;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

/* ✅ 3 + 2 행 구조 */
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
  justify-content: center; /* 가운데 정렬 */
  gap: 50px; /* 카드 간격 통일 */
  flex-wrap: wrap;
`;

const Card = styled.div`
  background: url(${(props) => props.bg}) no-repeat center center / cover;
  border-radius: 16px;
  padding: 16px;
  width: 230px;
  height: 200px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
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
  font-size: 18px;
  font-weight: bold;
  line-height: 1.4;
  white-space: pre-line;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const Environment = () => {
  const topRow = offerings.slice(0, 3);
  const bottomRow = offerings.slice(3);

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

      <CardWrapper>
        <Row>
          {topRow.map((item, index) => (
            <Card key={index} bg={item.bg}>
              <ArrowIcon />
              <CardText>{item.title}</CardText>
            </Card>
          ))}
        </Row>
        <Row>
          {bottomRow.map((item, index) => (
            <Card key={index} bg={item.bg}>
              <ArrowIcon />
              <CardText>{item.title}</CardText>
            </Card>
          ))}
        </Row>
      </CardWrapper>
    </Container>
  );
};

export default Environment;