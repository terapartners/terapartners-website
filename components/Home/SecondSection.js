import React from 'react';
import styled from 'styled-components';

import TextComponent from '../TextComponent';
import ColumnComponent from '../ColumnComponent';

const Wrapper = styled.div`
`;

const people = [{
  weight: Math.random(),
  src: '/static/davidmug.png',
  overlaySrc: '/static/davidmugover.png',
  name: 'David',
  surname: 'Oliveira',
  content: 'Executive and entrepreneur with 15+ years experience in banking, management consulting and financial advisory. Has held leadership positions at Suzano, Alix Partners, Olimpia Partners, Standard Bank, Banco Brasil Plural and Stern Stewart. MSc in Business (Stanford), MSc in Economics (Insper), BA in Business (USP), CFA charterholder.',
}, {
  weight: Math.random(),
  src: '/static/fabianomug.png',
  overlaySrc: '/static/fabianomugover.png',
  name: 'Fabiano',
  surname: 'Mansur',
  content: 'Accomplished finance executive with 15+ years experience in banking, private equity, restructuring and financial advisory. Partner at Banco Brasil Plural responsible for the real estate sector, Co-founded SPF Investimentos and has held leadership positions at Matlin Patterson and Banco Itaú BBA. BA in Business (Insper, graduated summa cum laude).',
}, {
  weight: Math.random(),
  src: '/static/pedromug.png',
  overlaySrc: '/static/pedromugover.png',
  name: 'Pedro',
  surname: 'Cavalcante',
  content: 'Financial and tech entrepreneur with 15+ years experience in high technology and banking. Founded FINTTA and was a tech advisor to VYA, Routeasy and Estudando.com. BS in Computer Engineering (Poli-USP)',
}];
people.sort((a, b) => (a.weight < b.weight ? -1 : 1));

function SecondSection() {
  // do not render server-side
  if (typeof (window) === 'undefined') {
    return (
      <Wrapper>
        <TextComponent
          title="Meet Our Partners"
        />
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <TextComponent
        title="Meet Our Partners"
      />
      <ColumnComponent
        data={people}
      />
    </Wrapper>
  );
}

export default (SecondSection);
