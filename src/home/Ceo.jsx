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
  max-width: 900px;      // ✅ 딱 중간 크기
  gap: 40px;             // ✅ 간격 줄이기
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
  max-width: 450px;     // ✅ 너무 넓지 않게 제한
  color: #1c1c1c;
  padding-left: 0;

  @media (max-width: 768px) {
    padding-left: 0;
  }
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
          <img src={ceoImg} alt="조재혁 대표" />
        </PhotoBox>

        <InfoBox>
          <NameWrap>
            <EnglishName>Jaehyuk Cho</EnglishName>
            <KoreanName>조재혁</KoreanName>
            <Title>대표이사</Title>
          </NameWrap>

          <Section>
            <h4>경력</h4>
            <ul>
              <li>전북대학교 소프트웨어공학과 교수 (2022~)</li>
              <li>숭실대학교 AI데이터연구센터장 (2019~2022)</li>
              <li>KISTEP 국가R&D PM (2003~2019)</li>
              <li>LG CNS 기술리더 (2002~2003)</li>
            </ul>
          </Section>

          <Section>
            <h4>주요 활동</h4>
            <ul>
              <li>보건복지부 GFID 위원장</li>
              <li>산업부 AI 반도체·센서 R&D 위원장</li>
              <li>과기정통부 패키지 AI 위원장</li>
              <li>스마트시티/SBAS 위원 (국토부)</li>
              <li>2024 환경 R&D 우수성과 20선 선정</li>
            </ul>
          </Section>
        </InfoBox>
      </Wrapper>
    </Container>
  );
};

export default CEOProfile;