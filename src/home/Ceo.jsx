import React from "react";
import "./RepresentativeIntro.css";
import ceoImage from "../img/ceo_image.png";

const RepresentativeIntro = () => {
  return (
    <div className="rep-container">
      <div className="rep-content">
        <h3 className="rep-role">대표이사</h3>
        <h1 className="rep-name">조재혁</h1>

        <div className="rep-info">
          <div className="rep-section">
            <h4>경력</h4>
            <ul>
              <li>전북대학교 소프트웨어공학과 교수 (2022~)</li>
              <li>숭실대학교 AI데이터연구센터장 (2019~2022)</li>
              <li>KISTEP 국가R&D PM (2003~2019)</li>
              <li>LG CNS 기술리더 (2002~2003)</li>
            </ul>
          </div>

          <div className="rep-section">
            <h4>주요 활동</h4>
            <ul>
              <li>보건복지부 GFID 위원장</li>
              <li>산업부 AI 반도체·센서 R&D 위원장</li>
              <li>과기정통부 패키지 AI 위원장</li>
              <li>스마트시티/SBAS 위원 (국토부)</li>
              <li>2024 환경 R&D 우수성과 20선 선정</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rep-photo">
        <img src={ceoImage} alt="대표 사진" />
      </div>
    </div>
  );
};

export default RepresentativeIntro;