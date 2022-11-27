import React from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';
import logo from '../../static/logo.png';
import {FaBars} from 'react-icons/fa';

const Navbar = ({ toogle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='home'>
            <img className='logoNav' src={logo} alt='logoCompany'></img>
          </NavLogo>
          <MobileIcon onClick={toogle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem><NavLinks to='about' spy={true} exact='true' offset={-80}>About</NavLinks></NavItem>
            <NavItem><NavLinks to='services' spy={true} exact='true' offset={-80}>Services</NavLinks></NavItem>
            <NavItem><NavLinks to='products' spy={true} exact='true' offset={-80}>Products</NavLinks></NavItem>
            <NavItem><NavLinks to='events' spy={true} exact='true' offset={-80}>Events</NavLinks></NavItem>
            <NavItem><NavLinks to='faq' spy={true} exact='true' offset={-80}>FAQ</NavLinks></NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink href="https://www.WordPress.com" target="_blank">Contact Us!</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar