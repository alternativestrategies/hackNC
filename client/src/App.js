import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ReactModalLogin from "react-modal-login";
import Nav from './Components/Nav/Index';
import Footer from './Components/Footer/Index';
import Login from './Components/Login';
import Signup from './Components/Signup';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      loading: false,
      error: null
    }
    console.log(this.state)
  }

  openModal() {
    this.setState({
      showModal: true
    });
  }

  closeModal() {
    this.setState({
      showModal: false,
      error: null
    });
  }

  onLoginSuccess(method, response) {
    console.log("logged successfully with " + method);
  }

  onLoginFail(method, response) {
    console.log("logging failed with " + method);
    this.setState({
      error: response
    });
  }

  startLoading() {
    this.setState({
      loading: true
    });
  }

  finishLoading() {
    this.setState({
      loading: false
    });
  }

  afterTabsChange() {
    this.setState({
      error: null
    });
  }

  componentDidMount() {
    this.openModal()
  }

  render() {
    return (
      <React.Fragment >
        <Nav />

        <ReactModalLogin
          visible={this.state.showModal}
          onCloseModal={this.closeModal.bind(this)}
          loading={this.state.loading}
          error={this.state.error}
          tabs={{
            afterChange: this.afterTabsChange.bind(this)
          }}
          loginError={{
            label: "Couldn't sign in, please try again."
          }}
          registerError={{
            label: "Couldn't sign up, please try again."
          }}
          startLoading={this.startLoading.bind(this)}
          finishLoading={this.finishLoading.bind(this)} />
        <Footer />
      </React.Fragment >
    );
  }
}

export default App;
