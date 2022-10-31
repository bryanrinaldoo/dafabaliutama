import styled from "styled-components";
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const HeroContainer = styled.div`
  background: var(--background-secondary);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  min-height: 100vh;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 768px){
    flex-direction: column;
  }
`;

export const HeroBg = styled.div`
  display: flex;
  height: 240px;
  width: 400px;
  @media screen and (max-width: 768px){
    height: 180px;
    max-width: 300px;
  }
  @media screen and (max-width: 480px){
    height: 150px;
    font-size: 250px;
  }
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;
  font-family: var(--font-title);
  letter-spacing: 2px;
  @media screen and (max-width: 768px){
    font-size: 40px;
  }
  @media screen and (max-width: 480px){
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  font-weight: 300;

  @media screen and (max-width: 480px){
    font-size: 16px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`