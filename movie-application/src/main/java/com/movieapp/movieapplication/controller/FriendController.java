package com.movieapp.movieapplication.controller;

import com.movieapp.movieapplication.service.config.JwtService;
import com.movieapp.movieapplication.service.user.User;
import com.movieapp.movieapplication.service.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.Set;

@RestController
@RequestMapping("/api/v1")
public class FriendController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtService jwtService;
    @GetMapping("/friends")
    public Set<User> getAllFriends(@RequestHeader("Authorization") String authorizationHeader) {
        String token = authorizationHeader.substring("Bearer ".length());
        String username = jwtService.extractUsername(token);
        Optional<User> user = userRepository.findByEmail(username);

        if (user.isEmpty())
            throw new RuntimeException("No user found");

        return user.get().getFriends();
    }

    @PostMapping("/addfriend/{id}")
    public ResponseEntity<String> AddFriend(@PathVariable int id, @RequestHeader("Authorization") String authorizationHeader) {
        String token = authorizationHeader.substring("Bearer ".length());
        String username = jwtService.extractUsername(token);
        User user = userRepository.findByEmail(username).orElse(null);
        User friend = userRepository.findById(id).orElse(null);

        if (friend == null || user == null) {
            throw new RuntimeException("User or Friend Not Found!");
        }

        if (user.getFriends().contains(friend)) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("You are already friends with this user.");
        }

        user.getFriends().add(friend);
        userRepository.save(user);

        return ResponseEntity.ok("Friend added successfully");

    }
}
