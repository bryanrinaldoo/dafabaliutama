import React from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';
import logo from './logo.png';
import {FaBars} from 'react-icons/fa';

const Navbar = ({ toogle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
            <img className='logoNav' src={logo}></img>
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
            <NavBtnLink to='/contact'>Contact Us!</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar