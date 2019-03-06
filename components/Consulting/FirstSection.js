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
        title="Consulting"
        subtitle="Fast and effective diagnosis as the stepping stone for a successful M&A deal, maximizing value creation to our clients."
        text="At Tera we go beyond Mergers and Acquisitions, we start real value creation before any buy or sell offer is made. Our consulting approach is focused on quick wins - performance improvements that can be rapidly made, to a higher or lesser degree, in EVERY single company. Our proprietary methodology deliver value within weeks by identifying performance improvement opportunities, mapping and ranking options, and putting together an operational plan for implementation. Results are measured and the company gets prepared for extracting maximum value in an M&A transaction."
      />
    </Wrapper>
  );
}

export default (FirstSection);
