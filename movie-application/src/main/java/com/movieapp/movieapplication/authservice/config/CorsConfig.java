package com.movieapp.movieapplication.authservice.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
//        registry.addMapping("/api/**") // Configure which paths need CORS support
//                .allowedOrigins("http://localhost:3000") // Allow requests from this origin
//                .allowedMethods("GET", "POST", "PUT", "DELETE") // Allowed HTTP methods
//                .allowedHeaders("*"); // Allowed headers
//        registry.addMapping("/api/**") // Configure which paths need CORS support
//                .allowedOrigins("http://localhost:3000") // Allow requests from this origin
//                .allowedMethods("GET", "POST", "PUT", "DELETE") // Allowed HTTP methods
//                .allowedHeaders("Authorization", "Content-Type") // Allowed request headers
//                .exposedHeaders("Authorization") // Headers exposed to the client
//                .allowCredentials(true) // Allow cookies and credentials
//                .maxAge(3600);
        registry.addMapping("/api/**") // Configure which paths need CORS support
                .allowedOrigins("http://localhost:3000") // Allow requests from this origin
                .allowedMethods("GET", "POST", "PUT", "DELETE") // Allowed HTTP methods
                .allowedHeaders("Authorization", "Content-Type") // Allowed request headers
                .exposedHeaders("Authorization") // Headers exposed to the client
                .allowCredentials(true) // Allow cookies and credentials
                .maxAge(3600); // Cache preflight request for 1 hour
    }
}
