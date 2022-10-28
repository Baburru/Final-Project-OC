import React from 'react';
import styled from 'styled-components';

import AboutDropdown from '../../components/dropdown/AboutDropdown';

import dropdowndata from '../../dropdown.json';

import BannerImg from '../../assets/about_img.jpg';

const AboutBanner = styled.div`
  width: 90%;
  position: relative;
  text-align: center;
  max-height: 180px;
  height: auto;
  margin: auto;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${BannerImg});
  border-radius: 25px;
  margin-bottom: 30px;
`;

const AboutBannerBackground = styled.div`
  width: 100%;
  height: 180px;
  background-color: #000000;
  opacity: 0.3;
  border-radius: 25px;
`;

const AboutMainContent = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 70px;
`;

export default function About() {
  return (
    <div>
      <AboutBanner>
        <AboutBannerBackground />
      </AboutBanner>
      <AboutMainContent>
        {dropdowndata.map((subject, index) => (
          <AboutDropdown
            key={index}
            title={subject.title}
            content={subject.content}
          />
        ))}
      </AboutMainContent>
    </div>
  );
}
