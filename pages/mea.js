import React from 'react';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';

import Hero from '../components/Mea/Hero';
import FirstSection from '../components/Mea/FirstSection';
import SecondSection from '../components/Mea/SecondSection';

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

export class MEA extends React.PureComponent {
  render() {
    return (
      <div>
        <Head>
          <title>M&A | Tera Partners | Mergers & Acquisitions, Startup Advisory Firm in São Paulo, Brazil</title>
          <meta name="description" content="Tera Partners are experts at orchestrating successful mergers, acquisitions, and divestitures through the team's broad experience of leading many successful transactions." />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
        </Head>
        <GlobalStyle />
        <div>
          <Menu navigate={this.navigate} color={'#828282'} />
          <Hero />
          <FirstSection />
          <Divisor
            parallaxHeight="600px"
            width="1800px"
            marginTop="500px"
            marginLeft="-800px"
            src="/static/dividor2.jpg"
          />
          <SecondSection />
          <Footer />
          <div />
        </div>
      </div>
    );
  }
}

export default (MEA);
