import React, { useState, useEffect } from "react";
import styled from "styled-components";
import objectImg from "../img/static.png";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: white;
  position: relative;
  padding: 100px 20px;
  box-sizing: border-box;
  overflow-x: hidden;
`;

const BackgroundText = styled.div`
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  font-family: "Playfair Display", serif;
  font-size: 240px;
  font-weight: 300;
  color: #3d3d1f;
  opacity: 0.15;
  z-index: 0;
  white-space: nowrap;
  pointer-events: none;
`;

const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 120px;
  margin-top: 340px;
  z-index: 1;
  position: relative;
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
`;

const ProductImage = styled.img`
  width: 550px;
  height: auto;
  margin-bottom: 24px;
  transition: transform 0.5s ease;
`;

const ProductName = styled.h3`
  font-size: 20px;
  margin: 6px 0;
`;

const Brand = styled.p`
  font-size: 15px;
  color: gray;
  margin: 2px 0;
`;

const Price = styled.p`
  font-size: 15px;
  color: #333;
  margin: 2px 0;
`;

const Anchor = styled.div`
  scroll-margin-top: 80px;
  height: 0;
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(255, 255, 255, 0.96);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerZone = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: white;

  &.closing {
    pointer-events: none;
  }
`;

const SlidingImage = styled.div`
  flex: 1;
  position: relative;
  animation: none;

  &.entering {
    animation: slideFromCenter 1s ease forwards;
  }

  &.closing {
    animation: slideLeftOut 1s ease forwards;
  }

  @keyframes slideFromCenter {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-10%);
    }
  }

  @keyframes slideLeftOut {
    from {
      transform: translateX(-10%);
    }
    to {
      transform: translateX(100%);
    }
  }

  img {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    height: auto;
    top: 50%;
  }
`;

const InfoPanel = styled.div`
  flex: 1;
  padding: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: slideIn 1s ease forwards;

  .closing & {
    animation: slideOut 1s ease forwards;
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(20%);
    }
    to {
      opacity: 1;
      transform: translateX(0%);
    }
  }

  @keyframes slideOut {
    from {
      opacity: 1;
      transform: translateX(0%);
    }
    to {
      opacity: 0;
      transform: translateX(20%);
    }
  }
`;

const AirStellar = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const [isEntering, setIsEntering] = useState(false);

  useEffect(() => {
    document.body.style.overflow = selectedProduct ? "hidden" : "auto";
  }, [selectedProduct]);

  const handleOpen = (product) => {
    setSelectedProduct(product);
    setIsEntering(false);
    setTimeout(() => setIsEntering(true), 50);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedProduct(null);
      setIsClosing(false);
      setIsEntering(false);
    }, 1000);
  };

  const products = [
    {
      name: "Air Stella No.1",
      brand: "STATIC",
      price: "From ฿600 per month",
      img: objectImg,
    },
    {
      name: "Air Stella No.2",
      brand: "WEARABLE",
      price: "From ฿1400 per month",
      img: objectImg,
    },
  ];

  return (
    <>
      <Wrapper id="airStellar">
        <BackgroundText>AIR-STELLA</BackgroundText>
        <ProductContainer>
          {products.map((product, idx) => (
            <Product key={idx} onClick={() => handleOpen(product)}>
              <ProductImage src={product.img} alt={product.name} />
              <ProductName>{product.name}</ProductName>
              <Brand>{product.brand}</Brand>
              <Price>{product.price}</Price>
            </Product>
          ))}
        </ProductContainer>

        {selectedProduct && (
          <Overlay onClick={handleClose}>
            <InnerZone className={isClosing ? "closing" : ""}>
              <SlidingImage
                onClick={handleClose}
                className={`${isEntering ? "entering" : ""} ${isClosing ? "closing" : ""}`}
              >
                <img src={selectedProduct.img} alt={selectedProduct.name} />
              </SlidingImage>
              <InfoPanel onClick={(e) => e.stopPropagation()}>
                <h2>{selectedProduct.name}</h2>
                <h4>{selectedProduct.brand}</h4>
                <p>{selectedProduct.price}</p>
                <table style={{ marginTop: "24px", borderCollapse: "collapse", width: "100%" }}>
                  <tbody>
                    {(selectedProduct.name.includes("No.1")
                      ? [
                          ["환경측정", "온도, 습도, 소음, 조도, 라돈"],
                          ["가스측정", "이산화탄소(1등급), VOC, 포름알데히드, 황화수소, 이산화질소, 일산화탄소, 오존, 암모니아"],
                          ["동작온도", "-20 ~ 50℃"],
                          ["아답터", "12V, 3A"],
                          ["데이터표시", "LCD 패널, PC 프로그램 및 Mobile 프로그램"],
                          ["데이터저장", "서버 전송 저장"],
                          ["상태표시", "4색 LED로 상태표시"],
                          ["전송방식", "BLE, WIFI, LAN, RS485, USB, C-TYPE"],
                          ["크기", "152mm * 183mm * 38mm"],
                          ["무게", "550g"],
                          ["제품적용", "쉘터, 어린이집, 병원, 학교, 지하도 등 다양한 실내공간"],
                        ]
                      : [
                          ["환경측정", "온도, 습도, 소음, 조도"],
                          ["가스측정", "이산화탄소(1등급), VOC, 포름알데히드, 일산화탄소, 오존, 암모니아"],
                          ["동작온도", "-20 ~ 50℃"],
                          ["아답터", "16V, 4.5A"],
                          ["데이터표시", "PC 프로그램 및 Mobile 프로그램"],
                          ["데이터저장", "서버 전송 저장"],
                          ["상태표시", "4색 LED로 상태표시"],
                          ["전송방식", "BLE, WIFI, LAN, RS485, USB, C-TYPE"],
                          ["크기", "138mm * 154mm * 38mm"],
                          ["무게", "380g (배터리 제외)"],
                          ["제품적용", "쉘터, 어린이집, 병원, 학교, 지하도 등 다양한 실내공간"],
                        ]
                    ).map(([label, value], idx) => (
                      <tr key={idx}>
                        <th
                          style={{
                            textAlign: "left",
                            padding: "8px",
                            border: "1px solid #ccc",
                            background: "#f0f0f0",
                            width: "35%",
                          }}
                        >
                          {label}
                        </th>
                        <td style={{ padding: "8px", border: "1px solid #ccc" }}>{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </InfoPanel>
            </InnerZone>
          </Overlay>
        )}
      </Wrapper>
    </>
  );
};

export default AirStellar;