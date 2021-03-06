import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Gnav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navbar">
      <Navbar color="warning" light expand="md" style={{position:"sticky",top:0}}>
        <NavbarBrand href="/">Cyrus Restaurant</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Drinks/">HUVUDRÄTTER</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Drinks/">Drinks</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Food/">GRILSPETT</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Drinks/">ÖVRIGRRÄTTER</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Drinks/">KVÄLENS SPECIALL</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Drinks/">RÄTTER</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Drinks/">DISSERT</NavLink>
            </NavItem>
            
             <NavItem>
              <NavLink href="/Drinks/">DAGENS PIZZA</NavLink>
            </NavItem>
           
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
  );
}


 
export default Gnav;