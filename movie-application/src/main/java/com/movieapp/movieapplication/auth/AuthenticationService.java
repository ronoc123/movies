package com.movieapp.movieapplication.auth;

import com.movieapp.movieapplication.model.User;
import com.movieapp.movieapplication.repository.UserRepository;
import com.movieapp.movieapplication.security.config.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    public AuthenticationReponse register(RegisterRequest request) {
//        Need to add in password Hashing algo

        var user = new User(request.getUsername(), request.getPassword(), request.getEmail());
        userRepository.save(user);

        var jwtToken = jwtService.generateToken(user);
        return AuthenticationReponse.builder()
                .token(jwtToken)
                .build();
    }

    public AuthenticationReponse authenticate(AuthenticationRequest request) {

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
        );

        var user = userRepository.findByEmail(request.getEmail())
                .orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationReponse.builder()
                .token(jwtToken)
                .build();
    }
}
