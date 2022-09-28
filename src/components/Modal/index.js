import React from 'react'
import {Background, ModalWrapper, ModalContent, CloseModalButton, SwiperImg, SwiperTitle, SwiperContent} from './ModalElements'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";
const Modal = ({ showModal, setShowModal, datas}) => {
  return (
    <>
      {showModal ? (
        <>
        <Background onClick={setShowModal}>
        </Background>
          <ModalWrapper>
            <ModalContent>
            <Swiper navigation={true} modules={[Navigation]} className="swiper">
              {datas.map((data) => (
                <SwiperSlide>
                  <SwiperImg src={data.img} />
                  <SwiperTitle>{data.name}</SwiperTitle>
                  <SwiperContent>{data.desc}</SwiperContent>
                </SwiperSlide>
              ))}
            </Swiper>
            </ModalContent>
            <CloseModalButton onClick={setShowModal}/>
          </ModalWrapper>
        </>
      ) : null}
    </>
  )
}

export default Modal