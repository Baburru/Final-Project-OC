import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import '../../styles/HomeCard.css';

//HC = HomeCard

const HCMainDiv = styled.div`
  border-radius: 10px;
  position: relative;
  aspect-ratio: 1/1;
  width: 31%;
  margin-left: 2%;
  margin-bottom: 2%;
  height: width;
  background-color: #ffffff;
`;

const HCCardImg = styled.img`
  width: 100%;
  border-radius: 10px;
  aspect-ratio: 1/1;
  object-fit: cover;
`;

const HCCardH2 = styled.h2`
  font-size: calc(10px + 0.8vw);
  width: 60%;
  position: absolute;
  margin: 10px;
  bottom: 30px;
  color: white;
`;

function HomeCard({ picture, title }) {
  return (
    <HCMainDiv className="card-main">
      <div className="card-img-gradient">
        <HCCardImg src={picture} />
      </div>
      <HCCardH2>{title}</HCCardH2>
    </HCMainDiv>
  );
}

HomeCard.propTypes = {
  title: PropTypes.string,
  picture: PropTypes.string,
};

HomeCard.defaultProps = {
  title: '',
  picture: '',
};

export default HomeCard;
