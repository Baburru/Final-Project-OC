import React from "react"
import picture from "../../assets/LOGO.png"
import { Link } from "react-router-dom"
import styled from "styled-components"
import "../../styles/Header.css"

const StyledLink = styled(Link)`
  padding: 15px;
  color: #ff6060;
  text-decoration-line: none;
  font-size: 120%;
`

const StyledImg = styled.img`
  max-width: 211px;
  max-height: 68px;
`

export default function Header() {
  return (
    <div className="header">
      <StyledImg src={picture} alt="kasa logo" />
      <nav>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/about">A propos</StyledLink>
      </nav>
    </div>
  )
}
