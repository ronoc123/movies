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

    public User() {
    }

    public User(Integer id, String name, String password, String email) {
        super();
        this.id = id;
        this.name = name;
        this.password = password;
        this.email = email;
    }

    @PrePersist
    public void prePersist() {
        userCreationDate = LocalDateTime.now();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDateTime getUserCreationDate() {
        return userCreationDate;
    }

    public void setUserCreationDate(LocalDateTime userCreationDate) {
        this.userCreationDate = userCreationDate;
    }
}
