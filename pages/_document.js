import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
          <link href="https://fonts.googleapis.com/css?family=Raleway:100,300,400,600,700" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Rajdhani:400,600" rel="stylesheet" />
        </body>
      </html>
    );
  }
}
