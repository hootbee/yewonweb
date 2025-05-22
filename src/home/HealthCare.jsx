import React from "react";
import styled from "styled-components";
import { FiArrowRight } from "react-icons/fi";
import cardBg from "../img/object.png"; // 실제 이미지 경로로 변경하세요

const offerings = [
  {
    title: "주요 질병 진단 및 예측을 위한\nAI 알고리즘 개발",
    bg: cardBg,
  },
  {
    title: "의료영상(MRI/CT) 기반 진단\n알고리즘 정밀도 향상",
    bg: cardBg,
  },
  {
    title: "정밀의학 연구를 위한\n빅데이터·AI 기반 분석 기술",
    bg: cardBg,
  },
  {
    title: "피부질환 진단을 위한\n딥러닝 기반 메커니즘 모델 구축",
    bg: cardBg,
  },
  {
    title: "COVID-19 조기 진단을 위한\n전이 학습 기반 모델 적용",
    bg: cardBg,
  },
];

const Container = styled.div`
  background: linear-gradient(180deg, #010920 0%, #061840 100%);
  min-height: 100vh;
  padding: 80px 40px;
  color: white;
  position: relative;
`;

const LeftSection = styled.div`
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
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  cursor: pointer;
  transform: translateY(${(props) => (props.index % 2 === 0 ? "0px" : "30px")});

  &:hover {
    transform: translateY(${(props) => (props.index % 2 === 0 ? "-8px" : "22px")});
  }
`;

const ArrowIcon = styled(FiArrowRight)`
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 22px;
  color: white;
`;

const CardText = styled.div`
  font-size: 15px;
  font-weight: bold;
  line-height: 1.4;
  white-space: pre-line;
  z-index: 1;
`;

const MedicalAi = () => {
  return (
    <Container>
      <LeftSection>
        <Title>Medical AI Innovation</Title>
        <SubTitle>의료 현장을 혁신하는 인공지능 솔루션</SubTitle>
        <ViewButton
          href="https://scholar.google.co.kr/citations?user=K63R-W0AAAAJ&hl=ko&oi=ao"
          target="_blank"
          rel="noopener noreferrer"
        >
          보러가기 →
        </ViewButton>
      </LeftSection>

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

export default MedicalAi;