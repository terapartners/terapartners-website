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
          'Every startup reaches a point where sales are good, product has a nice acceptance among clients but growth rates are steady, perhaps even declining. Should you go for an additional round of financing but show potential investors the negative trend? Should you use every penny left on testing growth strategies and risk losing everything you\'ve built so far? These questions are recurring among startups and we have years of experience and plenty of cases to deal with this very recurring issue along with you and your team.',
          'The set of skills necessary to successfully run a business and to successfully raise funding have almost zero in common. Many times have we seen founders struggling to deal with spreadsheets, pitching and closing deals even tough they were stellar at product development, tête-à-tête sales and/or inspiring their teams. We are experts at highlighting these positive points to investors (batteries included: boring financial modeling and pitch storytelling) in words they\'ll more easily understand why they should invest on your startup right away.',
          'Ever wondered why some say failed founders are most likely to succeed in their next venture than unexperienced ones? That\'s because running a startup - especially a tech one - is totally different from running any other kind of business. To the point of even being counterintuitive sometimes. So the ones who have had experience with running a startup before are at advantage when running the next one. The good news is: some of these counterintuitive issues are well known. Our team has experienced many of these issues and may help you and your team avoid losing time by implementing simple mindset, organizational and execution changes to deal with them.',
        ]}
      />
    </Wrapper>
  );
}

export default (SecondSection);
