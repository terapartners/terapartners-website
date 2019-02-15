import React from 'react';
// import ImageParallax from '../Home/ImageParallax';
import styled from 'styled-components';
import Anime from 'react-anime';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Link from 'next/link';
import { withRouter } from 'next/router';


const Background = styled.div`
  height: 100px;
  width: 100%;
`;

const BackgroundFixed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: #fff;
  height: 100px;
  width: 100%;
  /* box-shadow: 0px 0px 3px #d3d3d3;
      border-bottom: #d3d3d3 1px solid; */
`;

// const LogoWrapper = styled.div`
//   width: 100px;
// `;

// const Span = styled.span`
//   position: absolute;
//   border-bottom: 4px solid transparent;
//   z-index: -1;
//   transform: translateX(-60px);
//   transition: all .35s ease-in-out;
// `;

const Li = styled.li`
  display: inline-block;
  text-align: center;
  &:hover ~ hr{
    margin-left: ${props => props.map[props.number].begin}px;
    width: ${props => () => props.map[props.number].width}px;
  }

  &:hover > a{
    color: #005f9e;
    cursor: pointer;
  }
`;

const Button = styled.a`
  background-color: none;
  font-size: 14px;
  text-transform: uppercase;
  margin-left: 15px;
  margin-right: 15px;
  font-family: Rajdhani;
  display: block;
  &:hover ~ hr{
    color: #005f9e;
  }
`;

const Hr = styled.hr`
  height: .10rem;
  margin-left: ${props => (props.location ? props.location.begin : '')}px;
  width: ${props => (props.location ? props.location.width : '')}px;
  background: #005f9e;
  border: none;
  transition: .3s ease-in-out;
  margin-top: 0;
`;

// const Wrapper = styled.div`
//   margin-left: 156px;
//   margin-right: 156px;
//   height: 100%;
// `;

const Img = styled.img`
  width: 100px;
`;

class Menu extends React.PureComponent {
  constructor(props) {
    super();
    this.state = {
      location: props.router.pathname,
    };
  }

  componentDidUpdate(prevProps) {
    const { router } = this.props;
    if (router.pathname !== prevProps.router.pathname) {
      this.setState({ // eslint-disable-line react/no-did-update-set-state
        location: router.pathname,
      });
    }
  }

  render() {
    const map = [{
      url: '/',
      begin: 0,
      width: 103.8,
    }, {
      url: '/mea',
      begin: 103.8,
      width: 55.6,
    }, {
      url: '/restructuring',
      begin: 159.4,
      width: 120.7,
    }, {
      url: '/startups',
      begin: 280.1,
      width: 87.5,
    }, {
      url: '/contact',
      begin: 367.6,
      width: 80.2,
    }];

    const { location } = this.state;
    const currLocation = map.filter(m => m.url === location)[0];

    return (
      <Background>
        <BackgroundFixed>
          <Grid style={{ height: '100%' }}>
            <Row middle="xs" between="xs" style={{ height: '100%' }}>
              <Col style={{ display: 'flex', alignItems: 'center' }} middle="xs" xs={2} md={2}>
                <Anime
                  opacity={[0, 1]}
                  easing="easeOutExpo"
                  duration={4000}
                  delay={(el, i) => 1000 + 100 * i}
                  key={2222}
                >
                  <Img src="/static/logo.png" />
                </Anime>
              </Col>
              <Col style={{ display: 'flex', alignItems: 'center' }} xs={6} md={6}>
                <Row end="xs" middle="xs" style={{ height: '100%', width: '100%' }}>
                  <nav>
                    <ul>
                      <Anime
                        opacity={[0, 1]}
                        easing="easeOutExpo"
                        duration={2000}
                        delay={(el, i) => 1000 + 100 * i}
                        key={1111}
                      >
                        <Li map={map} number={0}>
                          <Link href="/">
                            <Button>Who we are</Button>
                          </Link>
                        </Li>
                        <Li map={map} number={1}>
                          <Link href="/mea">
                            <Button>M&A</Button>
                          </Link>
                        </Li>
                        <Li map={map} number={2}>
                          <Link href="/restructuring">
                            <Button>Restructuring</Button>
                          </Link>
                        </Li>
                        <Li map={map} number={3}>
                          <Link href="/startups">
                            <Button>Startups</Button>
                          </Link>
                        </Li>
                        {/* <Li map={map} number={4}>
                          <Link href="/contact">
                            <Button>Contact</Button>
                          </Link>
                        </Li> */}
                        <Hr location={currLocation} />
                      </Anime>
                    </ul>
                  </nav>
                </Row>
              </Col>
            </Row>
          </Grid>
        </BackgroundFixed>
      </Background>
    );
  }
}

export default withRouter(Menu);
