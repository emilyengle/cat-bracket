import React, { Component } from 'react';
import {imgList} from '../utils';

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
