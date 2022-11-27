import React, { useState } from 'react'
import AboutSection from '../components/AboutSection';
import Accordion from '../components/Accordion';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjTwo } from '../components/InfoSection/Data';
// import Modal from '../components/Modal';
import Navbar from '../components/Navbar'
import Events from '../components/Events';
import ProductsSlide from '../components/ProductsSlide';
import Sidebar from '../components/Sidebar'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toogle = () =>{
    setIsOpen(!isOpen);
  }
  // const [showModal, setShowModal] = useState(false)
  // const toogleModal = () =>{
  //   const body = document.body;
  //   (!showModal) ? body.style.overflow = 'hidden' : body.style.overflow = ''

  //   setShowModal(!showModal);
  // }
  // const [dataModal, setDataModal] = useState()
  // const openModal = (data) =>{
  //   toogleModal();
  //   setDataModal(data);
  //   console.log(data);
  // }
  return (
    <>
      <Sidebar isOpen={isOpen} toogle={toogle}/>
      <Navbar toogle={toogle} />
      <HeroSection />
      <AboutSection />
      <InfoSection {...homeObjTwo} />
      <ProductsSlide/>
      <Events />
      <Accordion />
      <Footer />
      {/* <Modal datas={dataModal} showModal={showModal} setShowModal={toogleModal} /> */}
    </>
  )
}

export default Home