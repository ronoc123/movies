package com.movieapp.movieapplication.services;

import com.movieapp.movieapplication.exceptions.FileStorageException;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class FileStorageService {
    private String uploadDir = "C:\\Users\\conor\\Desktop\\movies\\movie-application\\uploads"; // Update this to your desired directory

    public String storeFile(MultipartFile file) {
        // Normalize file name
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());

        try {
            // Check if the file's name contains invalid characters
            if (fileName.contains("..")) {
                throw new FileStorageException("Invalid file name: " + fileName);
            }

            // Copy the file data to the target location (your designated directory)
            Path targetLocation = Paths.get(uploadDir).resolve(fileName);
            Files.copy(file.getInputStream(), targetLocation);

            return fileName;
        } catch (IOException ex) {
            throw new FileStorageException("Failed to store file " + fileName, ex);
        }
    }
}
