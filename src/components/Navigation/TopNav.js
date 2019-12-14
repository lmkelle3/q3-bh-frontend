import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const TopNav = () => {
  return (
    <div>
      <Navbar color="info" light expand="md">
        <Nav className="mr-auto" navbar>
          <NavbarBrand>BookHouse</NavbarBrand>
          <NavItem>
            <NavLink href="/main">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">
              GitHub
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default TopNav;
