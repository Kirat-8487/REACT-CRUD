import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Badge, Button, ListGroup } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecipeById } from '../store/recipeSlice';
import Loader from '../components/common/Loader';

const MovieDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { selectedRecipe, loading } = useSelector(state => state.recipes);

    useEffect(() => {
        dispatch(fetchRecipeById(id));
    }, [dispatch, id]);

    if (loading || !selectedRecipe) {
        return <Loader />;
    }

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        for (let i = 0; i < 5; i++) {
            stars.push(
                <i
                    key={i}
                    className={`bi bi-star${i < fullStars ? '-fill' : ''}`}
                    style={{ color: '#FFC107', fontSize: '1.5rem' }}
                ></i>
            );
        }
        return stars;
    };

    return (
        <Container className="py-4">
            <Button
                variant="outline-secondary"
                onClick={() => navigate('/')}
                className="mb-4"
            >
                <i className="bi bi-arrow-left me-2"></i>
                Back to Recipes
            </Button>

            <Row>
                <Col md={5} className="mb-4">
                    <Card>
                        <Card.Img
                            src={selectedRecipe.image}
                            alt={selectedRecipe.name}
                            style={{ height: '400px', objectFit: 'cover' }}
                        />
                    </Card>
                </Col>

                <Col md={7}>
                    <h1 className="display-5 mb-3" style={{ color: '#FF6B35' }}>
                        {selectedRecipe.name}
                    </h1>

                    <div className="mb-3">{renderStars(selectedRecipe.rating)}</div>

                    <div className="mb-4">
                        <Badge bg="info" className="me-2 px-3 py-2">
                            <i className="bi bi-globe me-1"></i>
                            {selectedRecipe.cuisine}
                        </Badge>
                        <Badge bg="warning" text="dark" className="me-2 px-3 py-2">
                            <i className="bi bi-clock me-1"></i>
                            {selectedRecipe.prepTimeMinutes + selectedRecipe.cookTimeMinutes} min
                        </Badge>
                        <Badge bg="secondary" className="me-2 px-3 py-2">
                            <i className="bi bi-speedometer me-1"></i>
                            {selectedRecipe.difficulty}
                        </Badge>
                        <Badge bg="success" className="px-3 py-2">
                            <i className="bi bi-people me-1"></i>
                            {selectedRecipe.servings} servings
                        </Badge>
                    </div>

                    {selectedRecipe.tags && selectedRecipe.tags.length > 0 && (
                        <div className="mb-4">
                            {selectedRecipe.tags.map((tag, index) => (
                                <Badge key={index} bg="secondary" className="me-2 mb-2">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    )}

                    <Card className="mb-4">
                        <Card.Body>
                            <h5 className="mb-3">
                                <i className="bi bi-info-circle me-2"></i>
                                Nutrition
                            </h5>
                            <p className="mb-0">
                                <strong>{selectedRecipe.caloriesPerServing}</strong> calories per serving
                            </p>
                        </Card.Body>
                    </Card>

                    <div className="d-flex gap-2">
                        <Button
                            variant="primary"
                            onClick={() => navigate(`/edit/${selectedRecipe.id}`)}
                        >
                            <i className="bi bi-pencil me-2"></i>
                            Edit Recipe
                        </Button>
                    </div>
                </Col>
            </Row>

            <Row className="mt-4">
                <Col md={6}>
                    <Card className="mb-4">
                        <Card.Header>
                            <h5 className="mb-0">
                                <i className="bi bi-cart me-2"></i>
                                Ingredients
                            </h5>
                        </Card.Header>
                        <ListGroup variant="flush">
                            {selectedRecipe.ingredients && selectedRecipe.ingredients.map((ingredient, index) => (
                                <ListGroup.Item key={index}>
                                    <i className="bi bi-check-circle text-success me-2"></i>
                                    {ingredient}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <h5 className="mb-0">
                                <i className="bi bi-list-ol me-2"></i>
                                Instructions
                            </h5>
                        </Card.Header>
                        <ListGroup variant="flush">
                            {selectedRecipe.instructions && selectedRecipe.instructions.map((instruction, index) => (
                                <ListGroup.Item key={index}>
                                    <strong className="text-primary me-2">Step {index + 1}:</strong>
                                    {instruction}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default MovieDetails;
