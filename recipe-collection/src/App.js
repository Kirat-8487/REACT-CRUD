import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ToastNotification from './components/common/Toast';
import Home from './pages/Home';
import AddRecipe from './pages/AddRecipe';
import EditRecipe from './pages/EditRecipe';
import RecipeDetails from './pages/RecipeDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <Header />
          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add" element={<AddRecipe />} />
              <Route path="/edit/:id" element={<EditRecipe />} />
              <Route path="/recipe/:id" element={<RecipeDetails />} />
            </Routes>
          </main>
          <Footer />
          <ToastNotification />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
