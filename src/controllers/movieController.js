"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMovie = exports.updateMovie = exports.addMovie = exports.searchMovies = exports.getAllMovies = void 0;
const Movie_1 = __importDefault(require("../models/Movie"));
const getAllMovies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movies = yield Movie_1.default.find();
        res.status(200).json(movies);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getAllMovies = getAllMovies;
const searchMovies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.query.q;
    try {
        const movies = yield Movie_1.default.find({
            $or: [
                { title: { $regex: query, $options: 'i' } }, // Case-insensitive search by title
                { genre: { $regex: query, $options: 'i' } } // Case-insensitive search by genre
            ]
        });
        res.status(200).json(movies);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.searchMovies = searchMovies;
const addMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, genre, rating, streamingLink } = req.body;
    try {
        const newMovie = new Movie_1.default({ title, genre, rating, streamingLink });
        yield newMovie.save();
        res.status(201).json(newMovie);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.addMovie = addMovie;
const updateMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { title, genre, rating, streamingLink } = req.body;
    try {
        const updatedMovie = yield Movie_1.default.findByIdAndUpdate(id, { title, genre, rating, streamingLink }, { new: true });
        if (updatedMovie) {
            res.status(200).json(updatedMovie);
        }
        else {
            res.status(404).json({ message: "Movie not found" });
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.updateMovie = updateMovie;
const deleteMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const deletedMovie = yield Movie_1.default.findByIdAndDelete(id);
        if (deletedMovie) {
            res.status(200).json(deletedMovie);
        }
        else {
            res.status(404).json({ message: "Movie not found" });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.deleteMovie = deleteMovie;
