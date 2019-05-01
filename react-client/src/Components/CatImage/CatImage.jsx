import React, { Component } from 'react';

const imgList = {
  "1": ["angry.png", "Angry Cat"],
  "2": ["blackandwhite.png", "Curious Cat"],
  "3": ["chunk.png", "Chonk Cat"],
  "4": ["dapper.png", "Dapper Cat"],
  "5": ["grumpy.png", "Grumpy Cat"],
  "6": ["hairless.png", "Mrs. Whiskerson"],
  "7": ["kitten.png", "Very Smol Cat"],
  "8": ["laughing.png", "Laughing Cat"],
  "9": ["model.png", "Smol Cat"],
  "10": ["sleepy.png", "Sleepy Cat"],
  "11": ["street.png", "Street Cat"],
  "12": ["sunglasses.png", "Sunnies Cat"],
  "13": ["sweater.png", "Sweater Cat"],
  "14": ["tie.png", "Tie Cat"],
  "15": ["watermelon.png", "Melon Cat"],
  "16": ["yawn.png", "Yawning Cat"],
};

class CatImage extends Component {
  constructor(props) {
      super(props);
      this.state = {
         img: require('./' + imgList[props.img][0]),
         imgName: imgList[props.img][1]
      };
  }

  componentDidUpdate(oldProps) {
    if (oldProps.img !== this.props.img) {
      this.setState({
        img: require('./' + imgList[this.props.img][0]),
        imgName: imgList[this.props.img][1]
      });
    }
  }

  render() {
    return (
      <div className="catImage">
        <img src={this.state.img} onClick={() => this.props.onClick(this.props.img)} />
        <p><b>{this.state.imgName}</b></p>
      </div>
    )
  }
}

export default CatImage
