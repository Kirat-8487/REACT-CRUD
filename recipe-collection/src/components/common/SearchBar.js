import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';

const SearchBar = ({ value, onChange, placeholder }) => {
    return (
        <InputGroup className="mb-3">
            <InputGroup.Text>
                <i className="bi bi-search"></i>
            </InputGroup.Text>
            <Form.Control
                type="text"
                placeholder={placeholder || "Search movies..."}
                value={value}
                onChange={onChange}
            />
        </InputGroup>
    );
};

export default SearchBar;
