import React, { Component } from 'react';
import './App.css';
import { LiveChat } from './components/LiveChat';

class App extends Component {
  render() {
    return (
      <div className="App">
          <LiveChat />
      </div>
    );
  }
}

export default App;
