import styled from "styled-components";

export const AboutContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;

  @media screen and (max-width: 768px){
    height: 1100px;
  }
  @media screen and (max-width: 480px){
    height: 1300px;
  }
`;

export const AboutH1 = styled.h1`
  font-size: 2.5rem;
  color: var(--secondary-color);
  margin-bottom: 64px;

  @media screen and (max-width: 480px){
    font-size: 2rem;
  }
`;

export const AboutWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;


export const AboutCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  gap: 20px;
  
  p{
    text-align: center;
  }
`;

export const AboutImg = styled.img`
  max-width: 200px;
  height: 80%;
`;

export const AboutTitle = styled.h2`
  font-size: 18px;
  color: #010606;
  margin: 12px 0;

  @media screen and (max-width: 480px){
    font-size: 12px
  }
`;