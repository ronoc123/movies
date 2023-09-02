package com.movieapp.movieapplication.repository;

import com.movieapp.movieapplication.model.Movie;
import com.movieapp.movieapplication.service.user.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository extends JpaRepository<Movie, Integer> {

    Page<Movie> findByUser(User user, Pageable pageable);
}
