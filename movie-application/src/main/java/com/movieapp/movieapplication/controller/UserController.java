package com.movieapp.movieapplication.controller;

import com.movieapp.movieapplication.model.User;
import com.movieapp.movieapplication.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class UserController {
    private UserRepository userRepository;
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/api/v1/users/{id}")
    public Optional<User> findUser(@PathVariable int id) {
        Optional<User> user = userRepository.findById(id);

        if (user.isEmpty())
            throw new RuntimeException("No user Found with id" + id);


        return user;
    }

    @GetMapping("/api/v1/users")
    public List<User> getAllUsers() {
        List<User> users = userRepository.findAll();

        if (users.isEmpty())
            throw new RuntimeException("No users Registered");


        return users;
    }


    @PostMapping("/api/v1/users")
    public User createUser(@RequestBody User user) {
        userRepository.save(user);
        return user;
    }
}
