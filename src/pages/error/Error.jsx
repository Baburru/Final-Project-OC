import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../../styles/Error.css';

const ErrorLink = styled(Link)`
  padding: 15px;
  color: #ff6060;
  text-decoration-line: underline;
  font-size: 110%;
`;

const ErrorH1 = styled.h1`
  font-size: 1500%;
  color: #ff6060;
  margin: auto;
`;

const ErrorH2 = styled.h2`
  color: #ff6060;
  font-size: 200%;
  margin-bottom: 120px;
`;

export default function Error() {
  return (
    <div className="Error">
      <ErrorH1>404</ErrorH1>
      <ErrorH2>Oups ! La page que vous cherchez n'existe pas.</ErrorH2>
      <ErrorLink to="/">Retourner à la page d'accueil</ErrorLink>
    </div>
  );
}
