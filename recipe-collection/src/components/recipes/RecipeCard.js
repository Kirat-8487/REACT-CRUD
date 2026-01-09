import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteRecipe } from '../../store/recipeSlice';

const RecipeCard = ({ recipe }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleDelete = (e) => {
        e.stopPropagation();
        if (window.confirm(`Delete "${recipe.name}"?`)) {
            dispatch(deleteRecipe(recipe.id));
        }
    };

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        for (let i = 0; i < 5; i++) {
            stars.push(
                <i
                    key={i}
                    className={`bi bi-star${i < fullStars ? '-fill' : ''}`}
                    style={{ color: '#FFC107' }}
                ></i>
            );
        }
        return stars;
    };

    return (
        <Card
            className="h-100 shadow-sm recipe-card"
            style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
            onClick={() => navigate(`/recipe/${recipe.id}`)}
        >
            <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <Card.Img
                    variant="top"
                    src={recipe.image}
                    alt={recipe.name}
                    style={{
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease'
                    }}
                    className="recipe-image"
                />
                <div style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    display: 'flex',
                    gap: '5px'
                }}>
                    <Badge bg="warning" text="dark">
                        <i className="bi bi-clock me-1"></i>
                        {recipe.prepTimeMinutes + recipe.cookTimeMinutes} min
                    </Badge>
                </div>
            </div>

            <Card.Body className="d-flex flex-column">
                <Card.Title className="mb-2" style={{ fontSize: '1.1rem', fontWeight: '600' }}>
                    {recipe.name}
                </Card.Title>

                {/* Rating */}
                <div className="mb-2">
                    {renderStars(recipe.rating)}
                    <small className="text-muted ms-2">({recipe.reviewCount} reviews)</small>
                </div>

                {/* Tags */}
                <div className="mb-3">
                    {recipe.tags && recipe.tags.slice(0, 2).map((tag, index) => (
                        <Badge key={index} bg="secondary" className="me-1 mb-1">
                            {tag}
                        </Badge>
                    ))}
                </div>

                {/* Info */}
                <div className="mb-3 small text-muted">
                    <div><i className="bi bi-egg-fried me-2"></i>{recipe.cuisine}</div>
                    <div><i className="bi bi-fire me-2"></i>{recipe.caloriesPerServing} cal</div>
                    <div><i className="bi bi-people me-2"></i>{recipe.servings} servings</div>
                </div>

                {/* Action Buttons */}
                <div className="mt-auto d-flex gap-2" onClick={(e) => e.stopPropagation()}>
                    <Button
                        variant="outline-primary"
                        size="sm"
                        className="flex-grow-1"
                        onClick={() => navigate(`/edit/${recipe.id}`)}
                    >
                        <i className="bi bi-pencil me-1"></i>
                        Edit
                    </Button>
                    <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={handleDelete}
                    >
                        <i className="bi bi-trash"></i>
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default RecipeCard;
