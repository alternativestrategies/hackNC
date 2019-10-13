import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from './Components/Nav/Index';
import Footer from './Components/Footer/Index';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Nav />
        <Footer />
      </React.Fragment >
    );
  }
}

export default App;
