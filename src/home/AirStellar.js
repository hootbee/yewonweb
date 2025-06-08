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

/* ======= 슬라이딩 상세 보기 영역 ======= */

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
    transform: translateX(-50%);
    width: 70%;
    height: auto;
    top: 50%;
    transform: translate(-50%, -50%);
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
      <Anchor id="airStellar" />
      <Wrapper>
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
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur in est sit amet eros tincidunt viverra nec ut justo.
                </p>
              </InfoPanel>
            </InnerZone>
          </Overlay>
        )}
      </Wrapper>
    </>
  );
};

export default AirStellar;