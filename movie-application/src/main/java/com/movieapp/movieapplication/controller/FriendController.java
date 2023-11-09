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

import java.util.*;

@RestController
@RequestMapping("/api/v1")
public class FriendController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtService jwtService;
    @GetMapping("/friends")
    public Map<String, Page<User>> getFriends(@RequestHeader("Authorization") String authorizationHeader,
                                              @RequestParam(defaultValue = "0") int page,
                                              @RequestParam(defaultValue = "10") int size,
                                              @RequestParam(defaultValue = "id") String sortBy) {
        // Extract the token from the authorization header
        String token = authorizationHeader.substring("Bearer ".length());

        // Verify the token and extract user information
        String username = jwtService.extractUsername(token);
        if (username == null) {
            // Token is invalid; return unauthorized response
            return Collections.singletonMap("error", null);
        }

        // Use the extracted username to retrieve the user's ID from your repository
        Optional<User> userOptional = userRepository.findByEmail(username);
        if (userOptional.isEmpty()) {
            // User not found; return appropriate response
            return Collections.singletonMap("error", null);
        }

        Integer userId = userOptional.get().getId();

        // Continue with retrieving friends using userId
        Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy));

        // Retrieve the actual followers and following users
        Page<User> followers = userRepository.findFollowerByUserId(userId, pageable);
        Page<User> following = userRepository.findFollowingsByUserId(userId, pageable);

        Map<String, Page<User>> result = new HashMap<>();
        result.put("followers", followers);
        result.put("following", following);

        return result;
    }


//    Find a list of possible new friends
    @GetMapping("/find/friends")
    public Page<User> findNewFriends(@RequestParam(defaultValue = "0") int page,
                                     @RequestParam(defaultValue = "20") int size,
                                     @RequestParam(defaultValue = "id") String sortBy,
                                     @RequestParam(required = false) String filter) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy));
        if (filter != null && !filter.isEmpty()) {
            // If a filter string is provided, use it to filter the results
            return userRepository.findByFirstnameStartingWithIgnoreCase(filter, pageable);
        } else {
            // If no filter is provided, return all users with pagination and sorting
            return userRepository.findAll(pageable);
        }
    }

    @PostMapping("/addfriend/{id}")
    public ResponseEntity<String> AddFriend(@PathVariable int id, @RequestHeader("Authorization") String authorizationHeader) {
        String token = authorizationHeader.substring("Bearer ".length());
        String username = jwtService.extractUsername(token);
        User user = userRepository.findByEmail(username).orElse(null);
        User targetUser = userRepository.findById(id).orElse(null);

        if (targetUser == null || user == null) {
            throw new RuntimeException("User or Target User Not Found!");
        }


        if (user.getFollowings().contains(targetUser) || targetUser.getFollower().contains(user)) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("You are already following each other.");
        }

        user.getFollowings().add(targetUser);
        user.setFollowing(user.getFollowing() + 1);
        targetUser.getFollower().add(user);
        targetUser.setFollowers(targetUser.getFollowers() + 1);
        userRepository.save(targetUser);
        userRepository.save(user);

        return ResponseEntity.ok("Followed successfully");

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

        Set<User> following = user.get().getFollowings();

        if (following.contains(friendToRemove.get())) {
            following.remove(friendToRemove.get());
            user.get().setFollowing(user.get().getFollowing() - 1);
            friendToRemove.get().getFollower().remove(user.get());
            friendToRemove.get().setFollowers(friendToRemove.get().getFollowers() - 1);
            userRepository.save(friendToRemove.get());
            userRepository.save(user.get());
            return ResponseEntity.ok("Unfollowed successfully");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found in your following list");
        }
    }
}
