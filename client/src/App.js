import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from './Components/Nav/Index';
import Footer from './Components/Footer/Index';
import Login from './Components/Login';
import Signup from './Components/Signup';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <React.Fragment >
        <Nav />
        <Login />
        <Signup />
        <Footer />
      </React.Fragment >
    );
  }
}

export default App;
