package com.movieapp.movieapplication.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Size;

import java.time.LocalDateTime;

@Entity
public class User {

    @Id
    @GeneratedValue
    private Integer id;

    @Size(min = 6, max = 15)
    private String name;

    @JsonIgnore
    @Size(min = 6, max = 15)
    private  String password;

    @Column(unique = true)
    private String email;

    private LocalDateTime userCreationDate;

    @PrePersist
    public void prePersist() {
        userCreationDate = LocalDateTime.now();
    }
}
