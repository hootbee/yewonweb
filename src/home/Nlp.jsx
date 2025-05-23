import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import img2 from "../img/nlp.png";

// 애니메이션 정의
const slideUp = keyframes`
  0% {
    transform: translateY(30%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

// 전체 래퍼
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
`;

// 스크롤 시 배경 어두워지는 효과
const GradientBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  pointer-events: none;
  background: rgba(0, 0, 0, ${({ opacity }) => opacity});
  z-index: -1;
  transition: background 0.2s ease;
`;

const ContentWrapper = styled.div`
  margin-bottom: 200px;
  flex: 1;
`;

const BannerWrapper = styled.div`
  width: 100%;
  /* height:100%; */
  margin-top: 100px;
  background: transparent;
`;

const BannerTitle = styled.p`
  font: bold 60px "arial";
  color: black;
  text-align: center;
  margin: 50px 20px 0 20px;
  padding-bottom: 10px;

  @media screen and (min-width: 768px) {
    margin: 60px 200px 0 200px;
  }
`;

// ✅ 이미지 중앙 정렬 핵심 부분
const BannerImgWrapper = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 350px auto;
`;

const BannerImg = styled.img`
  width: 30%;
  max-width: 70%;
  height: auto;
  object-fit: contain;
`;

// 필요 시 텍스트 겹치게 쓰고 싶을 때 사용
const BannerImgContent = styled.p`
  position: absolute;
  color: white;
  font: bold 40px "arial";
  text-align: center;
  margin: 0 30px;
  top: 40%;

  @media screen and (min-width: 768px) {
    font: bold 50px "arial";
    margin-left: 100px;
  }
`;

const Nlp = () => {
  const [inView, setInView] = useState({});
  const [scrollY, setScrollY] = useState(0);
  const [docHeight, setDocHeight] = useState(0);
  const refs = useRef([]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    setDocHeight(document.body.scrollHeight - window.innerHeight);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const startY = docHeight * (4 / 5);
  const opacity =
    scrollY < startY
      ? 0
      : Math.min(((scrollY - startY) / (docHeight - startY)) * 1, 1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView((prev) => ({
              ...prev,
              [entry.target.dataset.index]: true,
            }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    refs.current.forEach((ref) => ref && observer.observe(ref));
    return () => refs.current.forEach((ref) => ref && observer.unobserve(ref));
  }, []);

  return (
    <Wrapper id="nlp">
      <GradientBackground opacity={opacity} />
      <ContentWrapper>
        <BannerWrapper>
          <BannerTitle>Applied AI의 압도적인 기술!</BannerTitle>
        </BannerWrapper>
      </ContentWrapper>
      <BannerImgWrapper>
        <BannerImg src={img2} alt="Applied AI 이미지" />
      </BannerImgWrapper>
    </Wrapper>
  );
};

export default Nlp;
