import React from 'react';
import styled from 'styled-components';

import TextComponent from '../TextComponent';
import ColumnComponent from '../ColumnComponent';

const Wrapper = styled.div`
`;

function SecondSection() {
  return (
    <Wrapper>
      <TextComponent
        title="Meet Our Leaders"
      />
      <ColumnComponent
        columns={3}
        srcs={['/static/pedro.jpeg', '/static/placeholder.jpeg', '/static/placeholder.jpeg']}
        overlaySrcs={['/static/pedroover.png', '/static/placeholderover.png', '/static/placeholderover.png']}
        names={['Pedro', 'David', 'Fabiano']}
        surnames={['Cavalcante', 'Oliveira', 'Mansur']}
        contents={[
          'Financial and tech entrepreneur with 15+ years experience in high technology and banking. Founded FINTTA and was a tech advisor to VYA, Routeasy and Estudando.com. BS in Computer Engineering (Poli-USP)',
          'Executive and entrepreneur with 15+ years experience in banking, management consulting and financial advisory. Has held leadership positions at Suzano, Alix Partners, Olimpia Partners, Standard Bank, Banco Brasil Plural and Stern Stewart. MSc in Business (Stanford), MSc in Economics (Insper), BA in Business (USP), CFA charterholder.',
          'Accomplished finance executive with 15+ years experience in banking, private equity, restructuring and financial advisory. Partner at Banco Brasil Plural responsible for the real estate sector, Co-founded SPF Investimentos and has held leadership positions at Matlin Patterson and Banco Itaú BBA. BA in Business (Insper, graduated summa cum laude).',
        ]}
      />
    </Wrapper>
  );
}

export default (SecondSection);
