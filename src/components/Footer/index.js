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
              <FooterLink><MailIcon /> Email</FooterLink>
              <FooterLink><PhoneIcon /> Nomor</FooterLink>
          </FooterLinkItem>
          <FooterLinkItem>
            <FooterLinkTitle>Address</FooterLinkTitle>
              <FooterLink>Aliqua labore magna elit tempor cillum culpa reprehenderit in irure voluptate tempor nostrud.</FooterLink>
          </FooterLinkItem>
        </FooterLinkWrap>
        <FooterRights>© 2022 PT Dafa Bali Utama</FooterRights>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer