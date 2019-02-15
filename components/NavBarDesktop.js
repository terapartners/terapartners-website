import React from 'react';
// import ImageParallax from '../Home/ImageParallax';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Anime from 'react-anime';
import { withRouter } from 'next/router';
import Link from 'next/link';

const Desktop = styled.div`
  justify-content: flex-end;
  text-align: end;
  flex: 1;
  @media (max-width: 767px) {
    display: none!important;
  }
  @media (min-width: 767px) {
    display: block!important;
  }
`;

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
  color: ${props => props.color};
  font-size: 14px;
  text-transform: uppercase;
  margin-left: 15px;
  margin-right: 15px;
  font-family: Rajdhani-semibold;
  transition: 1s ease-in-out;
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



class NavBarDesktop extends React.PureComponent {
  constructor(props) {
    super();
    this.state = {
      location: props.router.pathname,
      color: props.color,
    };
  }

  listenScrollEvent = (e) => {
    if (window.scrollY > 0) {
      this.setState({color: '#828282'})
    } else {
      this.setState({color: this.props.color})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
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
      url: '/consulting',
      begin: 367.6,
      width: 100.61,
    }, {
      url: '/contact',
      begin: 468.21,
      width: 80.2,
    }];

    const { location } = this.state;
    const currLocation = map.filter(m => m.url === location)[0];
    return (
      <Desktop>
        <Row style={{ height: '100%', width: '100%', justifyContent: 'flex-end' }}>
          <nav>
            <ul>
                <Li map={map} number={0}>
                  <Link href="/">
                    <Button color={this.state.color}>Who we are</Button>
                  </Link>
                </Li>
                <Li map={map} number={1}>
                  <Link href="/mea">
                    <Button color={this.state.color}>M&A</Button>
                  </Link>
                </Li>
                <Li map={map} number={2}>
                  <Link href="/restructuring">
                    <Button color={this.state.color}>Restructuring</Button>
                  </Link>
                </Li>
                <Li map={map} number={3}>
                  <Link href="/startups">
                    <Button color={this.state.color}>Startups</Button>
                  </Link>
                </Li>
                <Li map={map} number={4}>
                  <Link href="/consulting">
                    <Button color={this.state.color}>Consulting</Button>
                  </Link>
                </Li>
                {/* <Li map={map} number={5}>
                  <Link href="/contact">
                    <Button color={this.state.color}>Contact</Button>
                  </Link>
                </Li> */}
                <Hr location={currLocation} />
            </ul>
          </nav>
        </Row>
      </Desktop>
    );
  }
}

export default withRouter(NavBarDesktop);
