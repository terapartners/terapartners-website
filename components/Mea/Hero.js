import React from 'react';
// import ImageParallax from '../Home/ImageParallax';
import styled from 'styled-components';
import Anime from 'react-anime';
import Parallax from '../Parallax';

const TextWrapper = styled.div`
  position: absolute;
  color: white;
  font-size: 25px;
  line-height: 40px;
  top: 700px;
  left: 156px;
  z-index: 1;
  font-family: Rajdhani;
`;

function Hero(/* props */) {
  return (
    <div style={{ height: '100%' }}>
      <TextWrapper>
        <Anime
          translateX={[40, 0]}
          translateZ={0}
          opacity={[0, 1]}
          easing="easeOutExpo"
          duration={1200}
          delay={(el, i) => 2000 + 500 * i}
          key={11 + Date.now()}
        >
          <span />
          <div style={{ display: '' }} />
          <span />
        </Anime>
      </TextWrapper>
      <Parallax
        parallaxHeight="820px"
        width="1800px"
        marginTop="200px"
        marginLeft="400px"
        src="/static/hero2.jpg"
      />
    </div>
  );
}

export default (Hero);
