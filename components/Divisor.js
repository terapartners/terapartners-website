import React from 'react';
import styled from 'styled-components';
import Parallax from './Parallax';

const Wrapper = styled.div`
  margin-top: 70px;
`;

function Divisor(props) {
  const {
    parallaxHeight, width, marginTop, marginLeft, src,
  } = props;
  return (
    <Wrapper>
      <Parallax
        parallaxHeight={parallaxHeight}
        width={width}
        marginTop={marginTop}
        marginLeft={marginLeft}
        src={src}
      />
    </Wrapper>
  );
}

export default (Divisor);
