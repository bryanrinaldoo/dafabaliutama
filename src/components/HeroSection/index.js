import React, { useState } from 'react';
import logo from '../../static/logo.png';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import { Button } from '../ButtonElement';
const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () =>{
    setHover(!hover)
  }

  return (
    <HeroContainer>
      <HeroBg>
        <img className='logoHome' src={logo}></img>
      </HeroBg>
      <HeroContent>
        <HeroH1>PT Dafa Bali Utama</HeroH1>
        <HeroP>perusahaan yang bergerak di bidang Excepteur veniam irure enim sint consequat velit elit cupidatat culpa velit ipsum laboris fugiat. Quis occaecat irure ullamco proident. Sit excepteur aute consequat sunt cupidatat proident velit cillum sint ad.</HeroP>
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