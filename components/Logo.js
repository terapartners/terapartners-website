import React from 'react';
// import ImageParallax from '../Home/ImageParallax';
import styled from 'styled-components';
import Anime from 'react-anime';
import { withRouter } from 'next/router';

const Img = styled.img`
  width: 100px;
  @media (max-width: 767px) {
    margin-left: 20px;
  }
`;

function Logo() {
  return (
    <Anime
      opacity={[0, 1]}
      easing="easeOutExpo"
      duration={4000}
      delay={(el, i) => 1000 + 100 * i}
      key={2222 + Date.now()}
    >
      <Img src="/static/logo.png" />
    </Anime>
  );
}

export default withRouter(Logo);
