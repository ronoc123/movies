package com.movieapp.movieapplication.controller;

import com.movieapp.movieapplication.model.Movie;
import com.movieapp.movieapplication.repository.MovieRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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
}
