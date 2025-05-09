import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import img from "../img/mood.png";
import img2 from "../img/explore.png";
import { FaChevronRight } from "react-icons/fa";

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

const GradientBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  pointer-events: none;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  opacity: ${({ opacity }) => opacity};
  z-index: -1;
  transition: opacity 0.2s ease;
`;

const ImgWrapper = styled.div`
  width: 100%;
  height: auto;
  margin-top: 100px;
  position: relative;
  overflow-x: hidden;
`;

const Img = styled.img`
  width: 100%;
  height: 500px;
`;

const Comment = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  margin-top: 50px;
  @media screen and (min-width: 768px) {
    margin-top: 100px;
  }
`;

const ImgTitle = styled.p`
  font: bold 30px "arial";
  color: white;
  border-bottom: 1px solid white;
  margin: 0 20px;
  padding-bottom: 330px;
  @media screen and (min-width: 768px) {
    margin: 0 170px;
    padding-bottom: 10px;
  }
`;

const ImgContent = styled.p`
  font: 500 13px "arial";
  color: white;
  margin: 0 20px;
  padding-top: 10px;
  @media screen and (min-width: 768px) {
    margin-right: 170px;
    width: calc(30%);
    float: right;
  }
`;

const ContentWrapper = styled.div`
  margin: 0 25px;
  padding: 0;
  @media screen and (min-width: 768px) {
    margin: 0 170px;
  }
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    & > div:nth-child(1) {
      margin-right: 10px;
    }
    & > div:nth-child(2) {
      margin-left: 10px;
    }
  }
`;

const SubWrapper = styled.div`
  animation: ${({ inView }) => (inView ? slideUp : "none")} 1s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  border-bottom: 0.5px solid #8e8d8d;
  @media screen and (min-width: 768px) {
    border-bottom: none;
    border-top: 0.5px solid #8e8d8d;
    margin-top: 50px;
  }
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

const SubImg = styled.img`
  width: 100%;
  height: 300px;
`;

const SubWrapper2 = styled.div`
  animation: ${({ inView }) => (inView ? slideUp : "none")} 1s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

const Button = styled.div`
  font: 500 20px "arial";
  color: #6c6b6b;
  width: 250px;
  margin-top: 40px;
  border-bottom: 1px solid gray;
  display: flex;
  padding-bottom: 10px;
  &:hover {
    cursor: pointer;
    color: gray;
  }
`;

const Right = styled(FaChevronRight)`
  padding-top: 1px;
`;

const SubTitle2 = styled.p`
  font: bold 23px "arial";
  color: #2b2b2b;
  margin: 40px 0 5px 0;
`;

const SubContent2 = styled.p`
  font: 500 13px "arial";
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    margin-top: 85px;
  }
`;

const BannerWrapper = styled.div`
  width: 100%;
  height: 250px;
  margin-top: 50px;
  background: #e2e2e2;
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

const BannerContent = styled.p`
  font: 500 13px "arial";
  color: black;
  margin: 0 20px;
  padding-top: 10px;
  @media screen and (min-width: 768px) {
    margin-right: 200px;
    width: calc(30%);
    float: right;
  }
`;

const BannerImgWrapper = styled.div`
  width: 70%;
  height: 300px;
  overflow-y: hidden;
  margin: 30px auto;
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
    <div id="nlp">
      <GradientBackground opacity={opacity} />
      <ImgWrapper>
        <Img src={img} />
        <Comment>
          <ImgTitle>NLP 컴포넌트 시작</ImgTitle>
          <ImgContent>
            이동 중에는 늘 우선순위이므로, Quadstar에 모든 최신 안전 기능을
            탑재했습니다. 다가오는 차량 감지부터 서라운드 조명등 시스템까지,
            Quadstar는 보다 안전한 라이딩을 보장합니다.
          </ImgContent>
        </Comment>
      </ImgWrapper>
      <ContentWrapper></ContentWrapper>
      <BannerWrapper>
        <BannerTitle>applied AI의 압도적인 기술!</BannerTitle>
      </BannerWrapper>
      <ContentWrapper>
        <SubContainer>
          <SubWrapper2
            ref={(el) => (refs.current[4] = el)}
            data-index={4}
            inView={inView[4]}
          >
            <SubTitle>잃어버릴 일이 없습니다.</SubTitle>
            <SubContent>
              자전거 도난 가능성이 감지되면 즉시 알림을 받습니다. GPS 위치
              지정은 어떤 상황에서든 Quadstar를 찾는 데 도움을 줍니다.
            </SubContent>
          </SubWrapper2>
          <SubWrapper2
            ref={(el) => (refs.current[5] = el)}
            data-index={5}
            inView={inView[5]}
          >
            <SubTitle>항상 안전합니다</SubTitle>
            <SubContent>
              Quadstar는 휴대폰이 연결 범위를 벗어났음을 감지하면 자동으로
              잠깁니다.
            </SubContent>
          </SubWrapper2>
        </SubContainer>
      </ContentWrapper>
      <BannerImgWrapper>
        <BannerImg src={img2} />
        <BannerImgContent>세상을 보는 방식을 바꿔보세요.</BannerImgContent>
      </BannerImgWrapper>
    </div>
  );
};

export default Nlp;
