import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import arrow from '../../assets/arrow.svg';

// DD = DropDown

const DDButton = styled.button`
  border: none;
  background: none;
`;

const DDHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #ff6060;
  border-radius: 10px;
  position: relative;
  z-index: 3;
  margin-top: 20px;
`;

const DDContent = styled.p`
  background-color: #f7f7f7;
  color: #ff6060;
  padding: 15px;
  padding-bottom: 20px;
  padding-top: 10px;
  border-radius: 5px;
  font-size: calc(16px + 0.4vw);
  font-weight: lighter;
  margin-bottom: 0px;
`;

const DDTitle = styled.h2`
  color: white;
  margin: 10px;
  font-weight: lighter;
  margin-left: 20px;
`;

const DDArrow = styled.img`
  margin-right: 30px;
`;

export default function AboutDropdown({ title, content }) {
  //Sate of the dropdown (open/close)
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <div>
      <DDHeader>
        <DDTitle>{title}</DDTitle>
        <DDButton onClick={() => setIsOpen(false)}>
          <DDArrow src={arrow} alt="arrow-button" />
        </DDButton>
      </DDHeader>
      <DDContent>{content}</DDContent>
    </div>
  ) : (
    <div>
      <DDHeader>
        <DDTitle>{title}</DDTitle>
        <DDButton onClick={() => setIsOpen(true)}>
          <DDArrow
            src={arrow}
            alt="arrow-button"
            style={{ transform: 'rotate(180deg)' }}
          />
        </DDButton>
      </DDHeader>
    </div>
  );
}
