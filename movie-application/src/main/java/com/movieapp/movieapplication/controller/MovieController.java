package com.movieapp.movieapplication.controller;

import com.movieapp.movieapplication.model.Movie;
import com.movieapp.movieapplication.repository.MovieRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class MovieController {

    private MovieRepository repository;
    public MovieController(MovieRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/api/v1/movies")
    public List<Movie> getAllSavedMovies() {
        return repository.findAll();
    }
    @GetMapping("/api/v1/movies/{id}")
    public Optional<Movie> findSingleMovie(@PathVariable int id) {
        Optional<Movie> movie = repository.findById(id);
        if (movie.isEmpty())
            throw new RuntimeException("No movie with id:" + id);

        return movie;
    }

    @PostMapping("/api/v1/movies")
    public Movie saveMovie(@RequestBody Movie movie) {
        repository.save(movie);
        return movie;
    }

    @DeleteMapping("/api/v1/movie/{id}")
    public int deleteMovie(@PathVariable int id){
        repository.deleteById(id);
        return id;
    }
}
