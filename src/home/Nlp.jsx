import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FiArrowRight } from "react-icons/fi";

const offerings = [
  {
    title: "시계열 데이터 분석",
    description:
      "센서 데이터, 금융 데이터 등 시간 축을 가진 데이터를 예측하거나 이상 탐지하는 AI 모델을 설계합니다.",
  },
  {
    title: "딥러닝 기반 예측 모델",
    description:
      "CNN, RNN, Transformer 등 다양한 딥러닝 아키텍처를 활용하여 복잡한 패턴 인식 및 예측 문제를 해결합니다.",
  },
  {
    title: "멀티모달 학습",
    description:
      "텍스트, 이미지, 음성 등 여러 종류의 데이터를 통합하여 학습하는 복합형 AI 모델을 구축합니다.",
  },
  {
    title: "자연어 처리 (NLP)",
    description:
      "감성 분석, 문서 요약, 개체명 인식 등 자연어 처리 기술을 기반으로 한 다양한 AI 서비스를 제공합니다.",
  },
];

// 애니메이션
const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;

// 전체 배경 + 가운데 정렬
const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(180deg, #010920 0%, #061840 100%);
  color: white;
  padding: 80px 16px;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
`;

// 내부 콘텐츠 폭 제한
const Inner = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 80px;
`;

// 타이틀 섹션
const CenterSection = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const SubTitle = styled.p`
  font-size: 18px;
  color: #d0d0d0;
  margin-bottom: 30px;
`;

// 버튼
const ViewButton = styled.a`
  padding: 10px 20px;
  font-weight: bold;
  border: 1px solid white;
  border-radius: 30px;
  text-decoration: none;
  color: white;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

// 카드 리스트
const CardGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 30px;
  box-sizing: border-box;
`;

// 카드 스타일
const Card = styled.div`
  background: linear-gradient(135deg, #0e3e91, #1b5fe5);
  padding: 20px;
  border-radius: 16px;
  height: 180px;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-6px);
  }
`;

const CardText = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 1.4;
  white-space: pre-line;
`;

const ArrowIcon = styled(FiArrowRight)`
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 20px;
  color: white;
`;

// 팝업
const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  pointer-events: none;
  background: rgba(0, 0, 0, ${({ opacity }) => opacity});
  z-index: -1;
  transition: background 0.2s ease;
`;

const ContentWrapper = styled.div`
  margin-bottom: 200px;
  flex: 1;
`;

const BannerWrapper = styled.div`
  width: 100%;
  /* height: 100%; */
  margin-top: 100px;
  background: transparent;
`;

const BannerTitle = styled.p`
  font: bold 60px "arial";
  color: black;
  text-align: center;
  margin: 50px 20px 0 20px;
  padding-bottom: 10px;

  @media screen and (min-width: 768px) {
    margin: 60px 200px 0 200px;
  }
`;

// ✅ 이미지 중앙 정렬 핵심 부분
const BannerImgWrapper = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const PopupContent = styled.div`
  background: #fff;
  color: black;
  padding: 30px;
  border-radius: 16px;
  width: 90%;
  max-width: 500px;
  animation: ${fadeIn} 0.3s ease;
  position: relative;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 24px;
  position: absolute;
  top: 16px;
  right: 20px;
  cursor: pointer;
`;

// 메인 컴포넌트
const Nlp = () => {
  const [selected, setSelected] = useState(null);

  const handleCardClick = (index) => setSelected(index);
  const handleClose = () => setSelected(null);

  return (
    <Wrapper id="nlp">
      <Inner>
        <CenterSection>
          <Title>Applied AI Fields</Title>
          <SubTitle>AI 기술이 적용되는 다양한 분야를 만나보세요</SubTitle>
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
            <Card key={index} onClick={() => handleCardClick(index)}>
              <ArrowIcon />
              <CardText>{item.title}</CardText>
            </Card>
          ))}
        </CardGrid>

        <PopupOverlay show={selected !== null}>
          <PopupContent>
            <CloseButton onClick={handleClose}>×</CloseButton>
            {selected !== null && (
              <>
                <h2>{offerings[selected].title}</h2>
                <p>{offerings[selected].description}</p>
              </>
            )}
          </PopupContent>
        </PopupOverlay>
      </Inner>
    </Wrapper>
  );
};

export default Nlp;
