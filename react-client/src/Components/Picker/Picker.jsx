import React, { Component } from 'react';
import CatImage from '../CatImage/CatImage';

class Picker extends Component {
  render() {
    return (
      <div className="picker">
        <CatImage img="15" />
        <CatImage img="16" />
      </div>
    )
  }
}

export default Picker
