import React, { Component } from 'react';
import logo from './ppcc_logo.png';
import Form from './Form';
import Page from './Page';
import './App.css';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Pediatric Palliative Care Coalition</h1>
        </header>
        <p className="App-intro">
          Please fill out this basic information.
        </p>
      </div>
    );
  }
}

export default Header;
