import React, { useState, useEffect } from "react";
import styled from "styled-components";
import digitalBrain from "../img/digital_brain.png";

// 전체 배경 및 중앙 정렬
const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(180deg, #010920 0%, #061840 100%);
  color: white;
  padding: 100px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

// 내부 레이아웃
const Inner = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

// 왼쪽 설명 텍스트
const LeftContent = styled.div`
  flex: 1;
  min-width: 300px;
  padding-right: 20px;
  transition: opacity 0.5s ease, transform 0.5s ease;
`;

const Title = styled.h2`
  position: relative;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 16px;
  `;

const DescriptionBlock = styled.div`
  font-size: 18px;
  line-height: 1.6;
  color: #e0e0e0;
`;

const SectionTitle = styled.h4`
  font-size: 22px;
  font-weight: bold;
  color: #ffffff;
  margin: 16px 0 8px;
`;

const Ul = styled.ul`
  padding-left: 24px;
  margin-bottom: 12px;
  list-style-type: disc;

  li {
    margin-bottom: 6px;
    text-indent: -10px;
    padding-left: 10px;
  }
`;

// 원형 영역 및 중심 이미지
const CircleContainer = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  margin-top: 35px;
  transform: translateX(-60px);

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px dashed rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    top: 0;
    left: 0;
  }
`;

const CenterImage = styled.img`
  width: 300px;              // ✔ 기존 200px → 확대
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  pointer-events: none;
  border-radius: 50%;        // ✔ 부드러운 가장자리
  transition: all 0.3s ease;
`;

const RotatingGroup = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transform: ${({ $rotateDeg }) => `rotate(${$rotateDeg}deg)`};
  transform-origin: center center;
  transition: transform 1.2s ease-in-out;
`;

const Dot = styled.div`
  position: absolute;
  width: ${({ $active }) => ($active ? "18px" : "8px")};
  height: ${({ $active }) => ($active ? "18px" : "8px")};
  background: ${({ $active }) => ($active ? "#3da5ff" : "#ffffff88")};
  border: ${({ $active }) => ($active ? "4px solid #3da5ff" : "none")};
  border-radius: 50%;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  transform: translate(-50%, -50%);
  transition: all 0.3s ease;
  box-shadow: ${({ $active }) =>
    $active ? "0 0 10px rgba(61, 165, 255, 0.6)" : "none"};
`;

const DotLabel = styled.div`
  position: absolute;
  color: white;
  transform: translate(-50%, -50%);
  text-align: center;
  white-space: pre-line;
  word-break: keep-all;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  transition: all 0.3s ease;
  font-size: ${({ $isActive }) => ($isActive ? "24px" : "18px")};
  font-weight: ${({ $isActive }) => ($isActive ? "bold" : "normal")};
`;

const offerings = [
  {
    title: "NLP\n&\n sLLM",
    skills: [
      "BERT, BiLSTM, Transformer 등",
      "최신 딥러닝 모델을 활용한 자연어 처리",
    ],
    applications: [
      "SLM 기반의 의료 진단 보고서 분석",
      "이미지와 텍스트 결합을 통한 정보 추출",
      "대규모 텍스트 데이터 분석 및 분류",
    ],
    top: "400px",
    left: "200px",
    labelTop: "450px",
    labelLeft: "200px",
  },
  {
    title: "Deep Learning\n& Machine Learning",
    skills: [
      "전이 학습과 Learning Without Forgetting(LwF), COVID-19 진단",
      "다양한 상황에서 머신러닝 최적화 및 자율 시스템",
    ],
    applications: [
      "의료 영상 분석, 질병 예측 및 진단, 병원에서의 AI",
      "스마트 헬스케어 및 원격 진료 시스템",
      "스마트 시티 및 자율 시스템",
    ],
    top: "200px",
    left: "400px",
    labelTop: "200px",
    labelLeft: "460px",
  },
  {
    title: "Time Series\nData",
    skills: [
      "PatchTST / TimeLLM",
      "LSTM/BiLSTM",
      "Self-supervised learning",
      "Multivariate Time Series Analysis"],
    applications: [
      "환경 데이터 분석",
      "웨어러블 디바이스로 수집된 건강 데이터의 예측 분석",
    ],
    top: "0px",
    left: "200px",
    labelTop: "-60px",
    labelLeft: "200px",
  },
  {
    title: "AI Agent\n&\nMultimodal",
    skills: [
      "협동로봇 통합 제어 에이전트 설계", 
      "품질 검사 및 예측을 위한 AI 기반 시각 인식 알고리즘", 
      "예외 상황 탐지를 위한 멀티모달 이상 탐지 알고리즘", 
      "전문가 피드백 반영 기반 모델 튜닝 및 성능 최적화"],
    applications: [
      "영상, 텍스트, 시계열, 센서 등 다양한 멀티모달 데이터 기반 통합 판단",
      "제조 설비 환경에서의 협동로봇 품질 검사 및 예측",
      "테스트 환경 구축 및 이상 상황 감지 자동화",
      "실데이터 기반의 시스템 안정성 평가 및 연동 구조 점검",
    ],
    top: "200px",
    left: "0px",
    labelTop: "200px",
    labelLeft: "-70px",
  },
];

const NlpCircular = () => {
  const [rotateDeg, setRotateDeg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotateDeg((prev) => prev + 90);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const westIndexMap = [3, 0, 1, 2];
  const currentIndex = westIndexMap[(rotateDeg / 90) % 4];
  const current = offerings[currentIndex];

  return (
    <Wrapper id="research">
      <Inner>
        <LeftContent>
          <Title>{current.title}</Title>
          <DescriptionBlock>
            <SectionTitle>주요 기술</SectionTitle>
            <Ul>
              {current.skills.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </Ul>
            <SectionTitle>응용 분야</SectionTitle>
            <Ul>
              {current.applications.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </Ul>
          </DescriptionBlock>
        </LeftContent>
<CircleContainer>
  <RotatingGroup $rotateDeg={rotateDeg}>
    {offerings.map((item, idx) => (
      <React.Fragment key={idx}>
        <Dot
          top={item.top}
          left={item.left}
          $active={currentIndex === idx}
        />
        <DotLabel
          top={item.labelTop}
          left={item.labelLeft}
          $isActive={currentIndex === idx}
          style={{
            transform: `translate(-50%, -50%) rotate(${-rotateDeg}deg)`,
          }}
        >
          {item.title}
        </DotLabel>
      </React.Fragment>
    ))}
  </RotatingGroup>
  <CenterImage src={digitalBrain} alt="Digital Brain" />
</CircleContainer>
      </Inner>
    </Wrapper>
  );
};

export default NlpCircular;