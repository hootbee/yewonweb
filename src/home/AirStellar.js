import React from "react";
import styled from "styled-components";
import objectImg from "../img/static.png"; // 이미지 경로 주의

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: white;
  position: relative;
  padding: 100px 20px;
  box-sizing: border-box;
`;

const BackgroundText = styled.div`
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Playfair Display', serif;
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
  gap: 120px;          // ✅ 그대로 유지
  margin-top: 340px;   // ✅ 이미지가 커졌으니 여백 살짝 늘림
  z-index: 1;
  position: relative;
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ProductImage = styled.img`
  width: 400px;       // ✅ 더 크게
  height: auto;
  margin-bottom: 24px; // 살짝 여유
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

const AirStellar = () => {
  const products = [
    {
      name: "Air Stella No.1",
      brand: "STATIC",
      price: "From ฿600 per month",
    },
    {
      name: "Air Stella No.2",
      brand: "WEARABLE",
      price: "From ฿1400 per month",
    },
  ];

  return (
    <Wrapper>
      <BackgroundText>AIR-STELLA</BackgroundText>
      <ProductContainer>
        {products.map((product, idx) => (
          <Product key={idx}>
            <ProductImage src={objectImg} alt={product.name} />
            <ProductName>{product.name}</ProductName>
            <Brand>{product.brand}</Brand>
            <Price>{product.price}</Price>
          </Product>
        ))}
      </ProductContainer>
    </Wrapper>
  );
};

export default AirStellar;