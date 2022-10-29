import styled from "styled-components";
import { MdPhoneEnabled, MdMail } from 'react-icons/md';

export const FooterContainer = styled.footer`
  background-color: #111111;
`;

export const FooterWrap = styled.div`
  padding: 10px 24px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
  @media screen and (max-width: 820px){
    padding: 0
  }
`;

export const FooterLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 820px){
    padding-top: 32px;
  }
`;

export const FooterLinkWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 820px){
    padding-top: 32px;
    flex-direction: column;
    justify-content: center;
  }
`;

export const FooterLinkItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
  text-align: center;
  width: 160px;
  box-sizing: border-box;
  color: #fff;
  
  @media screen and (max-width: 420px){
    margin: 0;
    padding: 10px;
    width: 60%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover{
    color: var(--primary-color);
    transition: 0.3s ease-out;
  }
`;

export const PhoneIcon = styled(MdPhoneEnabled)`
  margin-right: 8px;
  font-size: 20px;
`;

export const MailIcon = styled(MdMail)`
  margin-right: 8px;
  font-size: 20px;
`;

export const FooterRights = styled.p`
  font-size: 14px;
  padding: 24px 0px;
  color: #fff;
`