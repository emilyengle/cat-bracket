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

      this.handleClick = this.handleClick.bind(this);
      this.handleEliteEight = this.handleEliteEight.bind(this);
      this.handleFinalFour = this.handleFinalFour.bind(this);
      this.handleChampionship = this.handleChampionship.bind(this);
      this.handleWinner = this.handleWinner.bind(this);
  }

  shuffleArray(cats) {
    let temp = [];
    while (cats.length > 0) {
      const index = Math.floor(Math.random() * Math.floor(cats.length));
      temp.push(cats.splice(index, 1)[0]);
    }
    return temp;
  }

  handleClick(img) {
    if (this.state.eliteEight.length < 8) {
      this.handleEliteEight(img);
    } else if (this.state.finalFour.length < 4) {
      this.handleFinalFour(img);
    } else if (this.state.championship.length < 2) {
      this.handleChampionship(img);
    } else {
      this.handleWinner(img);
    }
  }

  handleEliteEight(img) {
    this.state.eliteEight.push(img);
    const catIndex = this.state.cats.indexOf(img);
    if (catIndex < 14) {
      this.setState({
        img1: this.state.cats[catIndex + 1 + (catIndex % 2 == 0 ? 1 : 0)],
        img2: this.state.cats[catIndex + 2 + (catIndex % 2 == 0 ? 1 : 0)]
      });
    } else {
      const shuffledEliteEight = this.shuffleArray(this.state.eliteEight);
      this.state.eliteEight = shuffledEliteEight;
      this.setState({
        img1: this.state.eliteEight[0],
        img2: this.state.eliteEight[1]
      });
    }
  }

  handleFinalFour(img) {
    this.state.finalFour.push(img);
    const catIndex = this.state.eliteEight.indexOf(img);
    if (catIndex < 6) {
      this.setState({
        img1: this.state.eliteEight[catIndex + 1 + (catIndex % 2 == 0 ? 1 : 0)],
        img2: this.state.eliteEight[catIndex + 2 + (catIndex % 2 == 0 ? 1 : 0)]
      });
    } else {
      const shuffledFinalFour = this.shuffleArray(this.state.finalFour);
      this.state.finalFour = shuffledFinalFour;
      this.setState({
        img1: this.state.finalFour[0],
        img2: this.state.finalFour[1]
      });
    }
  }

  handleChampionship(img) {
    this.state.championship.push(img);
    const catIndex = this.state.finalFour.indexOf(img);
    if (catIndex < 2) {
      this.setState({
        img1: this.state.finalFour[catIndex + 1 + (catIndex % 2 == 0 ? 1 : 0)],
        img2: this.state.finalFour[catIndex + 2 + (catIndex % 2 == 0 ? 1 : 0)]
      });
    } else {
      this.setState({
        img1: this.state.championship[0],
        img2: this.state.championship[1]
      });
    }
  }

  handleWinner(img) {
    
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
