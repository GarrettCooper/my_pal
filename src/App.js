import React, { Component } from 'react';
import logo from './ppcc_logo.png';
import Form from './Form';
import Page from './Page';
import Header from './Header';
import './App.css';

class App extends Component {
  render() {
    return (
    <div>
      <Header/>
      <Form/>
      <Page/>
      </div>
    );
  }
}

export default App;
