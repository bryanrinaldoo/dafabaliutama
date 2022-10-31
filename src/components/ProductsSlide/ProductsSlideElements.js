import styled from "styled-components";
import back1 from '../../static/back1.png'

export const ProductsSlideContainer = styled.div`
  padding-top: 40px;
  background: var(--background-primary);
  height: 100%;
  height: 110vh;
  /* background: var(--background-primary); */
`;

export const ProductsSlideWrapper = styled.div`
  margin: 20px;
  border-radius: 20px;
  height: 67vh;
  display: flex;
  /* background-image:  url(${back1});
  background-image: linear-gradient(rgba(255, 255, 255, 0.527),rgba(200, 200, 200, 0.7)) , url(${back1});
  background-position: 10% 40%;
  background-repeat: no-repeat;
  background-size: contain; */
  /* background: rgb(208,164,183);
  background: linear-gradient(90deg, rgba(208,164,183,1) 0%, rgba(255,83,83,0.9251050762101716) 0%, rgba(205,148,113,1) 100%); */
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
  color: rgba(0, 0, 0, 0.4);
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
  transform: translate(-50%, -50%);
  object-fit: contain;
  max-width: 500px;
  height: 500px;
  @media screen and (max-width: 768px){
    height: 350px;
  }
  @media screen and (max-width: 480px){
    height: 300px;
  }
  transition: all 3s;
  opacity: 0;
  
  &.active{
    opacity: 1;
  }
`