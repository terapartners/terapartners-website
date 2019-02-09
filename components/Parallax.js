import React from 'react';
// import ImageParallax from '../Home/ImageParallax';
import styled from 'styled-components';
import { Parallax, Background } from 'react-parallax';

const Img = styled.img`
  -webkit-filter: grayscale(100%) brightness(110%) contrast(130%);
  filter: grayscale(100%) brightness(110%) contrast(130%);
  /* width: 100vw; */
  max-width: ${props => props.width};
  min-width: 100vw;
  margin-top: ${props => props.marginTop};
  @media (max-width: 767px) {
    margin-left: ${props => props.marginLeft};
  }
`;


function ParallaxComponent(props) {
  const {
    parallaxHeight, marginTop, marginLeft, width, src,
  } = props;

  return (
    <Parallax style={{ height: parallaxHeight }} strength={1000}>
      <Background className="custom-bg">
        <Img marginTop={marginTop} marginLeft={marginLeft} width={width} src={src} />
      </Background>
    </Parallax>
  );
}

export default (ParallaxComponent);
