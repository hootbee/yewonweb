import React, { useState } from "react";
import styled from "styled-components";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import img1 from "../img/news1.png";
import img2 from "../img/news2.png";

// 뉴스 데이터 배열
const newsList = [
  {
    img: img1,
    title: "조재혁 교수, 국가연구개발사업 우수성과 20선 선정",
    summary:
      "전북대학교 조재혁 교수(공대 소프트웨어공학과)가 다양한 환경유해인자를 동시에 검출할 수 있는 IoT 복합 환경측정기기 개발 기술을 통해 환경 R&D 2024년 국가연구개발사업 우수성과 20선에 선정됐다.",
    link: "https://www.jbnu.ac.kr/web/Board/104793/detailView.do?pageIndex=1&menu=2382",
  },
  {
    img: img2,
    title: "AI로 공기 정화·건강 관리하는 '에어스텔라' 플랫폼",
    summary:
      "전북대 소프트웨어공학과 조재혁 교수 연구팀이 개발한 실내 공기질 및 건강 관리 플랫폼(에어스텔라)이 주목받고 있다. 이 플랫폼은 AI 알고리즘으로 공기질과 관련된 17종 데이터를 수집해 실시간 모니터링한다.",
    link: "https://www.hankyung.com/article/2024111129121",
  },
];

// ==== 스타일 컴포넌트 ====
const Container = styled.div`
  background: linear-gradient(180deg, #0c1b3a 0%, #0a0f23 100%);
  padding: 100px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const SectionTitle = styled.h1`
  font-size: 36px;
  color: #ffffff;
  font-weight: 800;
  margin-bottom: 60px;
  text-align: center;
`;

const SlideWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  ${(props) => (props.left ? "left: -50px;" : "right: -50px;")}
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  padding: 12px;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }

  @media (max-width: 768px) {
    ${(props) => (props.left ? "left: -20px;" : "right: -20px;")}
  }
`;

const ContentWrapper = styled.div`
  background-color: #1c2541;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  padding: 32px 28px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  border-radius: 16px 16px 0 0;
  margin-bottom: 24px;
  object-fit: cover;
  filter: brightness(0.95);
`;

const NewsTitle = styled.h2`
  font-size: 26px;
  text-align: center;
  margin-bottom: 18px;
  font-weight: 700;
  color: #ffffff;
`;

const Summary = styled.p`
  font-size: 16px;
  text-align: center;
  color: #cbd4f4;
  line-height: 1.8;
  margin-bottom: 26px;
`;

const Link = styled.a`
  font-size: 15px;
  color: #66aaff;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;

// ==== 컴포넌트 ====
const News = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? newsList.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === newsList.length - 1 ? 0 : prev + 1));
  };

  const currentNews = newsList[currentIndex];

  return (
    <Container id="news">
      <SectionTitle>NEWS</SectionTitle>
      <SlideWrapper>
        <Arrow left onClick={prev}>
          <FiChevronLeft size={28} color="#ffffff" />
        </Arrow>

        <ContentWrapper>
          <Img src={currentNews.img} alt="뉴스 이미지" />
          <NewsTitle>{currentNews.title}</NewsTitle>
          <Summary>{currentNews.summary}</Summary>
          <Link href={currentNews.link} target="_blank" rel="noopener noreferrer">
            뉴스 보러가기 <FiArrowRight />
          </Link>
        </ContentWrapper>

        <Arrow onClick={next}>
          <FiChevronRight size={28} color="#ffffff" />
        </Arrow>
      </SlideWrapper>
    </Container>
  );
};

export default News;