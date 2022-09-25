import styled from "styled-components";
import {FiPlus, FiMinus} from 'react-icons/fi'
export const AccordionContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px){
    height: 1100px;
  }
  @media screen and (max-width: 480px){
    height: 1300px;
  }
`;

export const AccordionH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px){
    font-size: 2rem;
  }
`;

export const AccordionContent = styled.div`
  width: 95%;
  box-shadow: 2px 10px 80px 1px rgba(153, 153, 153, 0.3);
`;

export const AccordionWrap = styled.div`
  background: #272727;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 70px;
  cursor: pointer;
  h1{
    padding: 0 15px;
    font-size: 18px;
  }
  @media screen and (max-width: 768px){
    h1{
      padding: 10px 15px;
    }
  }
`;

export const MinusIcon = styled(FiMinus)`
  color: #fff;
  margin-right: 20px;
  `;

export const PlusIcon = styled(FiPlus)`
  color: #fff;
  margin-right: 20px;
`;

export const Dropdown = styled.div`
  background: #1c1c1c;
  color: #fff;
  width: 100%;
  padding: 20px;
  text-align: justify;
  border-bottom: 1px solid var(--primary-color);
  border-top: 1px solid var(--primary-color);
`