import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import React from 'react'
import './Navbar.style.css'


export default function Nav_bar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand href="/home">Clothes Store</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Nav >
          <Nav.Link href="/home"> <span>Home</span></Nav.Link>
          <Nav.Link href="/men"><span>Men</span></Nav.Link>
          <Nav.Link href="/women"><span>Women</span></Nav.Link>
          <Nav.Link href="/jewelery"><span>Jewelery</span></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>)
}