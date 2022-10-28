import React from 'react';
import logo from '../../assets/LOGO.svg';
import styled from 'styled-components';

const FooterMain = styled.footer`
  margin-top: auto;
  padding-top: 40px;
  padding-bottom: 30px;
  background-color: #000000;
  text-align: center;
`;

const FooterText = styled.h3`
  font-weight: lighter;
  font-size: calc(10px + 0.8vw);
  color: white;
`;

const FooterImg = styled.img`
  filter: brightness(0) invert(1);
`;

export default function Footer() {
  return (
    <FooterMain>
      <FooterImg src={logo} alt="kasa logo" />
      <FooterText>@ 2020 Kasa, All right reserved</FooterText>
    </FooterMain>
  );
}
