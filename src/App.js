import React, { Component } from 'react';
import './App.css';

import Form from './components/form';

class App extends Component {
  render() {
    return (
      <div className="App p-3 mb-2 bg-light text-dark">
            <div className="jumbotron">
            <h1 className="text-center">Looking for a credit card?</h1>
          <p className="lead">See the offers you're most likely to get and apply with confidence. Our service is totally free — and always will be.</p>
          <p className="lead text-center p-3 mb-2 bg-info text-white">Find out today</p>
          
        </div>
     
        <Form/>
      </div>
    );
  }
}

export default App;
