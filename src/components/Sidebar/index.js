import React from 'react';
import { SidebarContainer, CloseIcon, Icon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';


const Sidebar = ({isOpen, toogle}) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toogle} >
        <Icon onClick={toogle} >
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to='about' onClick={toogle}> About </SidebarLink>
            <SidebarLink to='services' onClick={toogle}> Services </SidebarLink>
            <SidebarLink to='products' onClick={toogle}> Products </SidebarLink>
            <SidebarLink to='faq' onClick={toogle}> FAQ </SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
        <SideBtnWrap>
          <SidebarRoute href="https://www.WordPress.com" target="_blank"> Logo </SidebarRoute>
        </SideBtnWrap>
      </SidebarContainer>
    </>
  )
}

export default Sidebar