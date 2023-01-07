import styled from "styled-components";
import {MdClose} from 'react-icons/md'

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const ModalWrapper = styled.div`
  z-index: 1000;
  width: 70%;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  /* background: #fff; */
  color: #000;
  z-index: 10;
  border-radius: 30px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin-top: 40px;
  display: flex;

  @media screen and (max-width: 768px){
    width: 90%;
  }

`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  width: 100%;
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`
export const SwiperImg = styled.img`
  object-fit: contain;
  height: 70%;
`;

export const SwiperTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 12px;
`;

export const SwiperContent = styled.p`
  width: 80%;
  font-size: 18px;
`