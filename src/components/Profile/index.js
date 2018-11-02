import React, { Component } from 'react';
import {
  ModalHeader, ModalBody, ModalFooter, Button,
} from 'reactstrap';
import { connect } from 'react-redux';
import { userProfileAction } from '../../actions/user';
import './profile.scss';

class Profile extends Component {
  componentDidMount() {
    this.props.userProfileAction();
  }

  render() {
    const { toggle, user } = this.props;
    const userObj = user.user;
    return (
      <React.Fragment>
        <ModalHeader toggle={toggle}><i className="fas fa-user" /> Profile</ModalHeader>
        <ModalBody>
          {
            userObj ? (
              <React.Fragment>
                <div><span className="profile-title">Name: </span><span className="profile-data">{userObj.name}</span></div>
                <div><span className="profile-title">Email: </span><span className="profile-data">{userObj.email}</span></div>
                <div><span className="profile-title">Unique Id: </span><span className="profile-data">{userObj._id}</span></div>
                <div><span className="profile-title">Signup Date: </span><span className="profile-data">{(new Date(userObj.createdAt)).toString()}</span></div>
              </React.Fragment>
            ) : <span>Loading ...</span>
          }
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ userReducer }) => {
  const { user } = userReducer;
  return { user };
};

export default connect(mapStateToProps, { userProfileAction })(Profile);
