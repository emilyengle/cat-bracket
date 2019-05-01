import React, { Component } from 'react';
import {imgList} from '../utils';

class Contenders extends Component {
  render() {
    const {list} = this.props;

    let title = 'Starting Contenders:';
    if (list.length == 8) {
      title = 'Your Elite 8';
    } else if (list.length == 4) {
      title = 'Your Final 4';
    } else if (list.length == 2) {
      title = 'The Championship!'
    } else if (list.length == 1) {
      title = "And your winner is:";
    }

    const contenders = list.map(key => <p>{imgList[key][1]}</p>);

    return (
      <div className={list.length === 16 ? 'contenders-16' : 'contenders'}>
        <h3>{title}</h3>
        {contenders}
        {list.length === 1 ? <p>🎉🎉🎉</p> : ''}
      </div>
    )
  }
}

export default Contenders
