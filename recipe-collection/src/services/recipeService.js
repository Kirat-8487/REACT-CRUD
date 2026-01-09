import axios from 'axios';

const API_BASE_URL = 'https://dummyjson.com';

// Create axios instance
const recipeApi = axios.create({
    baseURL: API_BASE_URL,
});

/**
 * Fetch all recipes with pagination
 * @param {number} limit - Number of recipes to fetch
 * @param {number} skip - Number of recipes to skip
 */
export const getAllRecipes = async (limit = 30, skip = 0) => {
    try {
        const response = await recipeApi.get('/recipes', {
            params: { limit, skip }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching recipes:', error);
        throw error;
    }
};

/**
 * Get a single recipe by ID
 * @param {number} id - Recipe ID
 */
export const getRecipeById = async (id) => {
    try {
        const response = await recipeApi.get(`/recipes/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching recipe:', error);
        throw error;
    }
};

/**
 * Add a new recipe
 * @param {object} recipeData - Recipe data
 */
export const addRecipe = async (recipeData) => {
    try {
        const response = await recipeApi.post('/recipes/add', recipeData);
        return response.data;
    } catch (error) {
        console.error('Error adding recipe:', error);
        throw error;
    }
};

/**
 * Update an existing recipe
 * @param {number} id - Recipe ID
 * @param {object} recipeData - Updated recipe data
 */
export const updateRecipe = async (id, recipeData) => {
    try {
        const response = await recipeApi.put(`/recipes/${id}`, recipeData);
        return response.data;
    } catch (error) {
        console.error('Error updating recipe:', error);
        throw error;
    }
};

/**
 * Delete a recipe
 * @param {number} id - Recipe ID
 */
export const deleteRecipe = async (id) => {
    try {
        const response = await recipeApi.delete(`/recipes/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting recipe:', error);
        throw error;
    }
};

/**
 * Search recipes
 * @param {string} query - Search query
 */
export const searchRecipes = async (query) => {
    try {
        const response = await recipeApi.get('/recipes/search', {
            params: { q: query }
        });
        return response.data;
    } catch (error) {
        console.error('Error searching recipes:', error);
        throw error;
    }
};

export default {
    getAllRecipes,
    getRecipeById,
    addRecipe,
    updateRecipe,
    deleteRecipe,
    searchRecipes,
};
