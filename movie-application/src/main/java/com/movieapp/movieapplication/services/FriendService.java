package com.movieapp.movieapplication.services;

import com.movieapp.movieapplication.authservice.config.JwtService;
import com.movieapp.movieapplication.authservice.user.User;
import com.movieapp.movieapplication.authservice.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

public class FriendService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtService jwtService;




    public String addFriend(String token, int friendId) {

        String username = jwtService.extractUsername(token);
        Optional<User> user = userRepository.findByEmail(username);
        User friend = userRepository.findById(friendId).orElse(null);

        if (friend == null) {
            throw new RuntimeException("User or Friend Not Found!");
        }



        return "Friend Added";
    }

}
