import React from "react";
import styled from "styled-components";
import ceoImage from "../img/ceo_image.png";

// ===== Styled Components =====
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-center;
  justify-content: center;
  padding: 50px 20px;
  background-color: #f9fafc; /* ✅ 부드러운 배경색 */

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Content = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 600px;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
`;

const Photo = styled.div`
  flex: 0 0 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  img {
    width: 260px;
    height: auto;
    border-radius: 16px; /* ✅ 부드러운 테두리 */
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Role = styled.h3`
  font-size: 18px;
  color: #777;
  margin-bottom: 5px;
`;

const Name = styled.h1`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const InfoSection = styled.div`
  margin-bottom: 30px;

  h4 {
    font-size: 20px;
    margin-bottom: 10px;
    color: #333;
  }

  ul {
    list-style-type: disc;
    padding-left: 20px;
    color: #444;
    line-height: 1.7;
    font-size: 16px;
  }
`;

// ===== Component =====
const RepresentativeIntro = () => {
  return (
    <Container>
      <Content>
        <Role>대표이사</Role>
        <Name>조재혁</Name>

        <InfoSection>
          <h4>경 력</h4>
          <ul>
            <li>전북대학교 소프트웨어공학과 교수 (2022~)</li>
            <li>숭실대학교 AI데이터연구센터장 (2019~2022)</li>
            <li>KISTEP 국가R&D PM (2003~2019)</li>
            <li>LG CNS 기술리더 (2002~2003)</li>
          </ul>
        </InfoSection>

        <InfoSection>
          <h4>주요 활동</h4>
          <ul>
            <li>보건복지부 GFID 위원장</li>
            <li>산업부 AI 반도체·센서 R&D 위원장</li>
            <li>과기정통부 패키지 AI 위원장</li>
            <li>스마트시티/SBAS 위원 (국토부)</li>
            <li>2024 환경 R&D 우수성과 20선 선정</li>
          </ul>
        </InfoSection>
      </Content>
      <Photo>
        <img src={ceoImage} alt="대표 사진" />
      </Photo>
    </Container>
  );
};

export default RepresentativeIntro;