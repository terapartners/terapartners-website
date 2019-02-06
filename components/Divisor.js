import React from 'react';
import styled from 'styled-components';
import Parallax from './Parallax';

const Wrapper = styled.div`
  margin-top: 70px;
`;

function Divisor(props) {
  const {
    parallaxHeight, width, marginTop, src,
  } = props;
  return (
    <Wrapper>
      <Parallax
        parallaxHeight={parallaxHeight}
        width={width}
        marginTop={marginTop}
        src={src}
      />
    </Wrapper>
  );
}

export default (Divisor);
