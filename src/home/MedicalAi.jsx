import React from "react";
import styled from "styled-components";
import { FiArrowRight } from "react-icons/fi";
import cardBg from "../img/object.png"; // 실제 이미지 경로

// 카드 콘텐츠
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

// 전체 컨테이너 (스크롤스냅용 섹션에 맞춤)
const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  padding: 100px 20px 0px;
  color: white;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
`;

// 중앙 제목 영역
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

// 카드 그리드 영역
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`;

// 카드 단위
const Card = styled.div`
  background: url(${(props) => props.bg}) no-repeat center center / cover;
  border-radius: 16px;
  padding: 16px;
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
  font-size: 20px;
  color: white;
`;

const CardText = styled.div`
  font-size: 14px;
  font-weight: bold;
  line-height: 1.5;
  white-space: pre-line;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const MedicalAi = () => {
  return (
    <Container id="healthCare">
      <CenterSection>
        <Title>Medical AI Innovation</Title>
        <SubTitle>의료 현장을 혁신하는 인공지능 솔루션</SubTitle>
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
          <Card key={index} bg={item.bg}>
            <ArrowIcon />
            <CardText>{item.title}</CardText>
          </Card>
        ))}
      </CardGrid>
    </Container>
  );
};

export default MedicalAi;
