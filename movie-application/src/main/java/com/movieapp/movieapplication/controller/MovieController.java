package com.movieapp.movieapplication.controller;

import com.movieapp.movieapplication.model.Movie;

import com.movieapp.movieapplication.repository.MovieRepository;
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
    public MovieController(MovieRepository movieRepository, UserRepository userRepository) {
        this.movieRepository = movieRepository;
        this.userRepository = userRepository;

    }

    @GetMapping("/api/v1/users/{id}/movies")
    public List<Movie> getAllUsersSavedMovies(@PathVariable int id) {

        Optional<User> user = userRepository.findById(id);
        if (user.isEmpty())
            throw new RuntimeException("No user with id" + id);

        return user.get().getMovies();

    }
    @GetMapping("/api/v1/movies/{id}")
    public Optional<Movie> findSingleMovie(@PathVariable int id) {
        Optional<Movie> movie = movieRepository.findById(id);
        if (movie.isEmpty())
            throw new RuntimeException("No movie with id:" + id);

        return movie;
    }

    @PostMapping("/api/v1/movies")
    public Movie saveMovie(@RequestBody Movie movie) {
        movieRepository.save(movie);
        return movie;
    }
    @PostMapping("/api/v1/users/{id}/movies")
    public List<Movie> saveUserMovie(@PathVariable int id, @Valid @RequestBody Movie movie) {
        Optional<User> user = userRepository.findById(id);

        if (user.isEmpty())
            throw new RuntimeException("User not Found");

        movie.setUser(user.get());
        movieRepository.save(movie);

        return user.get().getMovies();
    }

    @DeleteMapping("/api/v1/movie/{id}")
    public int deleteMovie(@PathVariable int id){
        movieRepository.deleteById(id);
        return id;
    }
}
