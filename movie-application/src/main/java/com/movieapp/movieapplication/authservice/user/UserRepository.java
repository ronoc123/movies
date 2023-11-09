package com.movieapp.movieapplication.authservice.user;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {

  Optional<User> findByEmail(String email);
  Page<User> findByFirstnameStartingWithIgnoreCase(String username, Pageable pageable);

@Query("SELECT u.follower FROM User u WHERE u.id = :userId")
Page<User> findFollowerByUserId(@Param("userId") Integer userId, Pageable pageable);


  @Query("SELECT u.followings FROM User u WHERE u.id = :userId")
  Page<User> findFollowingsByUserId(@Param("userId") Integer userId, Pageable pageable);


}
