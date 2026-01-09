export const validateMovie = (movie) => {
    const errors = {};

    if (!movie.title || movie.title.trim() === '') {
        errors.title = 'Title is required';
    }

    if (!movie.director || movie.director.trim() === '') {
        errors.director = 'Director is required';
    }

    if (!movie.year || movie.year < 1900 || movie.year > new Date().getFullYear() + 5) {
        errors.year = 'Please enter a valid year';
    }

    if (!movie.description || movie.description.trim() === '') {
        errors.description = 'Description is required';
    }

    return errors;
};

export const filterMovies = (movies, searchQuery, selectedGenre) => {
    return movies.filter(movie => {
        const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            movie.director.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesGenre = selectedGenre === 'All' || movie.genre === selectedGenre;
        return matchesSearch && matchesGenre;
    });
};
