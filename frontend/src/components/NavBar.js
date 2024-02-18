import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import styles from "../styles/NavBar.module.css";

const IconsLoggedIn = (
  <>
    <Nav.Link href="#features">Feed</Nav.Link>
    <Nav.Link href="#pricing">Saved Posts</Nav.Link>
  </>
);

const IconsLoggedOut = (
  <>
    <Nav.Link href="#deets">Log In</Nav.Link>
    <Nav.Link href="#memes">Register</Nav.Link>
  </>
);

const NavBar = () => {
  return (
    // copied and modified
    // source: https://react-bootstrap-v4.netlify.app/components/navbar/
    <Navbar collapseOnSelect expand="sm" className={styles.NavBar}>
      <Navbar.Brand href="#home" className="d-flex flex-row">
        <i className="fa-brands fa-earlybirds fa-lg mt-4 mr-2"></i>
        <h2 className={`${styles.Brand} mr-auto`}>Birdie</h2>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">Logged in icons</Nav>
        <Nav>Logged Out Icons</Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
