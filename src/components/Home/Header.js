
import React from 'react';
import { NavbarBrand, Navbar } from 'reactstrap';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Three D store</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}
