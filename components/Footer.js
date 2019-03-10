import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { FaAngleUp, FaLinkedinIn, FaSkype } from 'react-icons/fa';
import Link from 'next/link';
import { animateScroll as Scroll } from 'react-scroll';

const Wrapper = styled.div`
  position: relative;
`;

const Background = styled.div`
  z-index: -2;
  // box-shadow: inset 0px 0px 10px #000;
  width: 100%;
  background-color: #005f9e;
  box-shadow: inset 0 -8px 4px 4px #005f9e, inset 0 2px 4px 0px rgba(0, 0, 0, 1);

`;

const IconWrapper = styled.span`
  color: white;
`;

const Hr = styled.hr`
  width: 100%;
  color: white;
`;

const TextWrapper = styled.div`
  text-align: center;
`;

const Text = styled.span`
  color: white;
  font-size: 16px;
  font-family: Rajdhani;
  text-transform: uppercase;
  ${TextWrapper}:hover & {
    font-family: 'Rajdhani';
    font-weight: 600;
    cursor: pointer;
  }
`;

const Registered = styled.span`
  color: white;
  font-size: 15px;
`;

const Circle = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff;
  border-radius: 50px;
  position: relative;
  top: 0px;
  z-index: 1;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CircleShadow = styled.div`
  height: 25px;
  width: 50px;
  position: absolute;
  top: 12.5px;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 10px #000;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  z-index: 0;
`;

const Icon = styled.a`
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  line-height: 10px;
  cursor: pointer;
  text-align: center;
`;

export default class Footer extends React.Component {
  scrollToTop = () => {
    // window.scrollTo(0, 0);
    Scroll.scrollToTop();
  }

  render() {
    return (
      <Wrapper>
        <Background>
          <Circle>
            <Icon onClick={this.scrollToTop}>
              <span><FaAngleUp /></span>
              <br />
              <span>Top</span>
            </Icon>
          </Circle>
          <CircleShadow />
          <Grid>
            <Row style={{ paddingTop: '70px', marginBottom: '20px' }}>
              <Col style={{
                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
              >
                <IconWrapper><FaLinkedinIn size="2em" /></IconWrapper>
                <IconWrapper style={{ marginLeft: '20px' }}><FaSkype size="2em" /></IconWrapper>
              </Col>
            </Row>
            <Hr />
            <Row style={{ paddingTop: '20px' }}>
              <Col xsOffset={0} xs={12} mdOffset={1} md={2}>
                <Link href="/">
                  <TextWrapper>
                    <Text>Who We Are</Text>
                  </TextWrapper>
                </Link>
              </Col>
              <Col xs={12} md={2}>
                <Link href="/mea">
                  <TextWrapper>
                    <Text>M&A</Text>
                  </TextWrapper>
                </Link>
              </Col>
              <Col xs={12} md={2}>
                <Link href="/restructuring">
                  <TextWrapper>
                    <Text>Restructuring</Text>
                  </TextWrapper>
                </Link>
              </Col>
              <Col xs={12} md={2}>
                <Link href="/Startups">
                  <TextWrapper>
                    <Text>Startups</Text>
                  </TextWrapper>
                </Link>
              </Col>
              <Col xs={12} md={2}>
                <Link href="/contact">
                  <TextWrapper>
                    <Text>Contact</Text>
                  </TextWrapper>
                </Link>
              </Col>
            </Row>
            <Row style={{ paddingTop: '20px' }}>
              <Col style={{ width: '100%' }} xs={12} md={12}>
                <TextWrapper>
                  <Registered>2019 - All rights reserved</Registered>
                </TextWrapper>
              </Col>
            </Row>
          </Grid>
        </Background>
      </Wrapper>
    );
  }
}
