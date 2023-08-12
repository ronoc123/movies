package com.movieapp.movieapplication.repository;

import com.movieapp.movieapplication.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {

}
