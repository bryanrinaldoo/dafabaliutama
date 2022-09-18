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
          </SidebarMenu>
        </SidebarWrapper>
        <SideBtnWrap>
          <SidebarRoute to='/'> Logo </SidebarRoute>
        </SideBtnWrap>
      </SidebarContainer>
    </>
  )
}

export default Sidebar