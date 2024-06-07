Movie Endpoints
GET /movies: Retrieve a list of all favorite movies.
GET /movies/search?title=${searchText}: Search for movies by title.

Backend (Node.js + Express)
server.js: Entry point for the backend application.

routes/: Contains route definitions.
  userRoute.js: Route handlers for movie-related endpoints.

controllers/: Contains controller functions for handling requests and responses.
  movieController.js: Controller for movie-related operations.

models/: Contains Mongoose schemas and models.
MovieSchema.js: Mongoose schema for movie data.

Mongoose: MongoDB object modeling tool.