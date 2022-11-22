import styled from "styled-components";

export const ProductsSlideContainer = styled.div`
  padding-top: 40px;
  background: var(--background-secondary);
  height: 100%;
  height: 110vh;
  @media screen and (max-width: 768px){
    padding-top: 80px;
  }
`;

export const ProductsSlideWrapper = styled.div`
  margin: 20px;
  border-radius: 20px;
  height: 67vh;
  display: flex;
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
  font-family: var(--font-product);
  margin-top: 10px;
  font-size: 4rem;
  color: var(--secondary-color);
  text-align: center;
  font-style: italic;
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
  grid-auto-columns: 1fr 2fr;
  align-items: center;
  justify-items: center;
  height: 100%;
  
  padding: 10px 20px;
  /**
  * *incase kalo mau ada tulisan
  */
   
  /* grid-template-areas:  ${`'col2 col1'`}; */
  /* @media screen and (max-width: 768px){
    grid-template-areas: ${`'col1' 'col2'`};
  } */
`
export const SwiperImage = styled.div`
  width: 100%;
  height: 100%;
  
  position: relative;
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.6);
  /* grid-area: col1; */
  `;
export const SwiperImgText = styled.p`
  font-family: var(--font-alt);
  font-size: 8rem;
  letter-spacing: 2rem;
  text-transform: uppercase;
  font-weight: 500;
  position: absolute;
  transform: translate(-100%, 0%);
  transition: all 0.5s;
  opacity: 0;
  &.active{
    transform: translate(-47%, 0%);
    transition: all 1.5s;
    opacity: 1;
  }
  @media screen and (max-width: 768px){
    font-size: 3rem;
    letter-spacing: 1rem;
  }
  
`

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
export const SwiperImg = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-52%, -50%);
  object-fit: contain;
  max-width: 700px;
  height: 700px;
  @media screen and (max-width: 768px){
    height: 600px;
  }
  @media screen and (max-width: 480px){
    height: 400px;
  }
  transition: all 3s;
  opacity: 0;
  
  &.active{
    opacity: 1;
  }
`