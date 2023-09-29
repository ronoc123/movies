package com.movieapp.movieapplication.controller;

import com.movieapp.movieapplication.authservice.config.JwtService;
import com.movieapp.movieapplication.authservice.user.User;
import com.movieapp.movieapplication.authservice.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
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
    public Page<User> getAllFriends(@RequestHeader("Authorization") String authorizationHeader, @RequestParam(defaultValue = "0") int page,
                                    @RequestParam(defaultValue = "10") int size,
                                    @RequestParam(defaultValue = "id") String sortBy) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy));
        String token = authorizationHeader.substring("Bearer ".length());
        String username = jwtService.extractUsername(token);
        Optional<User> user = userRepository.findByEmail(username);

        if (user.isEmpty())
            throw new RuntimeException("No user found");

//        return user.get().getFriends();
        return userRepository.findFriendsByUserId(user.get().getId(), pageable);
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

    @DeleteMapping("/friends/{id}")
    public ResponseEntity<String> deleteFriend(
            @RequestHeader("Authorization") String authorizationHeader,
            @PathVariable Integer id) {
        String token = authorizationHeader.substring("Bearer ".length());
        String username = jwtService.extractUsername(token);
        Optional<User> user = userRepository.findByEmail(username);

        if (user.isEmpty()) {
            throw new RuntimeException("No user found");
        }

        Optional<User> friendToRemove = userRepository.findById(id);

        if (friendToRemove.isEmpty()) {
            throw new RuntimeException("Friend not found");
        }

        Set<User> friends = user.get().getFriends();

        if (friends.contains(friendToRemove.get())) {
            friends.remove(friendToRemove.get());
            userRepository.save(user.get());
            return ResponseEntity.ok("Friend removed successfully");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Friend not found in your friends list");
        }
    }
}
