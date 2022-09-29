import React from 'react'
import { AboutContainer, AboutH1, AboutWrapper, AboutCard, AboutImg, AboutTitle,   } from './AboutElements'
import visionImg from '../../static/img1.svg'
import missionImg from '../../static/img2.svg'
import valueImg from '../../static/img3.svg'

const AboutSection = () => {
  return (
    <>
      <AboutContainer id='about'>
        <AboutH1>About us</AboutH1>
        <AboutWrapper>
          <AboutCard>
            <AboutImg src={visionImg}/>
            <AboutTitle>Visi</AboutTitle>
            <p>Menjadi partner Bisnis terpercaya</p>
          </AboutCard>
          <AboutCard>
            <AboutImg src={missionImg}/>
            <AboutTitle>Misi</AboutTitle>
            <p>Menyediakan Produk kualitas terbaik bagi konsumen</p>
          </AboutCard>
          <AboutCard>
            <AboutImg src={valueImg}/>
            <AboutTitle>Value</AboutTitle>
            <p>Integritas, Kemitraan, Fokus pada pelanggan</p>
          </AboutCard>
          
        </AboutWrapper>
      </AboutContainer>
    </>
  )
}

export default AboutSection