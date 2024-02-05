import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { House, Book, InfoCircle } from 'react-bootstrap-icons'; // Assuming you're open to using react-bootstrap-icons

const MyNav = () => (
  <Navbar expand="lg" variant="dark" style={{ backgroundColor: '#343a40' }}>
    <Container fluid>
      <Navbar.Brand href="#" style={{ color: '#f8f9fa', fontWeight: 'bold' }}>EpiBooks</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#" style={{ color: '#f8f9fa' }}>
            <House className="mb-1" /> Home
          </Nav.Link>
          <Nav.Link href="#" style={{ color: '#f8f9fa' }}>
            <InfoCircle className="mb-1" /> About
          </Nav.Link>
          <Nav.Link href="#" style={{ color: '#f8f9fa' }}>
            <Book className="mb-1" /> Browse
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MyNav;
