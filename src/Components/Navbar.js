import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "../App.css";

class Header extends React.Component {
  state = {};
  render() {
    return (
      <div className="wrap">
        <div>
          <Navbar className="brave" variant="dark">
            <Navbar.Brand className="name-web"></Navbar.Brand>
            <Nav className="mr-auto">
              <Link className="link1" to="/">
                Home
              </Link>
              <Link className="link2" to="/detail">
                My Profile
              </Link>
              {/* <Link className="link3" to="#">
                Creation
              </Link>
              <Link className="link4" to="#">
                Adventure
              </Link> */}
            </Nav>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default Header;