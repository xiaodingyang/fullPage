import React, { Component } from 'react';
import slidePage from "slidePage";
import './App.css'
export class App extends Component {
  componentDidMount() {
    var slidepage = new slidePage({
      slideContainer: '#slide-container',
      slidePages: '.slide-page',
      page: 1,
      refresh: true,
      dragMode: false,
      useWheel: true,
      useSwipe: true,
      useAnimation: true,

      // Events
      before: function (origin, direction, target) { },
      after: function (origin, direction, target) { },
    });
  }
  render() {
    return (
      <div>
        <div className="slide-container" id="slide-container">
          <div className="slide-page page1" style={{ width: '100vw', height: '100vh', background: 'green' }}>
            <div className="container">
              <h2>page1</h2>
              <p>page1 content</p>
            </div>
          </div>
          <div className="slide-page page2" style={{ width: '100vw', height: '100vh', background: 'blue' }}>
            <div className="container">
              <h2>page2</h2>
              <p>page2 content</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
