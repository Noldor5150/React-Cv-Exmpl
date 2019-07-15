import React from 'react';

import Title from '../Title';
import pictureOfMe from '../../../images/person.jpg';
import blueStroke from '../../../images/brush-stroke-three.png';
import './index.scss';

function Header() {
  return (
    <header className="Header">
      <div className="Header--image">
        <img src={pictureOfMe} alt="My headshot" />
      </div>
      <div className="Header--title">
        <Title>Jerry Spotter</Title>
        <Title level="3" weightClass="font-weight-400" colorClass="color-purple-light">
          The Nightmare of Tom
        </Title>
      </div>
      <img src={blueStroke} alt="Paint brush stroke illustration" className="Header--decoration" />
    </header>
  );
}

export default Header;
