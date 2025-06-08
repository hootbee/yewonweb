import React from "react";
import styled from "styled-components";
import ceoImg from "../img/prof.png";

const Container = styled.div`
  background: #ffffff;
  min-height: 100vh;
  padding: 80px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  max-width: 1100px;
  gap: 48px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
`;

const PhotoBox = styled.div`
  width: 40%;
  max-width: 400px;

  img {
    width: 100%;
    height: auto;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const InfoBox = styled.div`
  flex: 1;
  color: #1c1c1c;
  max-width: 600px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const NameWrap = styled.div`
  margin-bottom: 40px;
  position: relative;
  display: flex;
  align-items: baseline;
  gap: 12px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }
`;

const KoreanName = styled.h1`
  font-size: 44px;
  font-weight: 800;
  z-index: 2;
  position: relative;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Title = styled.span`
  font-size: 18px;
  color: #0044cc;
  font-weight: 1000;

  @media (max-width: 768px) {
    font-size: 16px;
  }
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
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
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

    @media (max-width: 768px) {
      padding-left: 0;
      list-style: none;
    }
  }
`;

const Anchor = styled.div`
  scroll-margin-top: 80px; // 헤더 높이 + 여유
  height: 0; // 높이를 0으로 설정하여 공간 차지하지 않도록 함
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
