import React, { useState } from 'react'
import AboutSection from '../components/AboutSection';
import Accordion from '../components/Accordion';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { companyPage, companySlideImage, sojuPage } from '../components/InfoSection/Data';
import Modal from '../components/Modal';
// import Modal from '../components/Modal';
import Navbar from '../components/Navbar'
import ProductsSlide from '../components/ProductsSlide';
import Sidebar from '../components/Sidebar'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toogle = () =>{
    setIsOpen(!isOpen);
  }
  const [showModal, setShowModal] = useState(false)
  const toogleModal = () =>{
    const body = document.body;
    (!showModal) ? body.style.overflow = 'hidden' : body.style.overflow = ''

    setShowModal(!showModal);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toogle={toogle}/>
      <Navbar toogle={toogle} />
      <HeroSection />
      <AboutSection />
      <InfoSection {...companyPage} />
      <ProductsSlide/>
      <InfoSection {...sojuPage} openModal={toogleModal}/>
      {/* <Events /> */}
      <Accordion />
      <Footer />
      <Modal showModal={showModal} setShowModal={toogleModal} />
    </>
  )
}

export default Home