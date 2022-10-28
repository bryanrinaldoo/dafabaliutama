import React, { useState } from 'react'
import {Background, ProductsSlideWrapper, ProductsSlideContent, SwiperImg, SwiperTitle, SwiperContent, ProductsSlideH1, ProductsSlideContainer, SwiperText, ProductsSlideTitle, SwiperRow} from './ProductsSlideElements'
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
    swiper.on('slideChange', function(){
      (swiper.activeIndex >=5) ? setNameProd('Stag 5') : setNameProd('Crystal Club')      
    })
  }
  return (
    <>
    <ProductsSlideContainer id='products'>

      <ProductsSlideH1>Our Products</ProductsSlideH1>
      <ProductsSlideTitle>{nameProd}</ProductsSlideTitle>
      <ProductsSlideWrapper>
        <ProductsSlideContent>
        <Swiper navigation={true} modules={[Navigation]} className="swiper" onSwiper={(swiper) => setSwiper(swiper)}>
          {products.map((data) => (
            <SwiperSlide>
              <SwiperRow>
              <SwiperText>
                <SwiperTitle>{data.name}</SwiperTitle>
                <SwiperContent>{data.desc}</SwiperContent>
              </SwiperText>
              <SwiperImg src={data.img} />
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