import React from 'react';
import { Button } from '../ButtonElement';
import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Img, ImgWrap, SwiperContent, SwiperWrapper, BtnNavigation, LeftIcon, RightIcon } from './InfoElements';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import factory1 from '../../static/factory1.webp'
import factory2 from '../../static/factory2.webp'
import factory3 from '../../static/factory3.webp'
import factory4 from '../../static/factory4.webp'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";
import { useState } from 'react';
// import img from '../../static/img1.svg'
const InfoSection = ({lightBg, id, imgStart, img, topLine, 
  lightText, headline, darkText, desc, buttonLabel, alt, isButton, 
  primary, dark, dark2,}) => {
    const [swiper, setSwiper] = useState();
    console.log(Navigation);
  const slidesData = [
    factory1,
    factory2,
    factory3,
    factory4,
  ]
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
                  <Button to='products' 
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
                {slidesData.map((data) => (
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