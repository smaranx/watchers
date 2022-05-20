import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} color="info" expand="lg">
        <Container>

          <div className="navbar-translate">
            <NavbarBrand
              href=""
              target="_blank"
              id="navbar-brand"
            >
                                    <img
                        alt="..."
                        src={require("assets/logo.png").default}
                      ></img>
                      <span>WATCHERS NFT</span>
            </NavbarBrand>
            
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>

              <NavItem>
                <NavLink href="">
                  HOME                </NavLink>
              </NavItem>
  
              <NavItem>
                <NavLink
                  href=""
                  target="_blank"
                  id="facebook-tooltip"
                >
ABOUT US
                </NavLink>
                
              </NavItem>
              <NavItem>
                <NavLink
                  href=""
                  target="_blank"
                  id="facebook-tooltip"
                >
ROADMAP                </NavLink>
             
              </NavItem>
              <NavItem>
                <NavLink
                  href=""
                  target="_blank"
                  id="facebook-tooltip"
                >
THE MOB                </NavLink>
         
              </NavItem>
              <NavItem>
                <NavLink
                  href=""
                  target="_blank"
                  id="facebook-tooltip"
                >
FAQ                </NavLink>
                
              </NavItem>
              <NavItem>
                <NavLink
                  href=""
                  target="_blank"
                  id="facebook-tooltip"
                >
TEAM                </NavLink>
                
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ExamplesNavbar;
