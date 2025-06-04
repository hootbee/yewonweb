//src/home/Introduce.jsx

import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import img1 from "../img/connact.png";

const growShrink = keyframes`
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
`;

const slideUp = keyframes`
    0% {
        transform: translateY(30%);
        opacity: 0;
    }
    100% {
        transform: translateY(0%);
        opacity: 1;
    }
`;

const MainImgWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  animation: ${({ inView }) => (inView ? growShrink : "none")} 1s ease-out;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const MainImgContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font: bold 25px "arial";
  text-align: center;
  margin: 0;
  padding: 0;
  @media screen and (min-width: 768px) {
    font-size: 50px;
  }
`;

const MainWrapper = styled.div`
  width: 100%;
  height: 200px;
  background: #252525;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainTitle = styled.p`
  width: calc(85%);
  font: bold 35px "arial";
  color: white;
  border-bottom: 1px solid white;
  padding: 0;
  margin: 40px 0 0 0;
  padding-bottom: 10px;
  @media screen and (min-width: 768px) {
    width: calc(70%);
  }
`;

const MainContent = styled.p`
  width: calc(85%);
  font: 600 12px "arial";
  color: white;
  margin: 0;
  padding: 0;
  padding-top: 15px;
  @media screen and (min-width: 768px) {
    width: calc(70%);
  }
`;

const SubContainer = styled.div`
  margin: 0 25px;
  padding: 0;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    margin: 0 170px;
  }
`;

const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  margin: 20px 0;
  padding: 0;
  animation: ${({ inView }) => (inView ? slideUp : "none")} 1s ease-out;
  @media screen and (min-width: 768px) {
    margin: 20px 10px;
  }
`;

const SubWrapper2 = styled.div`
  margin: 0;
  padding: 0;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const SubWrapper3 = styled.div`
  padding: 0;
  margin: 0;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

const SubTitle = styled.p`
  color: black;
  font: bold 20px "arial";
  margin: 10px 20px;
  padding: 0;
`;

const SubContent = styled.p`
  color: black;
  font: 500 13px "arial";
  margin: 10px 20px;
  padding: 0;
`;

const SubImg = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const About = () => {
  const [inView, setInView] = useState({});
  const refs = useRef([]);

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

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (refs.current)
        refs.current.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, []);

  return (
    <>
      <MainImgWrapper
        id="about"
        ref={(el) => (refs.current[0] = el)}
        data-index={0}
        inView={inView[0]}
      >
        <Img src={img1} />
        <MainImgContent>HUMAN AI PLUS와 함께</MainImgContent>
      </MainImgWrapper>
    </>
  );
};

export default About;
