
import React from 'react';
import {
  NavbarToggler, Navbar, Collapse, Nav, NavItem,
} from 'reactstrap';
import { Link, NavLink, withRouter } from 'react-router-dom';
import scapicLogo from './scapic.png';

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
      this.toggle();
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div className="header">
        <Navbar color="light" light expand="md">
          <Link to="/" className="navlink"> <img className="footer-logo" src={scapicLogo} alt="abc" />Three D store</Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="navlink" to="/dashboard">Dashboard</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(Header);
