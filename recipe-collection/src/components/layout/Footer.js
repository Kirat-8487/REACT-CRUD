import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-white mt-5 py-4">
            <Container>
                <div className="text-center">
                    <p className="mb-0">© 2024 Movie Collection Manager. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
