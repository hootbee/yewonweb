import styled from "styled-components";
import AirStellar from "./AirStellar";
import Ceo from "./Ceo";
import News from "./News";
import Research from "./Research";
import MedicalAi from "./MedicalAi";
import Environment from "./Environment";
import Footer from "../components/Footer"; // ✅ 추가

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

const SectionWrapper = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
`;

const SnapSection = styled.section`
  scroll-snap-align: start;
  min-height: 100vh;
  width: 100%;
`;

const Gradation = () => {
  return (
    <>
      <SnapSection>
        <Research />
      </SnapSection>
      <GradientBackground>
        <SectionWrapper>
          <SnapSection>
            <MedicalAi />
          </SnapSection>
          <SnapSection>
            <Environment />
          </SnapSection>
          <SnapSection>
            <AirStellar />
          </SnapSection>
          <SnapSection>
            <News />
          </SnapSection>
          <SnapSection>
            <Ceo />
          </SnapSection>
          <Footer /> {/* ✅ SnapSection 없이 자연스럽게 Ceo 아래에 배치 */}
        </SectionWrapper>
      </GradientBackground>
    </>
  );
};

export default Gradation;
