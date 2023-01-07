import React from 'react'
import {Background, ModalWrapper, ModalContent, CloseModalButton} from './ModalElements'
import { ProductsSlideWrapper, ProductsSlideContent, ProductsSlideH1, ProductsSlideContainer, SwiperRow, SwiperImgTextSoju, SwiperImgSoju, SwiperImageSoju, SwiperImgSojuBg, ProductsSlideContainerSoju } from '../ProductsSlide/ProductsSlideElements'
import {soju} from '../ProductsSlide/DataProduct'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";
const Modal = ({ showModal, setShowModal}) => {
  return (
    <>
      {showModal ? (
        <>
        <Background onClick={setShowModal}>
        </Background>
          <ModalWrapper>
            <ModalContent>
            <ProductsSlideContainerSoju id='sojuSlide'>
              <ProductsSlideWrapper>
                <ProductsSlideContent>
                <Swiper 
                  slidesPerView={1}
                  spaceBetween= {10}
                  breakpoints={{
                    768: {
                      slidesPerView: 3,
                    }
                  }}
                  navigation={true} 
                  modules={[Navigation]} 
                  className="swiperSoju" 
                >
                  {soju.map((data) => (
                    <SwiperSlide>
                      {/* <SwiperImgSojuBg className='ImageImg' backgroundImg={data.bg} /> */}
                      <SwiperRow>
                        <SwiperImageSoju>
                          <SwiperImgTextSoju className='ImageText'>{data.name}</SwiperImgTextSoju>
                          <SwiperImgSoju className='ImageImg' src={data.img} bgImg={data.img} />
                        </SwiperImageSoju>
                      </SwiperRow>
                    </SwiperSlide>
                  ))}
                </Swiper>
                </ProductsSlideContent>
              </ProductsSlideWrapper>
              </ProductsSlideContainerSoju>
            </ModalContent>
            <CloseModalButton onClick={setShowModal}/>
          </ModalWrapper>
        </>
      ) : null}
    </>
  )
}

export default Modal