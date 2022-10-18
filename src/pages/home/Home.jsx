import React from "react"
import styled from "styled-components"

const StyledMainImg = styled.div`
  width: 90%;
  max-height: 230px;
  text-align: center;
  margin: auto;
`

const StyledH1 = styled.h1`
  text-align: center;
`

function Home() {
  return (
    <StyledMainImg>
      <StyledH1>Chez vous, partout et ailleurs</StyledH1>
    </StyledMainImg>
  )
}

export default Home
