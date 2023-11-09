package com.movieapp.movieapplication.controller;

import com.movieapp.movieapplication.authservice.config.JwtService;
import com.movieapp.movieapplication.authservice.user.User;
import com.movieapp.movieapplication.authservice.user.UserRepository;
import com.movieapp.movieapplication.services.FileStorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Optional;

@RestController
public class UserController {
    private final UserRepository userRepository;

    private final JwtService jwtService;
    private final FileStorageService fileStorageService; // Service for storing files
    private final String uploadDir = "C:\\Users\\conor\\Desktop\\movies\\movie-application\\uploads";

    @Autowired
    public UserController(UserRepository userService, FileStorageService fileStorageService, JwtService jwtService) {
        this.userRepository = userService;
        this.fileStorageService = fileStorageService;
        this.jwtService = jwtService;
    }

    @PostMapping("/api/users/profile-picture")
    public ResponseEntity<String> uploadProfilePicture(
            @RequestBody MultipartFile file,
            @RequestHeader("Authorization") String authorizationHeader) {

        String token = authorizationHeader.substring("Bearer ".length());
        String username = jwtService.extractUsername(token);
        Optional<User> user = userRepository.findByEmail(username);
        // Check if the user exists
        if (user.isPresent() == false) {
           return ResponseEntity.notFound().build();
       }

        // Store the uploaded file
       String fileName = fileStorageService.storeFile(file);

        // Update the user's profile picture field with the file path or URL
        user.get().setProfilePicture(fileName);
        userRepository.save(user.get());

        return ResponseEntity.ok("Profile picture uploaded successfully");
    }

    @GetMapping("/api/users/{userId}/profile-picture/{fileName:.+}")
    public ResponseEntity<Resource> getUserProfilePicture(
            @PathVariable Long userId,
            @PathVariable String fileName) throws IOException {
        try {
            Path filePath = Paths.get(uploadDir).resolve(fileName);
            Resource resource = new UrlResource(filePath.toUri());

            if (resource.exists() && resource.isReadable()) {
                return ResponseEntity.ok().body(resource);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (MalformedURLException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
