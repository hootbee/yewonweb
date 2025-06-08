import React, { useState } from "react";
import styled from "styled-components";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import img1 from "../img/news1.png";
import img2 from "../img/news2.png";

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

// 스타일 컴포넌트
const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  background: #ffffff;
  padding: 60px 16px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const SectionTitle = styled.h1`
  font-size: 2.5vw;
  font-weight: 800;
  color: #1c1c1c;
  margin-bottom: 40px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const SlideWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 680px;
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  ${(props) => (props.left ? "left: -40px;" : "right: -40px;")}
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    ${(props) => (props.left ? "left: -20px;" : "right: -20px;")}
  }
`;

const ContentWrapper = styled.div`
  background-color: #f2f2f2;
  border-radius: 16px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  max-height: 260px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 18px;
`;

const NewsTitle = styled.h2`
  font-size: 1.6vw;
  font-weight: 700;
  color: #222222;
  margin-bottom: 12px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Summary = styled.p`
  font-size: 1vw;
  color: #555555;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 22px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const Link = styled.a`
  font-size: 1vw;
  font-weight: bold;
  color: #3366cc;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const Anchor = styled.div`
  scroll-margin-top: 80px; // 헤더 높이 + 여유
  height: 0; // 높이를 0으로 설정하여 공간 차지하지 않도록 함
`;

// 컴포넌트
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
    <Anchor id="news">
      <Container>
        <SectionTitle>NEWS</SectionTitle>
        <SlideWrapper>
          <Arrow left onClick={prev}>
            <FiChevronLeft size={24} color="#000" />
          </Arrow>

          <ContentWrapper>
            <Img src={currentNews.img} alt="뉴스 이미지" />
            <NewsTitle>{currentNews.title}</NewsTitle>
            <Summary>{currentNews.summary}</Summary>
            <Link
              href={currentNews.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              뉴스 보러가기 <FiArrowRight />
            </Link>
          </ContentWrapper>

          <Arrow onClick={next}>
            <FiChevronRight size={24} color="#000" />
          </Arrow>
        </SlideWrapper>
      </Container>
    </Anchor>
  );
};

export default News;
