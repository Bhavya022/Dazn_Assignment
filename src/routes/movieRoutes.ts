import express from 'express';
import { getAllMovies, searchMovies, addMovie, updateMovie, deleteMovie } from '../controllers/movieController';

const router = express.Router();

// GET all movies
router.get('/movies', getAllMovies);

// GET search for movies by title or genre
router.get('/search', searchMovies);

// POST add a new movie
router.post('/movies', addMovie);

// PUT update an existing movie
router.put('/movies/:id', updateMovie);

// DELETE delete a movie
router.delete('/movies/:id', deleteMovie);

export default router;
