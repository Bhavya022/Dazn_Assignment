import express from 'express';
import mongoose from 'mongoose';
import movieRoutes from './routes/movieRoutes';

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use('/api', movieRoutes);

const PORT = process.env.PORT || 3000;

// Connect to MongoDB and start server
mongoose.connect('mongodb+srv://bhavya:bhavya@cluster0.kin5ecd.mongodb.net/moviedb?retryWrites=true&w=majority')
    .then(() => {
        console.log('Connected to MongoDB');
        // Start the server
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((error: any) => console.log(error.message));
