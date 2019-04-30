import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    return (
      <div className="main">
        <div className="header">
          <img src={require('./cat-head.png')} alt="Outline of cat" />
          <h1>Cat Bracket</h1>
        </div>
        <div className="subHeader">
          <p>Choose the superior cat, tournament-style.</p>
          <p>At the end, see how many others chose the same cat!</p>
        </div>
      </div>
    )
  }
}

export default HomePage;
