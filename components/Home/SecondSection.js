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
        srcs={['/static/pedromug.png', '/static/davidmug.png', '/static/fabianomug.png']}
        overlaySrcs={['/static/pedromugover.png', '/static/davidmugover.png', '/static/fabianomugover.png']}
        names={['David', 'Fabiano', 'Pedro']}
        surnames={['Cavalcante', 'Oliveira', 'Mansur']}
        contents={[
          'Executive and entrepreneur with 15+ years experience in banking, management consulting and financial advisory. Has held leadership positions at Suzano, Alix Partners, Olimpia Partners, Standard Bank, Banco Brasil Plural and Stern Stewart. MSc in Business (Stanford), MSc in Economics (Insper), BA in Business (USP), CFA charterholder.',
          'Accomplished finance executive with 15+ years experience in banking, private equity, restructuring and financial advisory. Partner at Banco Brasil Plural responsible for the real estate sector, Co-founded SPF Investimentos and has held leadership positions at Matlin Patterson and Banco Itaú BBA. BA in Business (Insper, graduated summa cum laude).',
          'Financial and tech entrepreneur with 15+ years experience in high technology and banking. Founded FINTTA and was a tech advisor to VYA, Routeasy and Estudando.com. BS in Computer Engineering (Poli-USP)',
        ]}
      />
    </Wrapper>
  );
}

export default (SecondSection);
