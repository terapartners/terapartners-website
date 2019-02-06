import React from 'react';
// import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Box from './Box';

// const ImgWrapper = styled.div`
//   width: 470px;
//   height: 314px;
//   overflow: hidden;
//   position: relative;
//   margin: 0 auto;
// `;

// const Overlay = styled.div`
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   height: 100%;
//   width: 100%;
//   opacity: 0;
//   transition: .5s ease;
//   background-color: #005f9e;
//   ${ImgWrapper}:hover & {
//     opacity: 0.7;
//   }
// `;

// const BoxText = styled.span`
//   font-size: 30px;
//   font-family: raleway-regular;
//   color: white;
//   display: block;
//   margin: 0 auto;
//   text-align: left;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   opacity: 0;
//   -webkit-transform: translate(-50%, -50%);
//   -ms-transform: translate(-50%, -50%);
//   transform: translate(-50%, -50%);
//   ${ImgWrapper}:hover & {
//     opacity: 1;
//   }
// `;

// const LearnMore = styled.a`
//   font-size: 18px;
//   font-family: raleway-semibold;
//   text-align: left;
//   color: white;
//   cursor: pointer;
//   &:hover {
//     font-family: raleway-bold;
//     text-decoration: underline;
//   }
// `;

// const Img = styled.img`
//   width: 100%;
//   display: block;
//   filter: grayscale(100%) brightness(100%);
//   -webkit-filter: grayscale(100%) brightness(100%);
// `;

export function FirstSection(props) {
  const {
    txts, columns, srcs, height, width, links,
  } = props;
  return (
    <Grid>
      <Row style={{ maxWidth: '960px', margin: 'auto', marginTop: '70px' }} xs={12}>
        {txts.map((txt, idx) => (
          <Col
            style={{
              padding: '0', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
            xs={12}
            md={12}
            lg={12 / columns}
            key={idx}
          >
            <Box
              src={srcs[idx]}
              txt={txt}
              height={height}
              width={width}
              link={links[idx]}
            />
          </Col>
        ))}
      </Row>
    </Grid>
  );
}

export default (FirstSection);
