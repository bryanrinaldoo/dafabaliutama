import styled from "styled-components";
import back1 from '../../static/back1.png'

export const ProductsSlideContainer = styled.div`
  padding-top: 90px;
  background: var(--background-primary);
  height: 100%;
  min-height: 110vh;
  /* background: var(--background-primary); */
`;

export const ProductsSlideWrapper = styled.div`
  height: 100vh;
  display: flex;
  background-image:  url(${back1});
  /* background-image: linear-gradient(rgba(255, 255, 255, 0.527),rgba(200, 200, 200, 0.7)) , url(${back1}); */
  background-position: 10% 40%;
  background-repeat: no-repeat;
  background-size: contain;
  @media screen and (max-width: 768px){
    height: 80vh;
  }
`;
export const ProductsSlideH1 = styled.h1`
  padding-top: 10px;
  font-size: 1rem;
  color: var(--secondary-color);
  text-align: center;

  @media screen and (max-width: 480px){
    font-size: 0.8rem;
  }
`;
export const ProductsSlideTitle = styled.h1`
  font-size: 4.5rem;
  color: var(--secondary-color);
  text-align: center;
  @media screen and (max-width: 768px){
    font-size: 3rem;
  }
  @media screen and (max-width: 480px){
    font-size: 2rem;
  }
`;

export const ProductsSlideContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  width: 100%;
`;
export const SwiperRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  justify-items: center;
  grid-template-areas:  ${`'col2 col1'`};
  padding: 10px 20px;

  @media screen and (max-width: 768px){
    grid-template-areas: ${`'col1' 'col2'`};
  }
`
export const SwiperImg = styled.img`
  object-fit: contain;
  max-width: 500px;
  height: 700px;
  @media screen and (max-width: 768px){
    height: 350px;
  }
  @media screen and (max-width: 480px){
    height: 300px;
  }
  grid-area: col1;
`;

export const SwiperTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 12px;
  @media screen and (max-width: 768px){
    margin-bottom: 8px;
  }
`;

export const SwiperContent = styled.p`
  width: 100%;
  font-size: 18px;
  @media screen and (max-width: 768px){
    font-size: 14px;
  }
`;

export const SwiperText = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: col2;
`