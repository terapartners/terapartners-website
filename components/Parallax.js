import React from 'react';
// import ImageParallax from '../Home/ImageParallax';
import styled from 'styled-components';
import { Parallax, Background } from 'react-parallax';

const Img = styled.img`
  -webkit-filter: grayscale(100%) brightness(110%) contrast(130%);
  filter: grayscale(100%) brightness(110%) contrast(130%);
  /* width: 100vw; */
  width: ${props => props.width};
  margin-top: ${props => props.marginTop};
`;


function ParallaxComponent(props) {
  const {
    parallaxHeight, marginTop, width, src,
  } = props;
  return (
    <Parallax style={{ height: parallaxHeight }} strength={1000}>
      <Background className="custom-bg">
        <Img marginTop={marginTop} width={width} src={src} />
      </Background>
    </Parallax>
  );
}

export default (ParallaxComponent);
