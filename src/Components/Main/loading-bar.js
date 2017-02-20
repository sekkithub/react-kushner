import React, { Component } from 'react';
import './loading-bar.css';

class LoadingBar extends Component {
  render() {
    return (
      <div className="c-loading-bar">
        <div className="c-loading-bar__wrapper">
          <div className="c-loading-bar__mask  js-loading-bar-mask">
            <div className="c-loading-bar__progress-bar  js-progress-bar"></div>
          </div>
        </div>
        <div className="c-loading-bar__prebar"></div>
      </div>
    );
  }
}

export default LoadingBar;
