import React from 'react';
import styled from 'styled-components';
import 'animate.css/animate.min.css';
import TextComponent from '../TextComponent';

const Wrapper = styled.div`
`;

function FirstSection(/* props */) {
  return (
    <Wrapper>
      <TextComponent
        title="Startups"
        subtitle="Great ideas must include top execution"
        text="We know how startup founders mindset work. Day-to-day business is hard enough for founders to be left aside while executing strategic moves. Especially fundraising but also overall startup execution, including technology and sales. Tera Partners has a team of specialists to help your startup walk every strategic step needed to reach your vision."
      />
    </Wrapper>
  );
}

export default (FirstSection);
