import React, { Component } from 'react';

class CatImage extends Component {
  constructor(props) {
      super(props);
      const imgList = {
        "1": "angry.png",
        "2": "blackandwhite.png",
        "3": "chunk.png",
        "4": "dapper.png",
        "5": "grumpy.png",
        "6": "hairless.png",
        "7": "kitten.png",
        "8": "laughing.png",
        "9": "model.png",
        "10": "sleepy.png",
        "11": "street.png",
        "12": "sunglasses.png",
        "13": "sweater.png",
        "14": "tie.png",
        "15": "watermelon.png",
        "16": "yawn.png",
      }
      this.state = {
         img: require('./' + imgList[props.img])
      }
  }
  render() {
    return (
      <div className="catImage">
        <img src={this.state.img} onClick={() => this.props.onClick(this.props.img)} />
      </div>
    )
  }
}

export default CatImage
