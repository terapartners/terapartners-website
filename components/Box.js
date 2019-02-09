import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import Link from 'next/link';

const ImgWrapper = styled.div`
  max-width: ${props => props.width};
  max-height: ${props => props.height};
  overflow: hidden;
  position: relative;
  margin: 0 auto;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: #005f9e;
  ${ImgWrapper}:hover & {
    opacity: 0.7;
  }
`;

const BoxText = styled.span`
  font-size: 30px;
  font-family: 'Raleway';
  color: white;
  display: block;
  margin: 0 auto;
  text-align: left;
  position: absolute;
  width: 200px;
  top: 50%;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  ${ImgWrapper}:hover & {
    opacity: 1;
  }
`;
const LearnMore = styled.a`
  font-size: 18px;
  font-family: 'Raleway';
  font-weight: 600;
  text-align: left;
  color: white;
  cursor: pointer;
  &:hover {
    font-family: 'Raleway';
    font-weight: 700;
    text-decoration: underline;
  }
`;

const Img = styled.img`
  width: 100%;
  display: block;
  filter: grayscale(100%) brightness(100%);
  -webkit-filter: grayscale(100%) brightness(100%);
`;

export default function Box(props) {
  const {
    delay, width, height, src, link, txt,
  } = props;

  return (
    <ScrollAnimation delay={delay} style={{ width: '100%', position: 'relative' }} animateOnce animateIn="fadeIn">
      <ImgWrapper width={width} height={height}>
        <Img src={src} />
        <Overlay />
        <Link href={link}>
          <BoxText>
            {txt}
            <br />
            <LearnMore>Learn More</LearnMore>
          </BoxText>
        </Link>
      </ImgWrapper>
    </ScrollAnimation>
  );
}
