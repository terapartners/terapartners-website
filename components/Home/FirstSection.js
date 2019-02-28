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
        subtitle="Tera Partners is a results-driven organisation that provides the highest level of expertise and advice in a large variety of sectors."
        text="Tera Partners is an independent boutique advisory firm built as a partnership based on meritocracy. Our dynamic work environment, culture of candor and the challenging projects we embrace attract and retain the most talented professionals.

Our clients’ trust is our most treasured resource, and we employ the best of our skills, global network and experience to deliver value creation. Innovation and technology is in our DNA and the highest standards of integrity and discretion are our guiding principles.

At Tera, success is measured only by the log-term success of our clients."
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
