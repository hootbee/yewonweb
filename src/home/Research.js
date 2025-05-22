import React from "react";
import styled from "styled-components";
import Environment from "../home/Environment";
import Nlp from "./Nlp";
import MedicalAi from "./MedicalAi";

const SectionWrapper = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
`;

const GradientBackground = styled.div`
  background: linear-gradient(
    180deg,
    #66bfff 0%,
    #397eed 25%,
    #1e3fa8 50%,
    #0a2a75 75%,
    #010920 100%
  );
  padding: 0;
  margin: 0;
`;

const Research = () => {
  return (
    <>
      <GradientBackground id="research">
        <SectionWrapper>
          <MedicalAi />
          <Environment />
        </SectionWrapper>
      </GradientBackground>
      {/* ✅ NLP는 배경 그라데이션 밖에서 렌더링 */}
      <Nlp />
    </>
  );
};

export default Research;
