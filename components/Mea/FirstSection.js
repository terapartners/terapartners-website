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
        title="Mergers and Acquisitions"
        subtitle="Our approach to Mergers and Acquisitions leverage innovation, technology and personal availability."
        text="From origination to execution, Tera employs our senior partners experienced judgement to deliver the best advice. Our hands-on approach and commitment to our clients needs and expectations deliver the best results. Value is always created to our clients and that is our only aspiration."
      />
    </Wrapper>
  );
}

export default (FirstSection);
