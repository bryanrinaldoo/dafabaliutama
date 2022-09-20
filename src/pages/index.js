import React, { useState } from 'react'
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar'
import Products from '../components/Products';
import Sidebar from '../components/Sidebar'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toogle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toogle={toogle}/>
      <Navbar toogle={toogle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Products />
      <Footer />
    </>
  )
}

export default Home