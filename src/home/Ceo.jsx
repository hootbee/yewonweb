import React from "react";
import styled from "styled-components";
import ceoImg from "../img/prof.png";

const Container = styled.div`
  background: #ffffff;
  min-height: 100vh;
  padding: 120px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 900px;
  gap: 40px;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const PhotoBox = styled.div`
  width: min(40%, 400px);
  flex-shrink: 0;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    width: 80%;
    margin-bottom: 30px;
  }
`;

const InfoBox = styled.div`
  flex: 1;
  max-width: 450px;
  color: #1c1c1c;
`;

const NameWrap = styled.div`
  margin-bottom: 40px;
  position: relative;
  display: flex;
  align-items: baseline;
  gap: 12px;
`;

const KoreanName = styled.h1`
  font-size: 44px;
  font-weight: 800;
  color: #1c1c1c;
  z-index: 2;
  position: relative;
`;

const Title = styled.span`
  font-size: 18px;
  color: #0044cc;
  margin-top: 6px;
  font-weight: 1000;
`;

const EnglishName = styled.span`
  position: absolute;
  top: 15px;
  left: 0;
  font-family: "Pacifico", cursive;
  font-size: 80px;
  color: rgba(0, 0, 0, 0.05);
  z-index: 0;
  pointer-events: none;

  @media (max-width: 768px) {
    font-size: 48px;
    top: 40px;
  }
`;

const Section = styled.div`
  margin-bottom: 40px;

  h4 {
    font-size: 20px;
    color: #0044cc;
    margin-bottom: 12px;
    font-weight: 600;
  }

  ul {
    list-style: disc;
    padding-left: 20px;
    font-size: 16px;
    color: #333333;
    line-height: 2;
  }
`;

const CEOProfile = () => {
  return (
    <Container id="ceo">
      <Wrapper>
        <PhotoBox>
          <img src={ceoImg} alt="조재혁 교수" />
        </PhotoBox>

        <InfoBox>
          <NameWrap>
            <EnglishName>Jaehyuk Cho</EnglishName>
            <KoreanName>조재혁</KoreanName>
            <Title>전북대학교 교수</Title>
          </NameWrap>

          <Section>
            <h4>전문 분야</h4>
            <ul>
              <li>AI 기반 질병 예측 및 헬스케어 시스템 연구</li>
              <li>감염병 대응 및 환경 데이터 분석</li>
              <li>SOTA AI 알고리즘 (딥러닝, MAML, XAI, Few-shot 등)</li>
            </ul>
          </Section>

          <Section>
            <h4>주요 경력</h4>
            <ul>
              <li>전북대학교 소프트웨어공학과 교수 (2022~)</li>
              <li>KISTEP 예비타당성조사 PM</li>
              <li>LG CNS IT 솔루션 기술 리더</li>
            </ul>
          </Section>

          <Section>
            <h4>주요 정부 위원회 활동</h4>
            <ul>
              <li>법무부 감염병연구개발사업단 위원</li>
              <li>복지부 의료데이터 중심병원 자문위원</li>
              <li>복지부 인공지능 헬스 자문위원</li>
              <li>과기부 AI 융합선도사업 위원</li>
              <li>환경부 산업데이터 고도화사업 기획위원</li>
              <li>국가감염병데이터플랫폼(ISP) 자문</li>
              <li>NTIS 국가R&D 통합정보시스템 위원</li>
            </ul>
          </Section>
        </InfoBox>
      </Wrapper>
    </Container>
  );
};

export default CEOProfile;