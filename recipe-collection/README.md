# RecipeBox 🍳

A modern React application for discovering, creating, and managing your favorite recipes with full CRUD operations. Built with Redux Toolkit, Bootstrap, SASS, and the DummyJSON Recipes API.

## ✨ Features

- **Full CRUD Operations**: Create, read, update, and delete recipes
- **Recipe Discovery**: Browse 30+ delicious recipes from the DummyJSON API
- **Search Functionality**: Search recipes by name or ingredients
- **Detailed Recipe View**: View complete recipe details including ingredients, instructions, prep time, and nutritional information
- **Responsive Design**: Beautiful, food-themed UI that works seamlessly on desktop, tablet, and mobile
- **Toast Notifications**: Real-time feedback for all user actions
- **Modern Styling**: Vibrant colors and smooth animations with Bootstrap 5 and SASS

## 🛠️ Tech Stack

- **React** 19.2.3 (create-react-app)
- **Redux Toolkit** 2.11.2 (state management)
- **React Router** 7.12.0 (routing)
- **Bootstrap** 5.3.8 (styling framework)
- **React Bootstrap** 2.10.10 (Bootstrap components)
- **SASS** 1.97.2 (CSS preprocessor)
- **Axios** 1.13.2 (HTTP client)
- **DummyJSON Recipes API** (recipe data)

## 🚀 Installation

1. Clone the repository:
```bash
git clone https://github.com/Kirat-8487/REACT-CRUD.git
cd recipe-collection
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
src/
├── components/
│   ├── common/          # Reusable components (Toast, Loading, etc.)
│   ├── layout/          # Header and Footer
│   └── recipes/         # Recipe-specific components
├── pages/               # Page components (Home, AddRecipe, EditRecipe, RecipeDetails)
├── services/            # API service layer
├── store/               # Redux store and slices
├── styles/              # Global SASS styles
├── utils/               # Helper functions and constants
├── App.js               # Main app component
├── App.scss             # App-specific styles
└── index.js             # Entry point
```

## 📖 Usage

### Browsing Recipes
- View all recipes on the home page in a beautiful card grid layout
- Each recipe card displays an image, name, cuisine type, and difficulty level
- Click on any recipe card to view full details

### Viewing Recipe Details
- Click on a recipe to see complete information:
  - Ingredients list
  - Step-by-step instructions
  - Prep time, cook time, and servings
  - Nutritional information (calories, protein, etc.)
  - Difficulty level and cuisine type
  - User rating and review count

### Adding a Recipe
1. Click "Add Recipe" in the navigation
2. Fill in the recipe details:
   - Name, cuisine, and difficulty
   - Ingredients (comma-separated)
   - Cooking instructions
   - Prep time, cook time, and servings
   - Calories per serving
3. Click "Add Recipe" to save

### Editing a Recipe
1. Navigate to a recipe's detail page
2. Click the "Edit Recipe" button
3. Update the desired fields
4. Click "Update Recipe" to save changes

### Deleting a Recipe
1. Navigate to a recipe's detail page
2. Click the "Delete Recipe" button
3. Confirm the deletion
4. You'll be redirected to the home page

### Searching Recipes
- Use the search bar in the header to find recipes by name or ingredients
- Search results update in real-time as you type

## 🎯 Available Scripts

- `npm start` - Runs the app in development mode on port 3000
- `npm test` - Launches the test runner in interactive watch mode
- `npm run build` - Builds the app for production to the `build` folder
- `npm run eject` - Ejects from create-react-app (⚠️ one-way operation)

## 🌐 API Integration

This project uses the [DummyJSON Recipes API](https://dummyjson.com/docs/recipes) for recipe data:

- **Base URL**: `https://dummyjson.com`
- **Endpoints**:
  - `GET /recipes` - Fetch all recipes (with pagination)
  - `GET /recipes/:id` - Fetch single recipe
  - `GET /recipes/search?q=query` - Search recipes
  - `POST /recipes/add` - Add new recipe (simulated)
  - `PUT /recipes/:id` - Update recipe (simulated)
  - `DELETE /recipes/:id` - Delete recipe (simulated)

**Note**: POST, PUT, and DELETE operations are simulated by the API and won't persist data. In a production environment, you would replace these with your actual backend API.

## 🎨 Design Features

- **Food-Themed Color Palette**: Warm, appetizing colors inspired by culinary aesthetics
- **Glassmorphism Effects**: Modern frosted glass effects for cards and overlays
- **Smooth Animations**: Hover effects, transitions, and micro-interactions
- **Google Fonts**: Inter font family for clean, modern typography
- **Bootstrap Icons**: Comprehensive icon set for UI elements
- **Responsive Grid**: Adapts beautifully from mobile to desktop

## 🔮 Future Enhancements

- User authentication and personal recipe collections
- Recipe favorites and bookmarking
- Advanced filtering (by cuisine, difficulty, dietary restrictions)
- Recipe ratings and reviews
- Shopping list generation from ingredients
- Meal planning and calendar integration
- Recipe sharing on social media
- Nutritional calculator and diet tracking
- Image upload for custom recipes
- Print-friendly recipe cards

## 📝 License

This project is open source and available for educational purposes.

## 👨‍💻 Author

Created by [Kirat-8487](https://github.com/Kirat-8487)

---

**Enjoy cooking with RecipeBox! 🍽️**
