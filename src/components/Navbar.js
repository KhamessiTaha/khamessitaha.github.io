import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { 
  RiRocketLine, 
  RiHome4Line,
  RiUserStarLine,
  RiPlanetLine,
  RiFileTextLine,
  RiStarSLine 
} from "react-icons/ri";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={`${navColour ? "sticky" : "navbar"} space-themed-nav`}
    >
      <Container className="nav-container">
        <Navbar.Brand href="/taha-portfolio/" className="d-flex align-items-center brand-container">
          <img src={logo} className="img-fluid logo rotating-logo" alt="brand" />
          <span className="brand-text">Portfolio</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
          className="custom-toggler"
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link 
                as={Link} 
                to="/Home" 
                onClick={() => updateExpanded(false)}
                className="nav-link-space"
              >
                <RiHome4Line className="nav-icon" /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
                className="nav-link-space"
              >
                <RiUserStarLine className="nav-icon" /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
                className="nav-link-space"
              >
                <RiPlanetLine className="nav-icon" /> Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
                className="nav-link-space"
              >
                <RiFileTextLine className="nav-icon" /> Resume
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/KhamessiTaha/taha-portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <RiRocketLine style={{ fontSize: "1.2em" }} />{" "}
                <RiStarSLine style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;