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
            <NavItem><NavLinks to='about'>About</NavLinks></NavItem>
            <NavItem><NavLinks to='services'>Services</NavLinks></NavItem>
            <NavItem><NavLinks to='products'>Products</NavLinks></NavItem>
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