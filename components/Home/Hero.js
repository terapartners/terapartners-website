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
  top: 85vh;
  z-index: 1;
  font-family: Rajdhani;
  @media (min-width: 767px) {
    left: 156px;
  }
  @media (max-width: 767px) {
    text-align: center;
    width: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

function Hero() {
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
          <span>whatever your challenge might be</span>
          <div style={{ display: '' }} />
          <span>we have the inspiration, hard work and optimism to make it happen</span>
        </Anime>
      </TextWrapper>
      {/* <FullscreenImage
        src={'/static/hero2.jpg'}
        width={'100%'}
        url={'home'}
      /> */}
      <Parallax
        parallaxHeight="100vh"
        width="1800px"
        marginTop="450px"
        marginLeft="-800px"
        src="/static/hero.png"
      />
    </div>
  );
}

export default (Hero);
