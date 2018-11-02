
import React from 'react';
import {
  NavbarToggler, Navbar, Collapse, Nav, NavItem,
} from 'reactstrap';
import {
  Link, NavLink, withRouter,
} from 'react-router-dom';
import { connect } from 'react-redux';
import scapicLogo from './scapic.png';
import { logoutAction } from '../../actions/user';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
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
    window.location.href = process.env.PUBLIC_URL;
  }

  render() {
    const loggedIn = localStorage.getItem('token');
    return (
      <div className="header">
        <Navbar color="light" light expand="md">
          <Link to="/" className="navlink"> <img className="footer-logo" src={scapicLogo} alt="abc" />Three D store</Link>
          {loggedIn
            && (
              <React.Fragment>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto align-items-center" navbar>
                    <NavItem className="collapsable-navItems">
                      <NavLink className="navlink" to="/dashboard">Dashboard</NavLink>
                    </NavItem>
                    <NavItem className="collapsable-navItems">
                      <button onClick={() => this.logout()} type="button" className="appBtn cursor-pointer" color="light">Logout <i className="fas fa-sign-out-alt" /></button>
                    </NavItem>
                  </Nav>
                </Collapse>
              </React.Fragment>
            )
          }
        </Navbar>
      </div>
    );
  }
}

export default withRouter(connect(null, { logoutAction })(Header));
