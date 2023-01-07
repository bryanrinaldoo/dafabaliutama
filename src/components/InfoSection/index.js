import React from 'react';
import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Img, ImgWrap, SwiperContent, SwiperWrapper, BtnNavigation, LeftIcon, RightIcon } from './InfoElements';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// import required modules\
import { useState } from 'react';
import { Button } from '../ButtonElement';
import { Autoplay } from 'swiper';

const InfoSection = ({lightBg, id, imgStart, topLine, 
  lightText, headline, darkText, desc, buttonLabel, alt, isButton, 
  primary, dark, dark2, slidesDataImg, openModal}) => {
  const [swiper, setSwiper] = useState();
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText} >{desc}</Subtitle>
                <BtnWrap isButton={isButton}>

                  <Button
                  onClick={openModal} 
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  primary={primary ? 1: 0}
                  dark={dark ? 1 : 0}
                  dark2={dark2 ? 1 : 0}
                  >{buttonLabel}</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            
            <Column2>
            <SwiperWrapper>

            <SwiperContent>
              <Swiper 
                loop={true} 
                allowTouchMove={false} 
                className="swiper" 
                modules={[Autoplay]} 
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false
                }} 
                > 
                {slidesDataImg.map((data) => (
                  <SwiperSlide>
                    <ImgWrap>
                      <Img src={data} alt={alt} />
                    </ImgWrap>
                  </SwiperSlide> 
                ))}
              </Swiper>
            </SwiperContent>
            </SwiperWrapper>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection