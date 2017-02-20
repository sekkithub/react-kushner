import React, { Component } from 'react';
import logo from './logo.svg';
import './styles.css';

class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <img src={logo} alt="logo" className="logo__image" />
      </div>
    );
  }
}

export default Logo;
