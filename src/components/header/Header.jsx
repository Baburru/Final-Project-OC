import React from 'react';
import picture from '../../assets/LOGO.svg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../../styles/Header.css';

const HeaderLink = styled(Link)`
  padding: 15px;
  color: #ff6060;
  text-decoration-line: none;
  font-size: calc(15px + 1vw);
  margin-left: auto;
  margin-right: 0;
`;

const HeaderImg = styled.img`
  margin-left: 50px;
  width: 25%;
  height: 100%;
  margin-top: auto;
  margin-bottom: 20px;
  max-width: 200px;
`;

export default function Header() {
  return (
    <div className="header">
      <HeaderImg src={picture} alt="kasa logo" />
      <nav>
        <HeaderLink to="/">Accueil</HeaderLink>
        <HeaderLink to="/about">A propos</HeaderLink>
      </nav>
    </div>
  );
}
