import { Request, Response } from 'express';
import Movie, { IMovie } from '../models/Movie';

export const getAllMovies = async (req: Request, res: Response): Promise<void> => {
    try {
        const movies: IMovie[] = await Movie.find();
        res.status(200).json(movies);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};


export const searchMovies = async (req: Request, res: Response): Promise<void> => {
    const query: string = req.query.q as string;
    try {
        const movies: IMovie[] = await Movie.find({
            $or: [
                { title: { $regex: query, $options: 'i' } }, // Case-insensitive search by title
                { genre: { $regex: query, $options: 'i' } }  // Case-insensitive search by genre
            ]
        });
        res.status(200).json(movies);
    } catch (error:any) {
        res.status(500).json({ message: error.message });
    }
};

export const addMovie = async (req: Request, res: Response): Promise<void> => {
    const { title, genre, rating, streamingLink }: IMovie = req.body;
    try {
        const newMovie: IMovie = new Movie({ title, genre, rating, streamingLink });
        await newMovie.save();
        res.status(201).json(newMovie);
    } catch (error:any) {
        res.status(400).json({ message: error.message });
    }
};

export const updateMovie = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { title, genre, rating, streamingLink }: IMovie = req.body;
    try {
        const updatedMovie: IMovie | null = await Movie.findByIdAndUpdate(
            id,
            { title, genre, rating, streamingLink },
            { new: true }
        );
        if (updatedMovie) {
            res.status(200).json(updatedMovie);
        } else {
            res.status(404).json({ message: "Movie not found" });
        }
    } catch (error:any) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteMovie = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const deletedMovie: IMovie | null = await Movie.findByIdAndDelete(id);
        if (deletedMovie) {
            res.status(200).json(deletedMovie);
        } else {
            res.status(404).json({ message: "Movie not found" });
        }
    } catch (error:any) {
        res.status(500).json({ message: error.message });
    }
};
