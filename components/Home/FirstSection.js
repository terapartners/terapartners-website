import React from 'react';
import styled from 'styled-components';
import 'animate.css/animate.min.css';
import TextComponent from '../TextComponent';
import BoxComponent from '../BoxComponent';

const Wrapper = styled.div`
`;

function FirstSection() {
  return (
    <Wrapper>
      <TextComponent
        title="Who We Are"
        subtitle="Our approach to Mergers and Acquisitions leverage innovation, technology and personal availability."
        text="We are a boutique advisory firm specializing in cross-border mergers and acquisitions of innovative companies. With extensive deal-making experience, we pay a great deal of attention to details and leverage our high-quality relationships with CEOs, corporate development executives, and private equity firms worldwide to assist our clients in accelerating their growth and exploring strategic options in today’s world, where technology changes in the blink of an eye. Organised in 4 Divisions: Mergers and Acquisitions, Restructuring, Consulting and Startups, the company operates globally providing services to start-up, mid-market and global companies."
      />
      <BoxComponent
        columns={2}
        txts={['Mergers & Acquisitions', 'Restructuring', 'Startups', 'Consulting']}
        srcs={['/static/mea.jpg', '/static/restructuring.jpg', '/static/startups.jpg', '/static/consulting.jpg']}
        links={['/mea', '/restructuring', '/startups', '/consulting']}
        height="314px"
        width="470px"
      />
    </Wrapper>
  );
}

export default (FirstSection);
