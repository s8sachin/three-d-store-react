import React, { Component } from 'react';
import {
  ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Col, Input, FormFeedback,
} from 'reactstrap';
import { connect } from 'react-redux';
import { signupAction } from '../../actions/user';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '', email: '', password: '', passwordConfirm: '', passwordInvalid: false, disabled: false,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      const { user, toggleLogin } = this.props;
      if (user.status === 201) {
        toggleLogin();
      } else {
        this.setState({ disabled: false });
      }
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const {
      email, password, name, passwordConfirm,
    } = this.state;
    if (password !== passwordConfirm) {
      this.setState({ passwordInvalid: true });
    } else {
      this.props.signupAction({ name, email, password });
      this.setState({ passwordInvalid: false, disabled: true });
    }
  }


  render() {
    const { toggleSignup, user } = this.props;
    const {
      name, email, password, passwordConfirm, passwordInvalid, disabled,
    } = this.state;
    const emailInvalid = (user.status && user.status !== 201);
    return (
      <React.Fragment>
        <ModalHeader toggle={toggleSignup}>Signup</ModalHeader>
        <ModalBody>
          <Form onSubmit={e => this.handleSubmit(e)} id="signupForm">
            <FormGroup row>
              <Label for="name" sm={2}>Name</Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="name"
                  value={name}
                  placeholder="Name"
                  onChange={e => this.setState({ name: e.target.value.trim().length === 0 ? e.target.value.trim() : e.target.value })}
                  required
                  minLength={3}
                  maxLength={20}
                />
              </Col>
            </FormGroup>
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
                  invalid={emailInvalid}
                />
                <FormFeedback>Email already exists</FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleEmail2" sm={2}>Password</Label>
              <Col sm={10}>
                <Input
                  type="password"
                  name="password"
                  value={password}
                  onChange={e => this.setState({ password: e.target.value })}
                  required
                  invalid={passwordInvalid}
                  maxLength={20}
                  minLength={5}
                />
                <FormFeedback>Password Miss match</FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup row className="align-items-center">
              <Label for="passwordConfirm" sm={2}>Password Confirm </Label>
              <Col sm={10}>
                <Input
                  type="password"
                  name="passwordConfirm"
                  value={passwordConfirm}
                  onChange={e => this.setState({ passwordConfirm: e.target.value })}
                  required
                  minLength={5}
                  maxLength={20}
                  invalid={passwordInvalid}
                />
              </Col>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="info" form="signupForm" disabled={disabled}>Signup</Button>{' '}
          <Button color="secondary" onClick={toggleSignup}>Cancel</Button>
        </ModalFooter>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ userReducer }) => {
  const { user } = userReducer;
  return { user };
};

export default connect(mapStateToProps, { signupAction })(Signup);
