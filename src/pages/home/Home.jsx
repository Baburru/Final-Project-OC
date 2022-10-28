import React from 'react';
import styled from 'styled-components';
import HomeCard from '../../components/HomeCard/HomeCard';

import data from '../../data.json';

import BannerImg from '../../assets/Home_img.png';

const HomeBanner = styled.div`
  width: 90%;
  position: relative;
  text-align: center;
  max-height: 180px;
  height: auto;
  margin: auto;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${BannerImg});
  border-radius: 25px;
  margin-bottom: 30px;
`;

const HomeH1 = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;
  font-weight: 500;
  font-size: calc(20px + 1.5vw);
  color: white;
  width: 100%;
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -100%);
`;

const HomeBannerBackground = styled.div`
  width: 100%;
  height: 180px;
  background-color: #000000;
  opacity: 0.4;
  border-radius: 25px;
`;

const HomeMainBackground = styled.div`
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  background: #f7f7f7;
  border-radius: 25px;
  width: 90%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
`;

function Home() {
  console.log(data);
  return (
    <div className="HomeBody">
      <HomeBanner>
        <HomeBannerBackground />
        <HomeH1>Chez vous, partout et ailleurs</HomeH1>
      </HomeBanner>
      <HomeMainBackground>
        {data.map((house, index) => (
          <HomeCard
            key={`${house.id}-${index}`}
            title={house.title}
            picture={house.cover}
          />
        ))}
      </HomeMainBackground>
    </div>
  );
}

export default Home;
