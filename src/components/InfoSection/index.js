import React from 'react';
import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Img, ImgWrap, SwiperContent, SwiperWrapper, BtnNavigation, LeftIcon, RightIcon } from './InfoElements';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules

import { useState } from 'react';
import { Button } from '../ButtonElement';
// import img from '../../static/img1.svg'
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
                <BtnNavigation>
                  <LeftIcon onClick={() => swiper.slidePrev()}/>
                  <RightIcon onClick={() => swiper.slideNext()}/>
                </BtnNavigation>
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
              <Swiper navigation={{
                nextEl: '.next',
                prevEl: '.prev',}}  loop={true} allowTouchMove={false} className="swiper" onSwiper={(swiper) => setSwiper(swiper)}> 
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