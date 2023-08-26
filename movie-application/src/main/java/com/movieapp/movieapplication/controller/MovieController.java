package com.movieapp.movieapplication.controller;

import com.movieapp.movieapplication.model.Movie;

import com.movieapp.movieapplication.repository.MovieRepository;
import com.movieapp.movieapplication.service.config.JwtService;
import com.movieapp.movieapplication.service.user.User;
import com.movieapp.movieapplication.service.user.UserRepository;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class MovieController {

    private MovieRepository movieRepository;
    private UserRepository userRepository;

    private JwtService jwtService;
    public MovieController(MovieRepository movieRepository, UserRepository userRepository, JwtService jwtService) {
        this.movieRepository = movieRepository;
        this.userRepository = userRepository;
        this.jwtService = jwtService;

    }


//    GET all movies for a certain user
    @GetMapping("/api/v1/users/movies")
    public List<Movie> getAllUsersSavedMovies(@RequestHeader("Authorization") String authorizationHeader) {
//      extract token from authentication headers
        String token = authorizationHeader.substring("Bearer ".length());

//      use service to extract the EMAIL from the token claims
        String username = jwtService.extractUsername(token);

//      check if user exists in the database
        Optional<User> user = userRepository.findByEmail(username);

//      validate that the user with matching id does exist
        if (user.isEmpty())
            throw new RuntimeException("No user with found");

//      send back the list of movies that belong to the user
        return user.get().getMovies();

    }

//    Get a Single Movie (Possibly need to integrate the movie api into this endpoint)
//    @GetMapping("/api/v1/movies/{id}")
//    public Optional<Movie> findSingleMovie(@PathVariable int id) {
//        Optional<Movie> movie = movieRepository.findById(id);
//        if (movie.isEmpty())
//            throw new RuntimeException("No movie with id:" + id);
//
//        return movie;
//    }
//    Save a movie to user account
    @PostMapping("/api/v1/users/movies")
    public List<Movie> saveUserMovie(@RequestHeader("Authorization") String authorizationHeader, @Valid @RequestBody Movie movie) {
        //      extract token from authentication headers
        String token = authorizationHeader.substring("Bearer ".length());
        String username = jwtService.extractUsername(token);
        Optional<User> user = userRepository.findByEmail(username);

        if (user.isEmpty())
            throw new RuntimeException("User not Found");

        movie.setUser(user.get());
        movieRepository.save(movie);

        return user.get().getMovies();
    }


//    Delete from saved Movies
    @DeleteMapping("/api/v1/movie/{id}")
    public int deleteMovie(@RequestHeader("Authorization") String authorizationHeader, @PathVariable int id){
        //      extract token from authentication headers
        String token = authorizationHeader.substring("Bearer ".length());

//      use service to extract the EMAIL from the token claims
        String username = jwtService.extractUsername(token);

//      check if user exists in the database
        Optional<User> user = userRepository.findByEmail(username);
        if (user.isEmpty())
            throw new RuntimeException("unauthorized");

        Optional<Movie> movieToDelete = user.get().getMovies().stream().filter(u -> u.getId().equals(id))
                .findFirst();


        if (movieToDelete.isPresent()) {
            Movie movie = movieToDelete.get();
            // Now you have the Movie instance
            movieRepository.delete(movie);
        } else {
            throw new RuntimeException("Movie Not Found");
        }

        return id;
    }
}
