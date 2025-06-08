import React from "react";
import styled from "styled-components";
import Environment from "../home/Environment";
import Nlp from "./Nlp";
import MedicalAi from "./MedicalAi";

const Anchor = styled.div`
  scroll-margin-top: 80px; // 헤더 높이 + 여유
  height: 0;
`;

const Research = () => {
  return (
    <div>
      <Nlp />
    </div>
  );
};

export default Research;
