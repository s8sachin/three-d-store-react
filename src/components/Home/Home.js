import React, { Component } from 'react';
import {
  Jumbotron, Button, Container, Modal, ModalBody, ModalHeader, ModalFooter,
} from 'reactstrap';
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
    return (
      <div className="custom-container">
        <Container>
          <Jumbotron>
            <h1 className="display-3">Hello, there!</h1>
            <p className="lead">Checkout epic 3D models by signing up.</p>
            <hr className="my-2" />
            <p>Do a quick signup and login.</p>
            <div className="lead">
              <Button color="primary" onClick={this.toggleLogin}>Login</Button>{ ' ' }
              <Button color="primary" onClick={this.toggleSignup}>Signup</Button>
            </div>
          </Jumbotron>
        </Container>
        <Modal isOpen={loginModal || signupModal} toggle={loginModal ? this.toggleLogin : this.toggleSignup}>
          {loginModal && <Login toggleLogin={this.toggleLogin} toggleSignup={this.toggleSignup}/>}
          {signupModal && <Signup toggleSignup={this.toggleSignup} toggleLogin={this.toggleLogin} />}
        </Modal>
      </div>
    );
  }
}

export default Home;
