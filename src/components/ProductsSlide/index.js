import React, { useEffect, useState } from 'react'
import { ProductsSlideWrapper, ProductsSlideContent, SwiperImg, ProductsSlideH1, ProductsSlideContainer, ProductsSlideTitle, SwiperRow, SwiperImage, SwiperImgText } from './ProductsSlideElements'
import {products} from './DataProduct'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";
const ProductsSlide = () => {
  const [swiper, setSwiper] = useState();
  const [nameProd, setNameProd] = useState('Crystal Club')

  useEffect(() => {
    if (!swiper) return;

    const activeText = () => document.querySelector('.swiper-slide-active .ImageText');
    const activeImage = () => document.querySelector('.swiper-slide-active .ImageImg');
    const addActiveClass = () => {
      activeText()?.classList.add('active');
      activeImage()?.classList.add('active');
    };
    const removeActiveClass = () => {
      activeText()?.classList.remove('active');
      activeImage()?.classList.remove('active');
    };
    const handleSlideChange = () => {
      setNameProd(swiper.activeIndex >= 5 ? 'Stag 5' : 'Crystal Club');
      removeActiveClass();
    };

    addActiveClass();
    swiper.on('slideChange', handleSlideChange);
    swiper.on('slideChangeTransitionStart', addActiveClass);

    return () => {
      swiper.off('slideChange', handleSlideChange);
      swiper.off('slideChangeTransitionStart', addActiveClass);
    };
  }, [swiper]);

  return (
    <>
    <ProductsSlideContainer id='products'>

      <ProductsSlideH1>OUR PRODUCTS</ProductsSlideH1>
      <ProductsSlideTitle>{nameProd}</ProductsSlideTitle>
      <ProductsSlideWrapper>
        <ProductsSlideContent>
        <Swiper navigation={true} modules={[Navigation]} className="swiper" onSwiper={(swiper) => setSwiper(swiper)}>
          {products.map((data) => (
            <SwiperSlide key={data.name}>
              <SwiperRow>
              {/* *incase mau ada tulisan  */}
              {/* <SwiperText>
                <SwiperTitle>{data.name}</SwiperTitle>
                <SwiperContent>{data.desc}</SwiperContent>
              </SwiperText> */}
              <SwiperImage>
                <SwiperImgText className='ImageText'>{data.name}</SwiperImgText>
                <SwiperImg className='ImageImg' src={data.img} />
              </SwiperImage>
              </SwiperRow>
            </SwiperSlide>
          ))}
        </Swiper>
        </ProductsSlideContent>
      </ProductsSlideWrapper>
    </ProductsSlideContainer>
    </>
  )
}

export default ProductsSlide
