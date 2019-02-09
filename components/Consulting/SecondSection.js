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
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam tristique ex vel luctus. Aenean rutrum pulvinar pulvinar. Donec sit amet tsem eu lacus accumsan hendrerit eu non justo. Proin a quam dignissim, vulputate velit id, porttitor ex. Nullam vitae urna vitae augue molestie euismod nec cursus erat. Cras vel sodales elit, vitae pellentesque ligula. Morbi ac purus eget lectus fermentum faucibus. Pellentesque mattis ex consequat ex tincidunt pulvinar.',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam tristique ex vel luctus. Aenean rutrum pulvinar pulvinar. Donec sit amet tsem eu lacus accumsan hendrerit eu non justo. Proin a quam dignissim, vulputate velit id, porttitor ex. Nullam vitae urna vitae augue molestie euismod nec cursus erat. Cras vel sodales elit, vitae pellentesque ligula. Morbi ac purus eget lectus fermentum faucibus. Pellentesque mattis ex consequat ex tincidunt pulvinar.',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam tristique ex vel luctus. Aenean rutrum pulvinar pulvinar. Donec sit amet tsem eu lacus accumsan hendrerit eu non justo. Proin a quam dignissim, vulputate velit id, porttitor ex. Nullam vitae urna vitae augue molestie euismod nec cursus erat. Cras vel sodales elit, vitae pellentesque ligula. Morbi ac purus eget lectus fermentum faucibus. Pellentesque mattis ex consequat ex tincidunt pulvinar.',
        ]}
      />
    </Wrapper>
  );
}

export default (SecondSection);
