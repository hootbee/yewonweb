// AirStellarModal.jsx
import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;

const ModalBox = styled.div`
  background: white;
  padding: 24px;
  border-radius: 16px;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 16px;
`;

const Title = styled.h3`
  margin: 0 0 8px;
  font-size: 22px;
`;

const Text = styled.p`
  font-size: 15px;
  color: #333;
`;

const AirStellarModal = ({ onClose, product }) => {
  if (!product) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Image src={product.img} alt={product.name} />
        <Title>{product.name}</Title>
        <Text>브랜드: {product.brand}</Text>
        <Text>가격: {product.price}</Text>
        <Text>
          에어스텔라의 상세 기능이나 설명을 여기에 추가할 수 있습니다.
        </Text>
      </ModalBox>
    </Overlay>
  );
};

export default AirStellarModal;
