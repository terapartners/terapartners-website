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
        title="Restructuring"
        subtitle="We have the expertise to help companies in the search of optimal capital structure."
        text="Our highly skilled and senior team advises companies with sub-optimal capital structure both in the renegotiation of debts’ terms and conditions and also in the search for equity and mezzanine investors. Tera restructuring advisory always contemplates debt and equity profile analysis, construction and analysis of scenarios, planning and negotiation. We are also ready to help our clients in developing extra-judicial or judicial (Chapter 11) recovery plans, always looking not only for a viable alternative for creditors, but also for the alternative that maximizes shareholder’s value."
      />
    </Wrapper>
  );
}

export default (FirstSection);
