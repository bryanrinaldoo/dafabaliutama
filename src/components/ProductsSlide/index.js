import React, { useState } from 'react'
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
  if(swiper){
      document.querySelector('.swiper-slide-active .ImageText').classList.add("active")
      document.querySelector('.swiper-slide-active .ImageImg').classList.add("active")
    swiper.on('slideChange', function(){
      (swiper.activeIndex >=5) ? setNameProd('Stag 5') : setNameProd('Crystal Club')      
      document.querySelector('.swiper-slide-active .ImageText').classList.remove("active")
      document.querySelector('.swiper-slide-active .ImageImg').classList.remove("active")
    })
    swiper.on('slideChangeTransitionStart', function(){
      document.querySelector('.swiper-slide-active .ImageText').classList.add("active")
      document.querySelector('.swiper-slide-active .ImageImg').classList.add("active")
    })
  }
  return (
    <>
    <ProductsSlideContainer id='products'>

      <ProductsSlideH1>OUR PRODUCTS</ProductsSlideH1>
      <ProductsSlideTitle>{nameProd}</ProductsSlideTitle>
      <ProductsSlideWrapper>
        <ProductsSlideContent>
        <Swiper navigation={true} modules={[Navigation]} className="swiper" onSwiper={(swiper) => setSwiper(swiper)}>
          {products.map((data) => (
            <SwiperSlide>
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