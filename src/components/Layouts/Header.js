import React, { useState, useEffect } from "react";

import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/logo.png";
import "../../styles/HeaderStyles.css";
import APIService from "../../api/APIService";
import { useCookies } from "react-cookie";

function Header() {
  const [nav, setNav] = useState(false);

  //Scroll Navbar

  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
  };

  window.addEventListener("scroll", changeValueOnScroll);

  //get user details

  const [username, setUsername, removeUsername] = useCookies(["username"]);
  const [role, setRole,removeRole] = useCookies(["role"]);
  const [id, setId, removeId] = useCookies(["id"]);
  const [token, setToken, removeToken] = useCookies(["mytoken"]);
  //load user details

  useEffect(() => {
    if (token["mytoken"]) {
      APIService.GetUserDetails(token["mytoken"])
        .then((resp) => setUsername("username", resp.username))
        .catch((error) => console.log(error));

      APIService.GetUserDetails(token["mytoken"])
        .then((resp) => setRole("role", resp.role))
        .catch((error) => console.log(error));

      APIService.GetUserDetails(token["mytoken"])
        .then((resp) => setRole("id", resp.id))
        .catch((error) => console.log(error));
    }
  }, [token]);

  //logout function

  const logoutBtn = () =>{
    removeId(['id'])
    removeRole(['role'])
    removeUsername(['username'])
    removeToken(['mytoken'])
  }
  return (
    <>
      <header>
        <Navbar
          collapseOnSelect
          expand="lg"
          className={`${nav === true ? "sticky" : ""}`}
        >
          <Container>
            <Navbar.Brand href="#home">
              <Link to={"/"} className="logo">
                <img src={Logo} alt="Logo" className="img-fluid" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to={"/home"}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to={"/menu"}>
                  Menu
                </Nav.Link>
                {role["role"]==='admin' ? (
                <Nav.Link as={Link} to={"/Admin"}>
                  Admin Panel
                </Nav.Link>
                 ) :null
}
                {username["username"] ? (
                  <>
                    <Nav.Link as={Link} to={"/orderHistory"}>
                      {username.username}
                    </Nav.Link>
                    <Nav.Link as={Link} onClick={logoutBtn}>
                      Log Out
                    </Nav.Link>
                  </>
                ) : (
                  <>
                    <Nav.Link as={Link} to={"/login"}>
                      Sign In
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/Signup"}>
                      Sign Up
                    </Nav.Link>
                  </>
                )}

                <Nav.Link as={Link} to={"/"}>
                  <div className="cart">
                    <i class="bi bi-bag fs-5"></i>
                    <em className="roundpoint">2</em>
                  </div>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default Header;
