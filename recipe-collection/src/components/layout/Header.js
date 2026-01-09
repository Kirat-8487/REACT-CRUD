import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar style={{ backgroundColor: '#FF6B35' }} variant="dark" expand="lg" className="navbar shadow-sm">
            <Container>
                <Navbar.Brand as={Link} to="/" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
                    <i className="bi bi-egg-fried me-2"></i>
                    RecipeBox
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">
                            <i className="bi bi-house-door me-1"></i>
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/add">
                            <i className="bi bi-plus-circle me-1"></i>
                            Add Recipe
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
