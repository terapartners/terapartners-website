import React from 'react';
import styled from 'styled-components';

import TextComponent from '../TextComponent';
import ColumnComponent from '../ColumnComponent';

const Wrapper = styled.div`
`;

function SecondSection(/* props */) {
  return (
    <Wrapper>
      <TextComponent
        title="We Make it Happen"
      />
      <ColumnComponent
        columns={3}
        contents={[
          'Mergers & Acquisitions is a hard undertake, often conducted in an uncertain environment with many moving parts and always subject to a less than ideal time constraint. It is a challenge for the experienced and we honour it: at Tera, seasoned professionals are involved from kickoff meeting to close dinner, in every project.',
          'Our senior team advise on all aspects of buy-side and sell-side M&A. We conduct target screening, business plan building, valuation analysis, investment thesis, negotiation, due diligence, financial strategy for acquisition and post-merger integration.',
          'As part of our commitment with value creation to our clients, we also provide strategic and financial advice. We leverage technology, creating management reports that helps owners and managers make best decisions. We advise in strategic matters, helping companies navigate a fast-changing competitive landscape. Value is created to our clients even before any offer is made in the context of the deal itself.',
        ]}
      />
    </Wrapper>
  );
}

export default (SecondSection);
