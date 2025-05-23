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
    #1e3fa8 0%,
    /* 어두운 블루 시작 */ #163b91 25%,
    /* 더 어두운 블루 */ #0f2e72 50%,
    /* 남색 계열 */ #081d4d 75%,
    /* 매우 어두운 남색 */ #010920 100% /* 거의 검정 */
  );
  padding: 0;
  margin: 0;
`;

const Research = () => {
  return (
    <div id="research">
      <Nlp />
      <GradientBackground>
        <SectionWrapper>
          <MedicalAi />
          <Environment />
        </SectionWrapper>
      </GradientBackground>
      {/* ✅ NLP는 배경 그라데이션 밖에서 렌더링 */}
    </div>
  );
};

export default Research;
