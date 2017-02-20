import React, { Component } from 'react';
import Logo from '../Logo';
import Contact from '../Contact';
import Main from '../Main';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <Contact />
        <Main />
      </div>
    );
  }
}

export default App;
