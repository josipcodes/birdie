// import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import styles from "../styles/NavBar.module.css";
import axios from "axios";
// import { CurrentUserContext } from "../App";
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";



const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const handleLogOut = async () => {
    try {
      console.log("user", currentUser)
      await axios.post("/dj-rest-auth/logout/");
      setCurrentUser(null)
      console.log("user", currentUser)
    } catch (err) {
      console.log(err);
    }
  };

  const IconsLoggedIn = (
    <>
      <Nav.Link href="#features">Feed</Nav.Link>
      <Nav.Link href="#pricing">Saved Posts</Nav.Link>
      <Nav.Link to="/" onClick={handleLogOut}>Log Out</Nav.Link>
    </>
  );
  
  const IconsLoggedOut = (
    <>
      <Nav.Link to="/login">Log In</Nav.Link>
      <Nav.Link href="#memes">Register</Nav.Link>
    </>
  );


  return (
    // copied and modified
    // source: https://react-bootstrap-v4.netlify.app/components/navbar/
    <Navbar collapseOnSelect expand="sm" className={styles.NavBar}>
      <Navbar.Brand href="#home" className="d-flex flex-row">
        <i className="fa-brands fa-earlybirds fa-lg mt-4 mr-2"></i>
        <h2 className={`${styles.Brand} mr-auto`}>Birdie</h2>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbar-dark" id={styles.Toggle} />
      <Navbar.Collapse id="responsive-navbar-nav">
        {/* something is wrong here */}
      { !currentUser && IconsLoggedIn}
        <Nav className="mr-auto">Logged in icons</Nav>
        {/* something is wrong here */}
        { currentUser && IconsLoggedOut}
        <Nav>Logged Out Icons</Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
