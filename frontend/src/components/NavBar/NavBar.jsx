import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

function NavBar() {
  return (
    <Navbar color="light">
      <NavbarBrand href="/">Store App</NavbarBrand>
      <Nav tabs>
        <NavItem>
          <NavLink href="/users">View Users</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="/product/:id">
            View Product
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/create-user">Sign Up</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
