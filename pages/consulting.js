import React from 'react';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';

import Hero from '../components/Consulting/Hero';
import FirstSection from '../components/Consulting/FirstSection';
import SecondSection from '../components/Consulting/SecondSection';

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
    font-family: "Rajdhani";
    color: #333;
    background-color: #fff;
    overflow-x: hidden;
    margin: 0;
  }
`;

export class Consulting extends React.PureComponent {
  render() {
    return (
      <div>
        <Head>
          <title>My page title</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
        </Head>
        <GlobalStyle />
        <div>
          <Menu navigate={this.navigate} color={'#333'}/>
          <Hero />
          <FirstSection />
          <Divisor
            parallaxHeight="600px"
            width="1800px"
            marginTop="300px"
            src="/static/hero5.jpg"
          />
          <SecondSection />
          <Footer />
          <div />
        </div>
      </div>
    );
  }
}

export default (Consulting);
