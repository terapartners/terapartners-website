import React from 'react';
// import ImageParallax from '../Home/ImageParallax';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { withRouter } from 'next/router';
import Logo from './Logo';
import NavBarMobile from './NavBarMobile';
import NavBarDesktop from './NavBarDesktop';

const BackgroundFixed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: ${props => props.color};
  transition: 1s ease-in-out;
  height: 100px;
  width: 100%;
  /* box-shadow: 0px 0px 3px #d3d3d3;
      border-bottom: #d3d3d3 1px solid; */
`;


class Menu extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      // location: props.router.pathname,
      backgroundColor: 'transparent',
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
  }

  // componentDidUpdate(prevProps) {
  //   const { router } = this.props;
  //   if (router.pathname !== prevProps.router.pathname) {
  //     this.setState({ // eslint-disable-line react/no-did-update-set-state
  //       location: router.pathname,
  //     });
  //   }
  // }

  listenScrollEvent = () => {
    if (window.scrollY > 0) {
      this.setState({ backgroundColor: 'white' });
    } else {
      this.setState({ backgroundColor: 'transparent' });
    }
  }

  render() {
    const { backgroundColor } = this.state;
    const { color, location } = this.props;
    return (
      <BackgroundFixed color={backgroundColor}>
        <Grid style={{ height: '100%' }}>
          <Row middle="xs" between="xs" style={{ height: '100%' }}>
            <Col style={{ display: 'flex', alignItems: 'center' }} middle="xs" xs={2} md={2}>
              <Logo />
            </Col>
            <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }} xs={8} md={8}>
              <NavBarMobile color={color} />
              <NavBarDesktop location={location} color={color} />
            </Col>
          </Row>
        </Grid>
      </BackgroundFixed>
    );
  }
}

export default withRouter(Menu);
