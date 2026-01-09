import React, { useEffect, useState } from 'react';
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipeById, updateRecipe } from '../store/recipeSlice';
import Loader from '../components/common/Loader';

const EditMovie = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { selectedRecipe, loading } = useSelector(state => state.recipes);

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

    useEffect(() => {
        dispatch(fetchRecipeById(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (selectedRecipe) {
            setFormData({
                name: selectedRecipe.name || '',
                ingredients: Array.isArray(selectedRecipe.ingredients) ? selectedRecipe.ingredients.join('\n') : '',
                instructions: Array.isArray(selectedRecipe.instructions) ? selectedRecipe.instructions.join('\n') : '',
                prepTimeMinutes: selectedRecipe.prepTimeMinutes || '',
                cookTimeMinutes: selectedRecipe.cookTimeMinutes || '',
                servings: selectedRecipe.servings || '',
                difficulty: selectedRecipe.difficulty || 'Easy',
                cuisine: selectedRecipe.cuisine || '',
                caloriesPerServing: selectedRecipe.caloriesPerServing || '',
                tags: Array.isArray(selectedRecipe.tags) ? selectedRecipe.tags.join(', ') : '',
                image: selectedRecipe.image || ''
            });
        }
    }, [selectedRecipe]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
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
        };

        try {
            await dispatch(updateRecipe({ id, recipeData })).unwrap();
            navigate(`/recipe/${id}`);
        } catch (error) {
            console.error('Failed to update recipe:', error);
        }
    };

    if (loading) return <Loader />;

    return (
        <Container className="py-4">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card>
                        <Card.Header>
                            <h3 className="mb-0">
                                <i className="bi bi-pencil me-2"></i>
                                Edit Recipe
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
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Tags (comma-separated)</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="tags"
                                        value={formData.tags}
                                        onChange={handleChange}
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
                                    />
                                </Form.Group>

                                <div className="d-flex gap-2">
                                    <Button variant="primary" type="submit">
                                        <i className="bi bi-check-circle me-2"></i>
                                        Update Recipe
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

export default EditMovie;
