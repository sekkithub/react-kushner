import React, { Component } from 'react';
import LoadingBar from './loading-bar';
import './bracket.css';
import './loading-bar.css';
import './styles.css';

class Main extends Component {
  render() {
    return (
      <div className="c-main  js-main">
        <div className="c-main__wrapper">
          <div className="c-bracket  js-bracket"></div>

          <div className="c-copy  js-copy">
            <div className="c-copy__wrapper">
              <div className="c-copy__mask  js-copy-mask">
                <div className="c-copy__text  js-main-copy" data-copy="{% for block in entry.copies %}{{ block.copy }}/{% endfor %}">
                </div>
              </div>
            </div>
          </div>
        </div>

        <LoadingBar />
      </div>
    );
  }
}

export default Main;
