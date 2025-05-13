import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import img2 from "../img/explore.png";

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

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
`;

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

const ContentRow = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 25px;
  padding-top: 10px;
  gap: 20px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin: 0 170px;
  }
`;

const ContentWrapper = styled.div`
  margin-bottom: 200px;
  flex: 1;
`;

const SubTitle = styled.p`
  font: bold 23px "arial";
  color: #2b2b2b;
  margin: 40px 0 5px 0;
`;

const SubContent = styled.p`
  font: 500 13px "arial";
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    margin: 20px 0 50px 0;
  }
`;

const SubWrapper2 = styled.div`
  animation: ${({ inView }) => (inView ? slideUp : "none")} 1s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  min-height: 100vh;
`;

const BannerWrapper = styled.div`
  width: 100%;
  height: 100px;
  background: #007bbf;
`;

const BannerTitle = styled.p`
  font: bold 30px "arial";
  color: black;
  border-bottom: 1px solid black;
  margin: 50px 20px 0 20px;
  padding-bottom: 10px;
  @media screen and (min-width: 768px) {
    margin: 60px 200px 0 200px;
  }
`;

const BannerImgWrapper = styled.div`
  width: 70%;
  height: 300px;
  overflow-y: hidden;
  margin: 0 auto 350px auto;
  position: relative;
`;

const BannerImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

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
          <BannerTitle>applied AI의 압도적인 기술!</BannerTitle>
        </BannerWrapper>
      </ContentWrapper>
      <BannerImgWrapper>
        <BannerImg src={img2} />
        <BannerImgContent>세상을 보는 방식을 바꿔보세요.</BannerImgContent>
      </BannerImgWrapper>
    </Wrapper>
  );
};

export default Nlp;
