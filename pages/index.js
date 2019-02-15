import React from 'react';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';

import Hero from '../components/Home/Hero';
import FirstSection from '../components/Home/FirstSection';
import SecondSection from '../components/Home/SecondSection';

import Divisor from '../components/Divisor';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import 'animate.css/animate.min.css';

const GlobalStyle = createGlobalStyle`
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    line-height: 40px;
    font-family: 'Raleway';
    color: #333;
    background-color: #fff;
    overflow-x: hidden;
    margin: 0;
  }
`;

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      location: '/', // eslint-disable-line react/no-unused-state
    };
  }

  navigate = url => () => {
    console.log('url', url);
    this.setState({
      location: url, // eslint-disable-line react/no-unused-state
    }, () => {
      window.location = `/${url}`;
      // if(scroll) {
      //
      // } else if(history.pushState) {
      //   history.pushState(null, null, `/#${url}`)
      // } else {
      //   location.hash = '#myhash';
      // }
    });
  }

  render() {
    return (
      <div>
        <Head>
          <title>Tera Partners | Mergers & Acquisitions, Startup advisory firm in São Paulo, Brazil</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
        </Head>
        <GlobalStyle />
        <div>
          <Menu navigate={this.navigate} />
          <Hero />
          <FirstSection />
          <Divisor
            parallaxHeight="600px"
            width="100vw"
            marginTop="300px"
            src="/static/dividor1.jpg"
          />
          <SecondSection />
          <Footer />
          <div />
        </div>
      </div>
    );
  }
}
