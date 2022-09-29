import React, { useState } from 'react'
import AboutSection from '../components/AboutSection';
import Accordion from '../components/Accordion';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo } from '../components/InfoSection/Data';
import Modal from '../components/Modal';
import Navbar from '../components/Navbar'
import Products from '../components/Products';
import Sidebar from '../components/Sidebar'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toogle = () =>{
    setIsOpen(!isOpen);
  }
  const [showModal, setShowModal] = useState(false)
  const toogleModal = () =>{
    setShowModal(!showModal);
  }
  const [dataModal, setDataModal] = useState()
  const openModal = (data) =>{
    toogleModal();
    setDataModal(data);
    console.log(data);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toogle={toogle}/>
      <Navbar toogle={toogle} />
      <HeroSection />
      <AboutSection />
      <InfoSection {...homeObjTwo} />
      <Products openModal={openModal}/>
      <Accordion />
      <Footer />
      <Modal datas={dataModal} showModal={showModal} setShowModal={toogleModal} />
    </>
  )
}

export default Home