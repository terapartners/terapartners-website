import React from 'react';
// import ImageParallax from '../Home/ImageParallax';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { FiMenu } from 'react-icons/fi';
import { withRouter } from 'next/router';
import { stack as Menu } from 'react-burger-menu';
import Link from 'next/link';

const Mobile = styled.div`
  flex: 1;
  @media (max-width: 767px) {
    display: block!important;
  }
  @media (min-width: 767px) {
    display: none!important;
  }
`;

const IconWrapper = styled.div`
  width: 50px;
  display: flex;
  align-items: center;
  height: 100%;
`;



class NavBarMobile extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      color: props.color
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  listenScrollEvent = (e) => {
    if (window.scrollY > 0) {
      this.setState({color: '#828282'})
    } else {
      this.setState({color: this.props.color})
    }
  }

  handleStateChange = (state) => {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu = () => {
    this.setState({ menuOpen: false });
  }

  render() {
    var styles = {
      bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        right: '36px',
        top: '36px'
      },
      bmBurgerBars: {
        background: this.state.color,
        transition: '1s ease-in-out',
      },
      bmBurgerBarsHover: {
        background: '#a90000'
      },
      bmCrossButton: {
        height: '24px',
        width: '24px'
      },
      bmCross: {
        background: '#fff'
      },
      bmMenuWrap: {
        position: 'fixed',
        height: '100%',
        top: 0,
        right: '20vw',
        width: '80%',
      },
      bmMenu: {
        background: 'rgba(0, 95, 158, 0.8)',
        height: '100vh',
        fontSize: '1.15em'
      },
      bmMorphShape: {
        fill: '#373a47'
      },
      bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em',
        paddingTop: '4em',
        paddingLeft: '2em',
        display: 'block',
        color: 'white'
      },
      bmItem: {
        display: 'block',
        color: 'white',
        fontFamily: 'Rajdhani-semibold',
        fontSize: '18px',
        height: '50px',
        textDecoration: 'none',
      },
      bmOverlay: {
        position: 'fixed',
        zIndex: 1000,
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.5)',
        opacity: 1,
        transition: 'opacity 0.3s ease 0s',
      }
    }

    const bmOverlay = {
      position: 'fixed',
      zIndex: 1000,
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.3)',
      opacity: 1,
      transition: 'opacity 0.3s ease 0s',
    }
    const bmMenuWrap = {
      background: 'rgba(55,58,71,.9)',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
    }
    console.log(this.state);
    return (
      <Mobile>
        {/*<Row style={{ height: '100%', width: '100%', justifyContent: 'flex-end' }}>
          <IconWrapper>
            <FiMenu size={'2em'}/>
          </IconWrapper>
        </Row>*/}
        <Menu
          left
          styles={styles}
          width={'100%'}
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
        >
          <a href={'/'} id="home" onClick={this.closeMenu} >WHO WE ARE</a>
          <a href={'/mea'} id="mea" onClick={this.closeMenu} >M&A</a>
          <a href={'/restructuring'} id="restructuring" onClick={this.closeMenu} >RESTRUCTURING</a>
          <a href={'/startups'} id="startups" onClick={this.closeMenu} >STARTUPS</a>
          <a href={'/consulting'} id="consulting" onClick={this.closeMenu} >CONSULTING</a>
          {/* <a href={'/contact'} id="contact" onClick={this.closeMenu} >CONTACT</a> */}
        </Menu>
      </Mobile>
    );
  }
}

export default withRouter(NavBarMobile);
