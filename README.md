# Dazn_Assignment 
Movie Lobby API
This project is a RESTful API for a movie lobby for OTT applications. It allows users to perform CRUD operations on movies including listing all movies, searching for movies, adding a new movie, updating an existing movie, and deleting a movie.

Setup Instructions
Clone the repository:

bash
Copy code
git clone <repository-url>
Install dependencies:

bash
Copy code
cd <project-folder>
npm install
Set up environment variables:

Create a .env file in the root directory.
Define the following variables:
bash
Copy code
PORT=3000
MONGODB_URI=mongodb://localhost:27017/moviedb
Run the API:

bash
Copy code
npm start
API Documentation
Endpoints
GET /api/movies
Description: List all movies in the lobby.
Sample Request:
http
Copy code
GET /api/movies
Sample Response:
json
Copy code
[
  {
    "title": "Inception",
    "genre": "Sci-Fi",
    "rating": 8.8,
    "streamingLink": "https://www.example.com/inception"
  },
  {
    "title": "The Dark Knight",
    "genre": "Action",
    "rating": 9.0,
    "streamingLink": "https://www.example.com/dark_knight"
  }
]
GET /api/search?q={query}
Description: Search for a movie by title or genre.
Sample Request:
http
Copy code
GET /api/search?q=Sci-Fi
Sample Response:
json
Copy code
[
  {
    "title": "Inception",
    "genre": "Sci-Fi",
    "rating": 8.8,
    "streamingLink": "https://www.example.com/inception"
  }
]
POST /api/movies
Description: Add a new movie to the lobby.
Sample Request:
http
Copy code
POST /api/movies
Content-Type: application/json

{
  "title": "Interstellar",
  "genre": "Sci-Fi",
  "rating": 8.6,
  "streamingLink": "https://www.example.com/interstellar"
}
Sample Response:
json
Copy code
{
  "title": "Interstellar",
  "genre": "Sci-Fi",
  "rating": 8.6,
  "streamingLink": "https://www.example.com/interstellar"
}
PUT /api/movies/:id
Description: Update an existing movie.
Sample Request:
http
Copy code
PUT /api/movies/65ec368f90778784fc42f79a
Content-Type: application/json

{
  "title": "Updated Movie Title",
  "genre": "Updated Genre",
  "rating": 9.5,
  "streamingLink": "https://www.example.com/updated_movie"
}
Sample Response:
json
Copy code
{
  "title": "Updated Movie Title",
  "genre": "Updated Genre",
  "rating": 9.5,
  "streamingLink": "https://www.example.com/updated_movie"
}
DELETE /api/movies/:id
Description: Delete a movie from the lobby.
Sample Request:
http
Copy code
DELETE /api/movies/65ec368f90778784fc42f79a
Sample Response:
json
Copy code
{
  "title": "Updated Movie Title",
  "genre": "Updated Genre",
  "rating": 9.5,
  "streamingLink": "https://www.example.com/updated_movie"
}
Test Cases
List all movies:

Verify that a GET request to /api/movies returns a list of all movies.
Search for a movie:

Verify that a GET request to /api/search?q=Sci-Fi returns a list of movies with genre "Sci-Fi".
Add a new movie:

Verify that a POST request to /api/movies with valid movie data adds the movie to the database.
Update a movie:

Verify that a PUT request to /api/movies/:id with valid movie ID and updated data updates the movie in the database.
Delete a movie:

Verify that a DELETE request to /api/movies/:id with valid movie ID deletes the movie from the database.
