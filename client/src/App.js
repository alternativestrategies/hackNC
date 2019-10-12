import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from './Components/Nav/Index';
import Footer from './Components/Footer/Index';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Login />
      <Signup />
      <Footer />
    </React.Fragment>
  );
}

export default App;
