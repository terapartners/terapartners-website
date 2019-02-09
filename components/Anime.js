import React from 'react';
import Anime from 'react-anime';

export default function (props) {
  const { children } = props;
  const runningOnBrowser = typeof (window) !== 'undefined';
  // console.log(`runningOnBrowser: ${runningOnBrowser}`);
  if (runningOnBrowser) {
    return (<Anime {...props} />);
  }
  return (<div style={{ display: 'none' }}>{children}</div>);
}
