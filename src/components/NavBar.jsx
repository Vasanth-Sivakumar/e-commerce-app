import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";

function NavBar() {
  const state = useSelector((state) => state.handleCart);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link className="navbar-brand" to="#">
          <img src="/Assets/logo.png" alt="Logo" width={50} height={50} />
        </Link>
        <Link className="navbar-brand py-1 fw-bold fs-4" to="#">
          OnePiece Store
        </Link>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" className="fs-5">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/products" className="fs-5">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="fs-5">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="fs-5">
              Contact
            </Nav.Link>
          </Nav>
          <div className="buttons">
            <Link className="btn btn-outline-dark" type="button" to="/login">
              <i class="fa fa-user"></i> Login
            </Link>
            <Link className="btn btn-outline-dark ms-2" type="button" to="/register">
              <i class="fa fa-user-plus"></i> Register
            </Link>
            <Link to="/cart" className="btn btn-outline-dark ms-2" type="button">
              <i class="fa fa-shopping-cart"></i> Cart ({state.length})
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
