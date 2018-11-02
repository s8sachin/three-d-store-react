import React, { Component } from 'react';
import {
  ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Col, Input, Alert,
} from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginAction } from '../../actions/user';

const createAlert = type => (
  <Alert color={type === 'successSignup' ? 'success' : 'danger'}>
    {type === 'successSignup' ? 'Signup Success !! Please Login.' : 'Incorrect Credentials'}
  </Alert>
);

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', disabled: false };
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({ disabled: false });
    }
  }

  handleLogin(e) {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.loginAction({ email, password });
  }

  render() {
    const { toggleLogin, user } = this.props;
    const { email, password, disabled } = this.state;
    const showSignupSuccess = (user && user.status && user.status === 201 && user.type === 'signup');
    const invalidCreds = (user && user.status && user.status !== 200 && user.type === 'login');
    if (user && user.type === 'login' && user.status === 200) {
      return (
        <Redirect push to="/dashboard" />
      );
    }
    return (
      <React.Fragment>
        <ModalHeader toggle={toggleLogin}>Login</ModalHeader>
        { showSignupSuccess && createAlert('successSignup') }
        { invalidCreds && createAlert('invalidCreds') }
        <ModalBody>
          <Form onSubmit={e => this.handleLogin(e)} id="loginForm">
            <FormGroup row>
              <Label for="exampleEmail" sm={2}>Email</Label>
              <Col sm={10}>
                <Input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="hello@example.com"
                  onChange={e => this.setState({ email: e.target.value })}
                  required
                  invalid={invalidCreds}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="password" sm={2}>Password</Label>
              <Col sm={10}>
                <Input
                  type="password"
                  name="password"
                  value={password}
                  onChange={e => this.setState({ password: e.target.value })}
                  required
                  invalid={invalidCreds}
                />
              </Col>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="info" type="submit" form="loginForm" disabled={disabled}>Login</Button>{' '}
          <Button color="secondary" onClick={toggleLogin}>Cancel</Button>
        </ModalFooter>
      </React.Fragment>
    );
  }
}


const mapStateToProps = ({ userReducer }) => {
  const { user } = userReducer;
  return { user };
};

export default connect(mapStateToProps, { loginAction })(Login);
