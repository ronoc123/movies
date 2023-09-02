package com.movieapp.movieapplication.controller;

import com.movieapp.movieapplication.model.Movie;
import com.movieapp.movieapplication.repository.MovieRepository;
import com.movieapp.movieapplication.service.config.JwtService;
import com.movieapp.movieapplication.service.user.User;
import com.movieapp.movieapplication.service.user.UserRepository;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class MovieController {

    private MovieRepository movieRepository;
    private UserRepository userRepository;

    private JwtService jwtService;
    public MovieController(MovieRepository movieRepository, UserRepository userRepository, JwtService jwtService) {
        this.movieRepository = movieRepository;
        this.userRepository = userRepository;
        this.jwtService = jwtService;

    }


//    GET all movies for a certain user
    @GetMapping("/api/v1/users/movies")
    public Page<Movie> getAllUsersSavedMovies(@RequestHeader("Authorization") String authorizationHeader, @RequestParam(defaultValue = "0") int page,
                                                    @RequestParam(defaultValue = "10") int size,
                                                    @RequestParam(defaultValue = "id") String sortBy) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy));
//      extract token from authentication headers
        String token = authorizationHeader.substring("Bearer ".length());

//      use service to extract the EMAIL from the token claims
        String username = jwtService.extractUsername(token);

//      check if user exists in the database
        Optional<User> user = userRepository.findByEmail(username);

//      validate that the user with matching id does exist
        if (user.isEmpty()) {
            throw new RuntimeException("No user found");
        }

        // Retrieve the user's movies using pagination
        return movieRepository.findByUser(user.get(), pageable);

    }

    @PostMapping("/api/v1/users/movies")
    public Movie saveUserMovie(@RequestHeader("Authorization") String authorizationHeader, @Valid @RequestBody Movie movie) {
        //      extract token from authentication headers
        String token = authorizationHeader.substring("Bearer ".length());
        String username = jwtService.extractUsername(token);
        Optional<User> user = userRepository.findByEmail(username);
        if (user.isEmpty())
            throw new RuntimeException("User not Found");

        Optional<List<Movie>> optionalMovies = Optional.of(user.get().getMovies());
        List<Movie> movieList = optionalMovies.get();
        boolean isValidMovie = movieList.stream().anyMatch(m -> m.getTitle().equals(movie.getTitle()));
        if (isValidMovie)
            throw new RuntimeException("Movie Already Saved");

        movie.setUser(user.get());
        movieRepository.save(movie);

        return movie;
    }


//    Delete from saved Movies
    @DeleteMapping("/api/v1/movie/{id}")
    public int deleteMovie(@RequestHeader("Authorization") String authorizationHeader, @PathVariable int id){
        //      extract token from authentication headers
        String token = authorizationHeader.substring("Bearer ".length());

//      use service to extract the EMAIL from the token claims
        String username = jwtService.extractUsername(token);

//      check if user exists in the database
        Optional<User> user = userRepository.findByEmail(username);
        if (user.isEmpty())
            throw new RuntimeException("unauthorized");


        Optional<Movie> movieToDelete = user.get().getMovies().stream().filter(u -> u.getId().equals(id))
                .findFirst();


        if (movieToDelete.isPresent()) {
            Movie movie = movieToDelete.get();
            user.get().getMovies().remove(movie); // Remove the movie from the user's movies collection
            movieRepository.delete(movie);
        } else {
            throw new RuntimeException("Movie Not Found");
        }

        return id;
    }
}
