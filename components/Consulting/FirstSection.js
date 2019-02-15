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
        subtitle="Tera partners is a results-driven organisation that provides the highest level of expertise and advice in a large variety of sectors."
        text="We are a boutique advisory firm specializing in cross-border mergers and acquisitions of innovative companies. With extensive deal-making experience, we pay a great deal of attention to details and leverage our high-quality relationships with CEOs, corporate development executives, and private equity firms worldwide to assist our clients in accelerating their growth and exploring strategic options in today’s world, where technology changes in the blink of an eye. Organised in 4 Divisions: Mergers and Acquisitions, Restructuring, Consulting and Startups, the company operates globally providing services to mid-market to fortune 500 companies."
      />
    </Wrapper>
  );
}

export default (FirstSection);
