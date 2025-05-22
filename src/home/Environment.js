import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FiArrowRight } from "react-icons/fi";

const offerings = [
  {
    title: "IoT 센서를 통한 스마트 시티 구축 및 실시간 제어 시스템 연구",
  },
  {
    title:
      "교통 및 이동 패턴 예측을 위한\n지리·시간적 LSTM 딥러닝\n프레임워크 개발",
  },
  {
    title: "AI 기반의 자전거 수요 예측을 통한\n지속 가능한 교통 시스템 구축",
  },
  {
    title: "딥러닝을 활용한 산불 및 \n연기감지 시스템 개발",
  },
  {
    title: "환경 오염물질의 축매 환원 성능\n예측을 위한 머신러닝 모델 연구",
  },
];

const Container = styled.div`
  /* background: linear-gradient(180deg, #010920 0%, #061840 100%); */
  min-height: 100vh;
  padding: 80px 40px;
  color: white;
  position: relative;
`;

const HeaderSection = styled.div`
  margin-bottom: 60px;
  text-align: center;
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

const ViewButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  background: transparent;
  color: white;
  border: 1px solid white;
  border-radius: 30px;
  cursor: pointer;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 40px;
`;

const Card = styled.div`
  background: linear-gradient(135deg, #0e3e91, #1b5fe5);
  border-radius: 16px;
  padding: 20px;
  height: 180px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  cursor: pointer;
  transform: translateY(${(props) => (props.index % 2 === 0 ? "0px" : "30px")});

  &:hover {
    transform: translateY(
      ${(props) => (props.index % 2 === 0 ? "-8px" : "22px")}
    );
  }
`;

const ArrowIcon = styled(FiArrowRight)`
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 20px;
  color: white;
`;

const CardText = styled.div`
  font-size: 15px;
  font-weight: bold;
  line-height: 1.4;
  white-space: pre-line;
`;

const Environment = () => {
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPoint = document.body.scrollHeight * 0.15;
      if (scrollY >= triggerPoint) setExpand(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>
      <HeaderSection>
        <Title>Smart Environment AI</Title>
        <SubTitle>
          지속 가능한 환경을 위한 인공지능 기반 스마트 기술의 혁신
        </SubTitle>
        <ViewButton>보러가기 →</ViewButton>
      </HeaderSection>

      <CardGrid>
        {offerings.map((item, index) => (
          <Card key={index} index={index}>
            <ArrowIcon />
            <CardText>{item.title}</CardText>
          </Card>
        ))}
      </CardGrid>
    </Container>
  );
};

export default Environment;
