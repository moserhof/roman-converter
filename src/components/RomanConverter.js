import React from 'react';
import '../styles/RomanConverter.css';

class RomanConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numeral: 'Looky here'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let inputValue = e.target.value;

    if(!Boolean(Number(inputValue))) {
      this.setState({
        numeral: "Type a #"
      });
    } else {
      inputValue = Number(inputValue);

      if(inputValue > 10000) {
        this.setState({
          numeral: '# too beaucoup'
        });
      } else {
        this.setState({
          numeral: this.props.converterTool(inputValue)
        });
      }
    }
  }

  render() {
    return (
      <div className="outer-tablet">
        <h2>Roman Numeral Converter</h2>
        <input
          onChange={this.handleChange}
          className="input-box"
          type="text"
          placeholder="number to convert"/>
        <p className="roman-display">{this.state.numeral}</p>
      </div>
    );
  }
}

export default RomanConverter;
