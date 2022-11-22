import React from 'react';
import logo from '../../static/logo.png'
import { FooterContainer, FooterWrap, FooterLinkWrap, FooterLinkItem, FooterLinkTitle, FooterLink, MailIcon, PhoneIcon, FooterRights } from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkWrap>
          <FooterLinkItem>
            <img src={logo} alt="logo"/>
          </FooterLinkItem>
          <FooterLinkItem>
            <FooterLinkTitle>Contact</FooterLinkTitle>
              <FooterLink><MailIcon /> dafabaliutamajkt@gmail.com</FooterLink>
              <FooterLink><PhoneIcon /> 0878-8017-1188</FooterLink>
          </FooterLinkItem>
          <FooterLinkItem>
            <FooterLinkTitle>Address</FooterLinkTitle>
              <FooterLink>Jl. Jepun, Dauh Peken, Kec. Tabanan, Kabupaten Tabanan, Bali 82113</FooterLink>
          </FooterLinkItem>
        </FooterLinkWrap>
        <FooterRights>© 2022 PT Dafa Bali Utama</FooterRights>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer