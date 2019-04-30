import React, { Component } from 'react';
import Picker from '../Picker/Picker';

class HomePage extends Component {
  render() {
    return (
      <div className="main">
        <div className="header">
          <img src={require('./cat-head.png')} alt="Outline of cat" />
          <h1>Cat Bracket</h1>
        </div>
        <div className="subHeader">
          <p>Choose the superior cat, March Madness tournament-style.</p>
          <p>At the end, see how many others chose the same cat!</p>
        </div>
        <Picker />
        <div className="footer">
          <a href="https://www.linkedin.com/in/emily-engle/" target="_blank">Made by Emily</a>
        </div>
      </div>
    )
  }
}

export default HomePage;
