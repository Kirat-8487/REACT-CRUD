import React, { useState } from 'react';
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addRecipe } from '../store/recipeSlice';

const AddMovie = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        name: '',
        ingredients: '',
        instructions: '',
        prepTimeMinutes: '',
        cookTimeMinutes: '',
        servings: '',
        difficulty: 'Easy',
        cuisine: '',
        caloriesPerServing: '',
        tags: '',
        image: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const recipeData = {
            ...formData,
            ingredients: formData.ingredients.split('\n').filter(i => i.trim()),
            instructions: formData.instructions.split('\n').filter(i => i.trim()),
            tags: formData.tags.split(',').map(t => t.trim()).filter(t => t),
            prepTimeMinutes: parseInt(formData.prepTimeMinutes) || 0,
            cookTimeMinutes: parseInt(formData.cookTimeMinutes) || 0,
            servings: parseInt(formData.servings) || 1,
            caloriesPerServing: parseInt(formData.caloriesPerServing) || 0,
            rating: 0,
            reviewCount: 0
        };

        dispatch(addRecipe(recipeData));
        navigate('/');
    };

    return (
        <Container className="py-4">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card>
                        <Card.Header>
                            <h3 className="mb-0">
                                <i className="bi bi-plus-circle me-2"></i>
                                Add New Recipe
                            </h3>
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Recipe Name *</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter recipe name"
                                    />
                                </Form.Group>

                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Cuisine</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="cuisine"
                                                value={formData.cuisine}
                                                onChange={handleChange}
                                                placeholder="e.g., Italian, Mexican"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Difficulty</Form.Label>
                                            <Form.Select
                                                name="difficulty"
                                                value={formData.difficulty}
                                                onChange={handleChange}
                                            >
                                                <option>Easy</option>
                                                <option>Medium</option>
                                                <option>Hard</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={4}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Prep Time (min)</Form.Label>
                                            <Form.Control
                                                type="number"
                                                name="prepTimeMinutes"
                                                value={formData.prepTimeMinutes}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Cook Time (min)</Form.Label>
                                            <Form.Control
                                                type="number"
                                                name="cookTimeMinutes"
                                                value={formData.cookTimeMinutes}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Servings</Form.Label>
                                            <Form.Control
                                                type="number"
                                                name="servings"
                                                value={formData.servings}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-3">
                                    <Form.Label>Ingredients (one per line) *</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={5}
                                        name="ingredients"
                                        value={formData.ingredients}
                                        onChange={handleChange}
                                        required
                                        placeholder="2 cups flour&#10;1 cup sugar&#10;3 eggs"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Instructions (one per line) *</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={5}
                                        name="instructions"
                                        value={formData.instructions}
                                        onChange={handleChange}
                                        required
                                        placeholder="Preheat oven to 350°F&#10;Mix dry ingredients&#10;Add wet ingredients"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Tags (comma-separated)</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="tags"
                                        value={formData.tags}
                                        onChange={handleChange}
                                        placeholder="dessert, easy, quick"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Calories per Serving</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="caloriesPerServing"
                                        value={formData.caloriesPerServing}
                                        onChange={handleChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Image URL</Form.Label>
                                    <Form.Control
                                        type="url"
                                        name="image"
                                        value={formData.image}
                                        onChange={handleChange}
                                        placeholder="https://example.com/image.jpg"
                                    />
                                </Form.Group>

                                <div className="d-flex gap-2">
                                    <Button variant="primary" type="submit">
                                        <i className="bi bi-check-circle me-2"></i>
                                        Add Recipe
                                    </Button>
                                    <Button variant="secondary" onClick={() => navigate('/')}>
                                        Cancel
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default AddMovie;
