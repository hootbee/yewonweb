import styled from "styled-components";
import AirStellar from "./AirStellar";
import Ceo from "./Ceo";
import News from "./News";
import Research from "./Research";
import MedicalAi from "./MedicalAi";
import Environment from "./Environment";

const GradientBackground = styled.div`
  background: linear-gradient(
    180deg,
    #1e3fa8 0%,
    #163b91 25%,
    #0f2e72 50%,
    #081d4d 75%,
    #010920 100%
  );
  padding: 0;
  margin: 0;
`;

// ✅ 콘텐츠 Wrapper
const SectionWrapper = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
`;

const Gradation = () => {
  return (
    <>
      <Research /> {/* Nlp 단독 */}
      <GradientBackground>
        <SectionWrapper>
          <MedicalAi />
          <Environment />
          <AirStellar />
          <News />
          <Ceo />
        </SectionWrapper>
      </GradientBackground>
    </>
  );
};

export default Gradation;
