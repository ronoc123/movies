package com.movieapp.movieapplication.authservice.user;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {

  Optional<User> findByEmail(String email);
  Page<User> findByFirstnameStartingWithIgnoreCase(String username, Pageable pageable);
  @Query("SELECT u.friends FROM User u WHERE u.id = :userId")
  Page<User> findFriendsByUserId(Integer userId, Pageable pageable);



}
