# Dazn_Assignment 

# Movie Lobby API

Welcome to the Movie Lobby API! This API allows users to manage a collection of movies, including listing all movies, searching for movies, adding new movies, updating existing movies, and deleting movies.

## Setup Instructions

1. **Clone the Repository**: 
git clone https://github.com/yourusername/movie-lobby-api.git

markdown
Copy code

2. **Install Dependencies**:
cd movie-lobby-api
npm install

markdown
Copy code

3. **Set Up MongoDB**:
- Make sure you have MongoDB installed and running locally, or use a MongoDB service like MongoDB Atlas.
- Replace the MongoDB connection URL in `src/app.ts` with your MongoDB connection string.

4. **Start the Server**:
npm start

less
Copy code

## API Documentation

### List all Movies
- **URL**: `/api/movies`
- **Method**: GET
- **Description**: Retrieves a list of all movies in the lobby.
- **Sample Response**:
```json
[ {   "title": "Inception",   "genre": "Sci-Fi",   "rating": 8.8,   "streamingLink": "https://www.example.com/inception" }, {   "title": "The Dark Knight",   "genre": "Action",   "rating": 9.0,   "streamingLink": "https://www.example.com/dark_knight" }]
Search for a Movie
URL: /api/search?q={query}
Method: GET
Description: Searches for a movie by title or genre.
Sample Request: /api/search?q=Inception
Add a New Movie
URL: /api/movies
Method: POST
Description: Adds a new movie to the lobby.
Sample Request Body:
json
Copy code
{
  "title": "Interstellar",
  "genre": "Sci-Fi",
  "rating": 8.6,
  "streamingLink": "https://www.example.com/interstellar"
}
Update an Existing Movie
URL: /api/movies/:id
Method: PUT
Description: Updates an existing movie's information.
Sample Request Body:
json
Copy code
{
  "title": "Updated Title",
  "genre": "Updated Genre",
  "rating": 9.5,
  "streamingLink": "https://www.example.com/updated_movie"
}
Delete a Movie
URL: /api/movies/:id
Method: DELETE
Description: Deletes a movie from the lobby.
Test Cases
Unit Tests
Test that all controller methods handle various edge cases and error conditions appropriately.
Test that the API responses are correctly formatted.
Integration Tests
Test that the API endpoints function correctly when tested together.
Test the API responses for expected results when interacting with the database.
Running Tests
bash
Copy code
npm test
