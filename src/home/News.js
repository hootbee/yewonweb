import React, { useState } from "react";
import styled from "styled-components";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import img1 from "../img/news1.png";
import img2 from "../img/news2.png";
import img3 from "../img/news3.png";

const newsList = [
      {
    img: img2,
    title: "AI로 공기 정화·건강 관리하는 '에어스텔라' 플랫폼",
    summary: "전북대 소프트웨어공학과 조재혁 교수 연구팀이...",
    link: "https://www.hankyung.com/article/2024111129121",
  },
  {
    img: img3,
    title: "전북대 조재혁 교수팀, ‘감염병 대응 AI 시스템’ 개발 본격화",
    summary: "국내 최초로 감염병 대응에 특화된 소형 언어모델(sLLM) 및 예측·데이터 통합 플랫폼 개발에 착수",
    link: "https://www.jjan.kr/article/20250611580238",
  },
  {
    img: img1,
    title: "조재혁 교수, 국가연구개발사업 우수성과 20선 선정",
    summary: "전북대학교 조재혁 교수(공대 소프트웨어공학과)...",
    link: "https://www.jbnu.ac.kr/web/Board/104793/detailView.do?pageIndex=1&menu=2382",
  },


];

// ===== Styled Components =====
const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background: #ffffff;
  padding: 60px 16px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  max-width: 820px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.left ? "left: -80px;" : "right: -80px;")}
  background: #000;
  color: #fff;
  padding: 12px 14px;
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    background: #1c1c1c;
  }

  @media (max-width: 768px) {
    ${(props) => (props.left ? "left: -40px;" : "right: -40px;")}
  }
`;

const CardsContainer = styled.div`
  position: relative;
  width: 640px;
  height: 480px;
`;

const Card = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transition: all 0.5s ease;
  opacity: ${(props) =>
    props.isCurrent ? 1 : props.isNext || props.isPrev ? 0.3 : 0};
  transform: ${(props) =>
    props.isCurrent
      ? "translateX(0%) scale(1)"
      : props.isNext
      ? "translateX(35%) scale(0.9)"
      : props.isPrev
      ? "translateX(-35%) scale(0.9)"
      : "translateX(0%)"};
  filter: ${(props) => (props.isNext || props.isPrev ? "blur(3px)" : "none")};
  z-index: ${(props) => (props.isCurrent ? 2 : 1)};
  pointer-events: ${(props) => (props.isCurrent ? "auto" : "none")};
`;

const ContentWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const Img = styled.img`
  width: 100%;
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

const DotsWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 10px;
  justify-content: center;
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#f97316" : "#ccc")};
  transition: background-color 0.3s ease;
`;

// ===== Component =====
const News = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? newsList.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === newsList.length - 1 ? 0 : prev + 1));
  };

  return (
    <Container id="news">
      <SectionTitle>NEWS</SectionTitle>
      <SlideWrapper>
        <Arrow left onClick={prev}>
          <FiChevronLeft size={20} color="#fff" />
        </Arrow>

        <CardsContainer>
          {newsList.map((item, i) => {
            const isCurrent = i === currentIndex;
            const isNext = i === (currentIndex + 1) % newsList.length;
            const isPrev = i === (currentIndex - 1 + newsList.length) % newsList.length;

            return (
              <Card
                key={i}
                isCurrent={isCurrent}
                isNext={isNext}
                isPrev={isPrev}
              >
                <ContentWrapper>
                  <Img src={item.img} alt="뉴스 이미지" />
                  <NewsTitle>{item.title}</NewsTitle>
                  <Summary>{item.summary}</Summary>
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    뉴스 보러가기 <FiArrowRight />
                  </Link>
                </ContentWrapper>
              </Card>
            );
          })}
        </CardsContainer>

        <Arrow onClick={next}>
          <FiChevronRight size={20} color="#fff" />
        </Arrow>
      </SlideWrapper>

      <DotsWrapper>
        {newsList.map((_, i) => (
          <Dot key={i} active={i === currentIndex} />
        ))}
      </DotsWrapper>
    </Container>
  );
};

export default News;