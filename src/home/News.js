import React, { useState } from "react";
import styled from "styled-components";
import img1 from "../img/news1.png";
import img2 from "../img/news2.png";

// ===== styled-components =====
const Container = styled.div`
  background-color: #f9fafc;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Button = styled.div`
  margin: 0 15px;
  font: bold 16px "Arial";
  padding: 8px 20px;
  color: ${(props) => (props.active ? "#3366ff" : "#666")};
  border-bottom: 2px solid ${(props) => (props.active ? "#3366ff" : "transparent")};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #3366ff;
    border-bottom: 2px solid #3366ff;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 720px;
  background-color: white;
  border-radius: 12px; /* 둥근 테두리 강화 */
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;
  margin-bottom: 30px;

  &:hover {
    transform: translateY(-5px); /* hover 시 살짝 위로 */
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const NewsTitle = styled.h2`
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
  font-weight: bold;
  color: #222;
`;

const Summary = styled.p`
  font-size: 15px;
  text-align: center;
  color: #444;
  line-height: 1.6;
  margin: 0 10px 20px;
`;

const Link = styled.a`
  font-size: 14px;
  color: #3366ff;
  font-weight: bold;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: border 0.3s ease;

  &:hover {
    border-bottom: 2px solid #3366ff;
  }
`;

// ===== React Component =====
const News = () => {
  const [info, setInfo] = useState(true);

  return (
    <Container id="news">
      <ButtonWrapper>
        <Button onClick={() => setInfo(true)} active={info}>
          뉴스
        </Button>
      </ButtonWrapper>
      {info && (
        <ContentWrapper>
          <Img src={img1} alt="뉴스 이미지" />
          <NewsTitle>조재혁 교수, 국가연구개발사업 우수성과 20선 선정</NewsTitle>
          <Summary>
            전북대학교 조재혁 교수(공대 소프트웨어공학과)가 다양한 환경유해인자를
            동시에 검출할 수 있는 IoT 복합 환경측정기기 개발 기술을 통해 환경
            R&D 2024년 국가연구개발사업 우수성과 20선에 선정됐다.
          </Summary>
          <Link
            href="https://www.jbnu.ac.kr/web/Board/104793/detailView.do?pageIndex=1&menu=2382"
            target="_blank"
            rel="noopener noreferrer"
          >
            뉴스 보러가기
          </Link>
        </ContentWrapper>
      )}

      {info && (
        <ContentWrapper>
          <Img src={img2} alt="뉴스 이미지" />
          <NewsTitle>AI로 공기 정화·건강 관리하는 '에어스텔라' 플랫폼</NewsTitle>
          <Summary>
            전북대 소프트웨어공학과 조재혁 교수 연구팀이 개발한 실내 공기질 및 건강 관리 플랫폼(에어스텔라)이 주목받고 있다. 
            이 플랫폼은 AI 알고리즘으로 공기질과 관련된 17종 데이터를 수집해 실시간 모니터링한다.
          </Summary>
          <Link
            href="https://www.hankyung.com/article/2024111129121"
            target="_blank"
            rel="noopener noreferrer"
          >
            뉴스 보러가기
          </Link>
        </ContentWrapper>
      )}
    </Container>
  );
};

export default News;