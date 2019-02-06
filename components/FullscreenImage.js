import React from 'react';
import styled from 'styled-components';
import Anime from './Anime';


const Wrapper = styled.div`
 height: 100%;
 z-index: -1;
`;

// const TextWrapper = styled.h1`
//   font-size: 110px;
//   text-transform: uppercase;
//   text-shadow: 10px 10px 50px #000;
// `;

const Img = styled.img`
  max-width: 2500px;
  vertical-align: middle;
  height: ${props => (props.height ? props.height : '')};
  width: ${props => (props.width ? props.width : '')};
  position: relative;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: ${props => (props.left ? props.left : 0)};

}
`;

const BackgroundImg = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-filter: grayscale(100%) brightness(130%);
  filter: grayscale(100%) brightness(130%);
  transition: 1s;

  &:hover {
  filter: none;
  -webkit-filter: grayscale(0%) brightness(100%);
  transition: 1s;
`;

// const BackgroundContent = styled.div`
//   position: relative;
// `;

const BackgroundChildren = styled.div`
  /* position: absolute; */
  transform-style: preserve-3d;
  backface-visibility: hidden;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-image: ${() => 'linear-gradient(black, black)'}
`;

export class FullscreenImage extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      isVisible: false, // eslint-disable-line react/no-unused-state
    };
  }

  render() {
    const {
      url, gradient, width, src, height, left,
    } = this.props;
    // const { isVisible } = this.state;
    return (
      <Wrapper>
        <BackgroundImg url={url}>
          <BackgroundChildren gradient={gradient}>
            <div>
              <Anime
                opacity={[0, 1]}
                easing="easeOutExpo"
                duration={2000}
                delay={(el, i) => 1000 + 100 * i}
                key={11 + Date.now()}
              >
                <Img
                  width={width}
                  src={src}
                  height={height}
                  left={left}
                  alt="Background"
                />
              </Anime>
            </div>
          </BackgroundChildren>
        </BackgroundImg>
      </Wrapper>
    );
  }
}

export default (FullscreenImage);
