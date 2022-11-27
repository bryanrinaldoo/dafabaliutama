import styled from "styled-components";

export const EventsContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--background-primary);
  padding-top: 40px;
  padding-bottom: 40px;
  @media screen and (max-width: 768px){
    padding-top: 90px;
  }
`;

export const EventsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-auto-rows: 100px; */
  grid-auto-flow: dense;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const EventsCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;
  gap: 10px;
  overflow: hidden;

  &:hover{
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    /* cursor: pointer; */
  }
`;

export const EventsIcon = styled.img`
  width: 100%;
  max-height: 400px;
  margin-bottom: 10px;
`;

export const EventsH1 = styled.h1`
  font-size: 2.5rem;
  color: var(--secondary-color);
  margin-bottom: 64px;

  @media screen and (max-width: 480px){
    font-size: 2rem;
  }
`;

export const EventsH2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const EventsP = styled.p`
  font-size: 1rem;
  text-align: center;
  margin: 0px 10px 10px;
`