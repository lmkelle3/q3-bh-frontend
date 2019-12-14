import React from "react";
import { Card, Nav, NavItem, NavLink } from "reactstrap";

const SideNav = () => {
  return (
    <Card body inverse color="light" className="m-3">
      <Nav vertical>
        <NavItem>
          <NavLink href="/login">Login</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/main/books">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/main/form">Add New Book</NavLink>
        </NavItem>
      </Nav>
    </Card>
  );
};

export default SideNav;
