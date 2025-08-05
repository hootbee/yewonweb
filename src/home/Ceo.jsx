import React from "react";
import styled from "styled-components";
import ceoImg from "../img/prof.png";

const Container = styled.div`
  background: #ffffff;
  min-height: 100vh;
  padding: 40px 20px;
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
  margin-top: 40px;

  img {
    width: 100%;
    height: auto;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    width: 80%;
    margin-top: 20px;
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
  scroll-margin-top: 80px;
  height: 0;
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
              <li>숭실대학교 전자정보공학부 교수 및 자율데이터사업단장(2019~2022)</li>
              <li>KISTEP 국가R&D PM (2003~2021)</li>
              <li>LG CNS 기술리더 (2002~2003)</li>
            </ul>
          </Section>

          <Section>
            <h4>주요 활동</h4>
            <ul>
              <li>(現) 범부처방역연계감염병연구개발 비상임위원(복지부)</li>
              <li>(現) 의료데이터 중심병원 사업조정위원(복지부)</li>
              <li>(現) 국립재활원 인공지능 분야 자문위원(복지부)</li>
              <li>인공지능첨단유망/인공지능융합선도사업 위원(과기부)</li>
              <li>환경보건빅데이터구축 활용 고도화사업 기획위원(환경부)</li>
              <li>과학기술부 인공지능 자문위원, 산업통상자원부 AI 반도체, 산업정보지능화 사업 자문위원 </li>
              <li>국가연구개발사업 국가과학기술 지식정보서비스(NTIS) 구축 및 운영(과기부)</li>
              <li>국가연구개발사업 빅데이터 플랫폼 구축을 위한 정보화전략계획(ISP) 수립</li>
            </ul>
          </Section>
        </InfoBox>
      </Wrapper>
    </Container>
  );
};

export default CEOProfile;