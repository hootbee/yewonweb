import React from "react";
import styled from "styled-components";
import HealthCare from "../home/HealthCare";
import Environment from "../home/Environment";
import Nlp from "../home/Nlp";

const SectionWrapper = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
`;

const Research = () => {
  return (
    <SectionWrapper id="research">
      <HealthCare />
      <Environment />
      <Nlp />
    </SectionWrapper>
  );
};

export default Research;
