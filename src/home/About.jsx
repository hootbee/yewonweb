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
  font: bold 30px "arial";
  text-align: center;
  margin: 0;
  padding: 0;
  @media screen and (min-width: 768px) {
    font-size: 50px;
  }
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
    <MainImgWrapper
      id="about"
      ref={(el) => (refs.current[0] = el)}
      data-index={0}
      inView={inView[0]}
    >
      <Img src={img1} />
      <MainImgContent>HUMAN AI PLUS와 함께</MainImgContent>
    </MainImgWrapper>
  );
};

export default About;
