"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const movieController_1 = require("../controllers/movieController");
const router = express_1.default.Router();
// GET all movies
router.get('/movies', movieController_1.getAllMovies);
// GET search for movies by title or genre
router.get('/search', movieController_1.searchMovies);
// POST add a new movie
router.post('/movies', movieController_1.addMovie);
// PUT update an existing movie
router.put('/movies/:id', movieController_1.updateMovie);
// DELETE delete a movie
router.delete('/movies/:id', movieController_1.deleteMovie);
exports.default = router;
