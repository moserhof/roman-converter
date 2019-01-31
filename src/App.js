import React, { Component } from 'react';
import RomanConverter from './RomanConverter';
import romanCipher from './romanCipher';

class App extends Component {
  render() {
    return (
      <RomanConverter converterTool={romanCipher} />
    );
  }
}

export default App;
