import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllRecipes, getRecipeById, addRecipe as addRecipeAPI, updateRecipe as updateRecipeAPI, deleteRecipe as deleteRecipeAPI, searchRecipes } from '../services/recipeService';

const initialState = {
    recipes: [],
    selectedRecipe: null,
    searchResults: [],
    searchQuery: '',
    loading: false,
    error: null,
    toast: {
        show: false,
        message: '',
        type: ''
    }
};

// Async thunks
export const fetchRecipes = createAsyncThunk(
    'recipes/fetchAll',
    async ({ limit = 30, skip = 0 } = {}) => {
        const data = await getAllRecipes(limit, skip);
        return data.recipes;
    }
);

export const fetchRecipeById = createAsyncThunk(
    'recipes/fetchById',
    async (id) => {
        const recipe = await getRecipeById(id);
        return recipe;
    }
);

export const addRecipe = createAsyncThunk(
    'recipes/add',
    async (recipeData) => {
        const recipe = await addRecipeAPI(recipeData);
        return recipe;
    }
);

export const updateRecipe = createAsyncThunk(
    'recipes/update',
    async ({ id, recipeData }) => {
        const recipe = await updateRecipeAPI(id, recipeData);
        return recipe;
    }
);

export const deleteRecipe = createAsyncThunk(
    'recipes/delete',
    async (id) => {
        await deleteRecipeAPI(id);
        return id;
    }
);

export const searchRecipesAsync = createAsyncThunk(
    'recipes/search',
    async (query) => {
        const data = await searchRecipes(query);
        return data.recipes;
    }
);

const recipeSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
        clearSearchResults: (state) => {
            state.searchResults = [];
            state.searchQuery = '';
        },
        showToast: (state, action) => {
            state.toast = {
                show: true,
                message: action.payload.message,
                type: action.payload.type
            };
        },
        hideToast: (state) => {
            state.toast.show = false;
        }
    },
    extraReducers: (builder) => {
        builder
            // Fetch all recipes
            .addCase(fetchRecipes.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchRecipes.fulfilled, (state, action) => {
                state.loading = false;
                state.recipes = action.payload;
            })
            .addCase(fetchRecipes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            // Fetch recipe by ID
            .addCase(fetchRecipeById.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchRecipeById.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedRecipe = action.payload;
            })
            .addCase(fetchRecipeById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            // Add recipe
            .addCase(addRecipe.fulfilled, (state, action) => {
                state.recipes.unshift(action.payload);
                state.toast = {
                    show: true,
                    message: 'Recipe added successfully!',
                    type: 'success'
                };
            })

            // Update recipe
            .addCase(updateRecipe.fulfilled, (state, action) => {
                const index = state.recipes.findIndex(r => r.id === action.payload.id);
                if (index !== -1) {
                    state.recipes[index] = { ...state.recipes[index], ...action.payload };
                }
                // Also update selectedRecipe if it's the same recipe
                if (state.selectedRecipe && state.selectedRecipe.id === action.payload.id) {
                    state.selectedRecipe = { ...state.selectedRecipe, ...action.payload };
                }
                state.toast = {
                    show: true,
                    message: 'Recipe updated successfully!',
                    type: 'success'
                };
            })

            // Delete recipe
            .addCase(deleteRecipe.fulfilled, (state, action) => {
                state.recipes = state.recipes.filter(r => r.id !== action.payload);
                state.toast = {
                    show: true,
                    message: 'Recipe deleted successfully!',
                    type: 'danger'
                };
            })

            // Search recipes
            .addCase(searchRecipesAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(searchRecipesAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.searchResults = action.payload;
            })
            .addCase(searchRecipesAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export const {
    setSearchQuery,
    clearSearchResults,
    showToast,
    hideToast
} = recipeSlice.actions;

export default recipeSlice.reducer;
