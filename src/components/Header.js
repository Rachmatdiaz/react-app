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
import './Header.css';
import NameForm from './nameForm';

//function component
function Header(props) {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);

        return (
            <>
            <div>
              <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Sepatu Compass</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                  <Nav className="mr-auto" navbar>
                    <NavItem>
                      <NavLink href="/components/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        Contact
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                         <NavLink href="https://www.instagram.com/katakiita.ig/" > Instagram</NavLink>
                        </DropdownItem>
                        <DropdownItem>
                          <NavLink href="https://api.whatsapp.com/send?phone=6285156536085" >WhatsApp</NavLink>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                          Reset
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                  <NavbarText> <NameForm/></NavbarText>
                </Collapse>
              </Navbar>
              {/* <div className="Header">
                <h1>Sepatu Compass</h1>
                
              </div> */}
            </div>
            </>

          );
    }

export default Header;