import React from 'react';
// import ImageParallax from '../Home/ImageParallax';
import styled from 'styled-components';
import { Row } from 'react-flexbox-grid';
// import Anime from 'react-anime';
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
    margin-left: ${props => props.left}px;
    width: ${props => () => props.width}px;
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
  margin-left: ${props => (props.left ? props.left : 0)}px;
  width: ${props => (props.width ? props.width : 0)}px;
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
      width: [],
      left: [],
    };
    this.map = [{
      url: '/',
      ref: React.createRef(),
    }, {
      url: '/mea',
      ref: React.createRef(),
    }, {
      url: '/restructuring',
      ref: React.createRef(),
    }, {
      url: '/startups',
      ref: React.createRef(),
    }, {
      url: '/consulting',
      ref: React.createRef(),
    }, {
      url: '/contact',
      ref: React.createRef(),
    }];
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
    this.updateWidth();
    window.addEventListener('resize', this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenScrollEvent);
    window.removeEventListener('resize', this.updateWidth);
  }

  listenScrollEvent = () => {
    const { color } = this.props;
    if (window.scrollY > 0) {
      this.setState({ color: '#828282' });
    } else {
      this.setState({ color });
    }
  }

  updateWidth = () => {
    const width = this.map.map(({ ref }) => ref.current && ref.current.getBoundingClientRect().width);
    const left = width.map((wi, idx) => width.filter((a, i) => i < idx).reduce((acc, w) => acc + w, 0));
    this.setState({
      width,
      left,
    });
  }

  render() {
    const {
      width, left, color, location,
    } = this.state;
    const idx = this.map.map((i, x) => ({ ...i, x })).filter(({ url }) => url === location).map(({ x }) => x)[0];
    const barWidth = width[idx] || 0;
    const barLeft = left[idx] || 0;
    return (
      <Desktop>
        <Row style={{ height: '100%', width: '100%', justifyContent: 'flex-end' }}>
          <nav>
            <ul>
              <Li {...this.map[0]} left={left[0]} width={width[0]}>
                <Link href="/">
                  <Button color={color}>Who we are</Button>
                </Link>
              </Li>
              <Li {...this.map[1]} left={left[1]} width={width[1]}>
                <Link href="/mea">
                  <Button color={color}>M&A</Button>
                </Link>
              </Li>
              <Li {...this.map[2]} left={left[2]} width={width[2]}>
                <Link href="/restructuring">
                  <Button color={color}>Restructuring</Button>
                </Link>
              </Li>
              <Li {...this.map[3]} left={left[3]} width={width[3]}>
                <Link href="/startups">
                  <Button color={color}>Startups</Button>
                </Link>
              </Li>
              <Li {...this.map[4]} left={left[4]} width={width[4]}>
                <Link href="/consulting">
                  <Button color={color}>Consulting</Button>
                </Link>
              </Li>
              {/* <Li {...this.map[5]}>
                  <Link href="/contact">
                    <Button color={color}>Contact</Button>
                  </Link>
                </Li> */}
              <Hr width={barWidth} left={barLeft} />
            </ul>
          </nav>
        </Row>
      </Desktop>
    );
  }
}

export default withRouter(NavBarDesktop);
