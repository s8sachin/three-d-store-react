
import React from 'react';
import { NavbarBrand, Navbar } from 'reactstrap';
import scapicLogo from './scapic.png';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><img className="footer-logo" src={scapicLogo} alt="abc" />Three D store</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}
