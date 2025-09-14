// Chatbot.js
import React from "react";
import styled from "styled-components";
import env1 from "../img/env_1.png";
import env2 from "../img/env_2.png";
import env3 from "../img/env_3.png";
import env4 from "../img/env_4.png";

/** ===============================
 *  Layout
 *  =============================== */
const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding: 80px 100px;
  background: #0b0f14;
  color: #e8f0f7;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 40px;
    padding: 56px 24px;
  }
`;

const Left = styled.div`
  flex: 1;
  max-width: 560px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h5 {
    color: #8ba0b2;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.06em;
    margin-bottom: 0px;
  }

  h2 {
    font-size: 56px;
    font-weight: 350;
    line-height: 1.2;
    margin-bottom: 18px;

    @media (max-width: 768px) {
      font-size: 36px;
    }
  }

  p {
    font-size: 16px;   /* 오타 수정: 1ㄴ6px -> 16px */
    color: #b8c7d4;
    margin-bottom: 28px;
    line-height: 1.7;
  }
`;

/** ===============================
 *  ViewButton (링크 버튼)
 *  =============================== */
const ViewButton = styled.a`
  width: fit-content;
  background: #e6f0ff;
  color: #0a2540;
  text-decoration: none;
  padding: 12px 22px;
  border-radius: 999px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 700;
  transition: transform 0.15s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 24px rgba(230, 240, 255, 0.15);
  }
`;

/** ===============================
 *  Cards (Right) - 지그재그(바람개비) 배치
 *  =============================== */
const Cards = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;         /* 2열 */
  grid-template-rows: repeat(3, 220px);   /* 3행 고정: Tall 카드가 2행을 차지하도록 */
  gap: 20px;
  max-width: 620px;
  align-self: center;

  @media (max-width: 768px) {
    grid-template-rows: repeat(3, 180px);
    gap: 14px;
  }
`;

// 공통 카드
const Card = styled.div`
  background: #101823;
  border-radius: 18px;
  overflow: hidden;
  position: relative;
  outline: 1px solid rgba(255, 255, 255, 0.06);

  &::after {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    font-size: 13px;
    color: #8ba0b2;
    opacity: 0.9;
  }
`;

/* 지그재그 포지션: 
   - 좌상 Tall (rows 1~2, col 1)
   - 우상 일반 (row 1, col 2)
   - 좌하 일반 (row 3, col 1)
   - 우하 Tall (rows 2~3, col 2)
*/
const TallTopLeft = styled(Card)`
  grid-area: 1 / 1 / 3 / 2;
  transform: translateY(-40px);
  background: url(${env1}) no-repeat center/cover;
`;
const TopRight = styled(Card)`
  grid-area: 1 / 2 / 2 / 3;
  transform: translateY(40px);
  background: url(${env2}) no-repeat center/cover;
`;
const BottomLeft = styled(Card)`
  grid-area: 3 / 1 / 4 / 2;
  transform: translateY(-40px);
  background: url(${env4}) no-repeat center/cover;
`;
const TallBottomRight = styled(Card)`
  grid-area: 2 / 2 / 4 / 3;
  transform: translateY(40px);
  background: url(${env3}) no-repeat center/cover;
`;

/** ===============================
 *  Component
 *  =============================== */
const Chatbot = () => {
  return (
    <Wrapper id="chatbot">
      <Left>
        <h5>BIG-DATA PLATFORM WORK</h5>
        <h2>
          sLLM 기반의
          <br />
          <span style={{ color: "#e6f0ff", fontWeight: "bold" }}>
            챗봇 대화형 인터페이스
          </span>
        </h2>
        <p>
          사용자의 건강 프로필과 환경 데이터를 바탕으로 맞춤형 건강 상담과 답변을 제공합니다.
          또한, AgentRAG 기반 의약품 데이터 검색을 통해 신뢰성 있는 서비스를 지원합니다.
        </p>

        <ViewButton
          href="https://envhealthadmin.jbnu.ac.kr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          플랫폼 둘러보기
        </ViewButton>
      </Left>

      {/* Right Cards - 지그재그 배치 */}
      <Cards>
        <TallTopLeft aria-label="좌상 Tall 카드(이미지 자리)" />
        <TopRight aria-label="우상 일반 카드(이미지 자리)" />
        <BottomLeft aria-label="좌하 일반 카드(이미지 자리)" />
        <TallBottomRight aria-label="우하 Tall 카드(이미지 자리)" />
      </Cards>
    </Wrapper>
  );
};

export default Chatbot;