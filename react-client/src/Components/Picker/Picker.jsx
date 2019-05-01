import React, { Component } from 'react';
import CatImage from '../CatImage/CatImage';

class Picker extends Component {
  constructor(props) {
      super(props);

      let cats = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
      let shuffledCats = this.shuffleArray(cats);

      this.state = {
        cats: shuffledCats,
        eliteEight: [],
        finalFour: [],
        championship: [],
        img1: shuffledCats[0],
        img2: shuffledCats[1]
      };

      this.displayWinner = this.displayWinner.bind(this);
      this.handleClick = this.handleClick.bind(this);
  }

  shuffleArray(cats) {
    let temp = [];
    while (cats.length > 0) {
      const index = Math.floor(Math.random() * Math.floor(cats.length));
      temp.push(cats.splice(index, 1)[0]);
    }
    return temp;
  }

  displayWinner() {
    console.log()
  }

  handleClick(img) {
    
  }

  render() {
    return (
      <div className="picker">
        <CatImage img={this.state.img1} onClick={this.handleClick} />
        <CatImage img={this.state.img2} onClick={this.handleClick} />
      </div>
    )
  }
}

export default Picker
