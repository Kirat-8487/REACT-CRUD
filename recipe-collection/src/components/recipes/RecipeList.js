import React from 'react';
import { Row, Col } from 'react-bootstrap';
import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes }) => {
    if (!recipes || recipes.length === 0) {
        return (
            <div className="text-center py-5">
                <i className="bi bi-egg-fried display-1 text-muted"></i>
                <h3 className="mt-3">No recipes found</h3>
                <p className="text-muted">Try adding a new recipe or adjusting your search</p>
            </div>
        );
    }

    return (
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {recipes.map((recipe) => (
                <Col key={recipe.id}>
                    <RecipeCard recipe={recipe} />
                </Col>
            ))}
        </Row>
    );
};

export default RecipeList;
