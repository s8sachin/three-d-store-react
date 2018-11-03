import React, { Component } from 'react';
import { Modal } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './Home.scss';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import backgroundImage from '../../imgs/621682.jpg';

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
        <div className="fullscreen-bg">
          <video
            muted
            loop
            autoPlay
            preload="false"
            tabIndex="0"
            className="fullscreen-bg__video"
            poster={backgroundImage}
          >
            {/* <source type="video/webm; codecs=vp8, vorbis" src={backgroundVideoWebm} /> */}
          </video>
        </div>
        <div className="container d-flex" style={{ height: '65vh', marginBottom: '110px' }}>
          <div className="row justify-content-center align-self-center ml-auto mr-auto">
            <div className="home-content text-center">
              <h1 className="display-3">Hello, there!</h1>
              <p className="lead">Checkout epic 3D models{!loggedIn && ' by Logging In'}.</p>
              <div className="lead">
                {loggedIn ? <NavLink to="/dashboard"><button type="button" className="appBtn cursor-pointer">Dashboard <i className="fas fa-arrow-right" /></button></NavLink>
                  : (
                    <React.Fragment>
                      <button type="button" style={{ width: '81px' }} className="appBtn cursor-pointer" onClick={this.toggleLogin}>Login</button>{ ' ' }
                      <button type="button" style={{ width: '81px' }} className="appBtn cursor-pointer" onClick={this.toggleSignup}>Signup</button>
                    </React.Fragment>
                  )
                }
              </div>
            </div>
          </div>
        </div>
        <Modal isOpen={loginModal || signupModal} toggle={loginModal ? this.toggleLogin : this.toggleSignup}>
          {loginModal && <Login toggleLogin={this.toggleLogin} toggleSignup={this.toggleSignup} />}
          {signupModal && <Signup toggleSignup={this.toggleSignup} toggleLogin={this.toggleLogin} />}
        </Modal>
      </div>
    );
  }
}

export default Home;
