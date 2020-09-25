// Libraries:
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Components:
import { faUser, faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
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
  Badge,
  Container,
} from "reactstrap";
import SearchPopover from "../toolbox/SearchPopover";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar sticky="top" color="light" light expand="lg">
      <Container className="px-lg-5">
        <NavbarBrand href="/">E-Commercial</NavbarBrand>
        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Clothing
              </DropdownToggle>

              <DropdownMenu right>
                <DropdownItem href="/categories/t-shirt/">T-Shirt</DropdownItem>

                <DropdownItem href="/categories/track-suit/">Shorts / Track Suit</DropdownItem>

                <DropdownItem href="/categories/dress/">Dress</DropdownItem>

                <DropdownItem href="/categories/hat/">Hat</DropdownItem>

                <DropdownItem href="/categories/socks/">Socks</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <NavItem>
              <NavLink href="/categories/eyewear/">Eyewear</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/categories/watch/">Watch </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/categories/lighting/">Lighting </NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Accessories
              </DropdownToggle>

              <DropdownMenu right>
                <DropdownItem href="/categories/chain/">Chain</DropdownItem>

                <DropdownItem href="/categories/necklace/">Necklace</DropdownItem>

                <DropdownItem href="/categories/wristlet/">Wristlet</DropdownItem>

                <DropdownItem href="/categories/earring/">Earring</DropdownItem>

                <DropdownItem href="/categories/ring/">Ring</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>

          <Nav navbar>
            <NavItem>
              <NavLink>
                <SearchPopover />
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/auth/">
                <FontAwesomeIcon icon={faUser} />
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/favs/">
                <FontAwesomeIcon icon={faHeart} />
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/cart/">
                <FontAwesomeIcon icon={faShoppingCart} /> <Badge color="danger">0</Badge>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Example;
