import React from 'react';

class RomanConverter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numeral: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value);
  }

  render() {

    return (
      <div className="outer-tablet">
        <h2>Roman Converter</h2>
      <input onChange={this.handleChange} type="text" placeholder="number to convert"/>
        <p className="roman-display">{this.state.numeral}</p>
      </div>
    );
  }
}

export default RomanConverter;
