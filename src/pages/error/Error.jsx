import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import "../../styles/Error.css"

const StyledLink = styled(Link)`
  padding: 15px;
  color: #ff6060;
  text-decoration-line: underline;
  font-size: 110%;
`

const StyledH1 = styled.h1`
  font-size: 1500%;
  color: #ff6060;
  margin: auto;
`

const StyledH2 = styled.h2`
  color: #ff6060;
  font-size: 200%;
  margin-bottom: 120px;
`

export default function Error() {
  return (
    <div className="Error">
      <StyledH1>404</StyledH1>
      <StyledH2>Oups ! La page que vous cherchez n'existe pas.</StyledH2>
      <StyledLink to="/">Retourner à la page d'accueil</StyledLink>
    </div>
  )
}
