import React, { Component } from 'react';
import {
  Jumbotron, Container, Modal,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './Home.scss';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginModal: false,
      signupModal: false,
    };
    this.toggleLogin = this.toggleLogin.bind(this);
    this.toggleSignup = this.toggleSignup.bind(this);
  }

  toggleLogin() {
    this.setState({
      loginModal: !this.state.loginModal,
      signupModal: false,
    });
  }

  toggleSignup() {
    this.setState({
      signupModal: !this.state.signupModal,
      loginModal: false,
    });
  }

  render() {
    const { loginModal, signupModal } = this.state;
    const loggedIn = localStorage.getItem('token');
    return (
      <div className="custom-container">
        <Container>
          <Jumbotron>
            <h1 className="display-3">Hello, there!</h1>
            <p className="lead">Checkout epic 3D models by signing up.</p>
            <hr className="my-2" />
            <p>Do a quick signup and login.</p>
            <div className="lead">
              {loggedIn ? <NavLink to="/dashboard"><button type="button" className="appBtn cursor-pointer">Dashboard</button></NavLink>
                : (
                  <React.Fragment>
                    <button type="button" className="appBtn cursor-pointer" onClick={this.toggleLogin}>Login</button>{ ' ' }
                    <button type="button" className="appBtn cursor-pointer" onClick={this.toggleSignup}>Signup</button>
                  </React.Fragment>
                )
              }
            </div>
          </Jumbotron>
        </Container>
        <Modal isOpen={loginModal || signupModal} toggle={loginModal ? this.toggleLogin : this.toggleSignup}>
          {loginModal && <Login toggleLogin={this.toggleLogin} toggleSignup={this.toggleSignup} />}
          {signupModal && <Signup toggleSignup={this.toggleSignup} toggleLogin={this.toggleLogin} />}
        </Modal>
      </div>
    );
  }
}

export default Home;
