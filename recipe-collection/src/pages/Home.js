import React, { useEffect, useMemo } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecipes, setSearchQuery } from '../store/recipeSlice';
import RecipeList from '../components/recipes/RecipeList';
import SearchBar from '../components/common/SearchBar';
import Loader from '../components/common/Loader';

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { recipes, loading, error, searchQuery } = useSelector(state => state.recipes);

    useEffect(() => {
        dispatch(fetchRecipes());
    }, [dispatch]);

    // Filter recipes based on search
    const filteredRecipes = useMemo(() => {
        if (!searchQuery) return recipes;

        return recipes.filter(recipe =>
            recipe.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            recipe.cuisine?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            recipe.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
        );
    }, [recipes, searchQuery]);

    if (loading && recipes.length === 0) return <Loader />;

    if (error) {
        return (
            <Container className="py-5">
                <div className="alert alert-danger" role="alert">
                    <i className="bi bi-exclamation-triangle-fill me-2"></i>
                    Error loading recipes: {error}
                </div>
            </Container>
        );
    }

    return (
        <Container fluid className="py-4">
            {/* Header */}
            <Row className="mb-4">
                <Col>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h1 className="display-4 mb-2" style={{ color: '#FF6B35' }}>
                                <i className="bi bi-egg-fried me-3"></i>
                                Recipe Collection
                            </h1>
                            <p className="lead text-muted">
                                Discover and manage delicious recipes
                            </p>
                        </div>
                        <Button
                            variant="primary"
                            size="lg"
                            onClick={() => navigate('/add')}
                        >
                            <i className="bi bi-plus-circle me-2"></i>
                            Add Recipe
                        </Button>
                    </div>
                </Col>
            </Row>

            {/* Search Bar */}
            <Row className="mb-4">
                <Col md={6}>
                    <SearchBar
                        value={searchQuery}
                        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
                        placeholder="Search recipes by name, cuisine, or tags..."
                    />
                </Col>
                <Col md={6} className="text-end">
                    <p className="text-muted mt-2">
                        Showing {filteredRecipes.length} of {recipes.length} recipes
                    </p>
                </Col>
            </Row>

            {/* Recipe List */}
            <RecipeList recipes={filteredRecipes} />
        </Container>
    );
};

export default Home;
