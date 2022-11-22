import styled from "styled-components";
import {FaArrowCircleLeft, FaArrowCircleRight} from 'react-icons/fa'


export const InfoContainer = styled.div`
  color: #fff;
  background: ${({lightBg}) => (lightBg ? '#f9f9f9' : 'var(--background-secondary)')};

  @media screen and (max-width: 768px){
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  min-height: 100vh;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  padding-top: 90px;
  @media screen and (max-width: 768px){
    padding-top: 0;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px){
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  min-width: 100%;
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: var(--primary-color);
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};

  @media screen and (max-width: 480px){
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  text-align: justify;
  font-weight: 300;
  color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`;

export const BtnWrap = styled.div`
  display: ${({isButton}) => (isButton ? 'flex' : 'none')};;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  display: flex;
  max-width: 555px;
  height: auto;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  padding: 2px;
`

export const SwiperContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  width: 100%;
`;

export const SwiperWrapper = styled.div`
  margin: 20px;
  border-radius: 20px;
  height: 67vh;
  display: flex;
`;

export const BtnNavigation = styled.div`
  display: flex;
  gap: 10px;
`
export const LeftIcon = styled(FaArrowCircleLeft)`
  font-size: 30px;
  color: #fff;
`;
export const RightIcon = styled(FaArrowCircleRight)`
  font-size: 30px;
  color: #fff;
`;