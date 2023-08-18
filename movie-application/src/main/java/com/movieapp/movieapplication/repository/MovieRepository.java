package com.movieapp.movieapplication.repository;

import com.movieapp.movieapplication.model.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository extends JpaRepository<Movie, Integer> {
}
