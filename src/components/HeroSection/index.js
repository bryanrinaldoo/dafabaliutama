import React, { useState } from 'react';
import logo from '../../static/logo.png';
import { HeroContainer, HeroBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import { Button } from '../ButtonElement';
const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () =>{
    setHover(!hover)
  }

  return (
    <HeroContainer id='home'>
      <HeroBg>
        <img className='logoHome' src={logo} alt="logo"></img>
      </HeroBg>
      <HeroContent>
        <HeroH1>PT Dafa Bali Utama</HeroH1>
        <HeroP>Perusahaan yang bergerang di bidang produksi minuman beralkohol golongan C ( kadar alokohol {'>'} 20% ). Berdiri pada tahun 2010 dengan lokasi pabrik di Tbanan, Bali.</HeroP>
        <HeroBtnWrapper>
          <Button to='about' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
            About us {hover ?  <ArrowRight /> : <ArrowForward /> }
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection