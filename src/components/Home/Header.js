
import React from 'react';
import {
  NavbarToggler, Navbar, Collapse, Nav, NavItem, Modal,
} from 'reactstrap';
import {
  Link, NavLink, withRouter,
} from 'react-router-dom';
import { connect } from 'react-redux';
import scapicLogo from './scapic.png';
import { logoutAction } from '../../actions/user';
import Profile from '../Profile';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.logout = this.logout.bind(this);
    this.toggleProfile = this.toggleProfile.bind(this);
    this.state = {
      isOpen: false, profile: false,
    };
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    const { collapsed } = this.state;
    if (prevProps.location !== location && !collapsed) {
      this.setState({ isOpen: false });
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  logout() {
    this.props.logoutAction();
    this.props.history.push('/');
  }

  toggleProfile() {
    this.setState({
      profile: !this.state.profile,
    });
  }

  render() {
    const loggedIn = localStorage.getItem('token');
    const { profile, isOpen } = this.state;
    return (
      <div className="header">
        <Navbar color="light" light expand="md">
          <Link to="/" className="navlink"> <img className="footer-logo" src={scapicLogo} alt="abc" />Three D store</Link>
          {loggedIn
            && (
              <React.Fragment>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={isOpen} navbar>
                  <Nav className="ml-auto align-items-center" navbar>
                    <NavItem className="collapsable-navItems">
                      <NavLink className="navlink" to="/dashboard">Dashboard</NavLink>
                    </NavItem>
                    <NavItem className="collapsable-navItems">
                      <button onClick={this.toggleProfile} type="button" className="appBtn cursor-pointer userBtn" color="light"><i className="far fa-user" /></button>
                    </NavItem>
                    <NavItem className="collapsable-navItems">
                      <button onClick={this.logout} type="button" className="appBtn cursor-pointer" color="light">Logout <i className="fas fa-sign-out-alt" /></button>
                    </NavItem>
                  </Nav>
                </Collapse>
                <Modal isOpen={profile} toggle={this.toggleProfile}><Profile toggle={this.toggleProfile} /></Modal>
              </React.Fragment>
            )
          }
        </Navbar>
      </div>
    );
  }
}

export default withRouter(connect(null, { logoutAction })(Header));
