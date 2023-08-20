//package com.movieapp.movieapplication.model;
//
//import com.fasterxml.jackson.annotation.JsonIgnore;
//import jakarta.persistence.*;
//import jakarta.validation.constraints.Size;
//
//@Entity
//public class Movie {
//
//    protected Movie(){
//
//    }
//    @Id
//    @GeneratedValue()
//    private Integer id;
//    private String name;
//
//    private Integer rating;
//
//    @Size(max = 50)
//    private String description;
//
//    @ManyToOne(fetch = FetchType.LAZY)
//    @JsonIgnore
//    private User user;
//
//    public Movie(String name, Integer rating, String description) {
//        this.name = name;
//        this.rating = rating;
//        this.description = description;
//    }
//
//    public Integer getId() {
//        return id;
//    }
//
//    public User getUser() {
//        return user;
//    }
//
//    public void setUser(User user) {
//        this.user = user;
//    }
//
//    public void setId(Integer id) {
//        this.id = id;
//    }
//
//    public String getName() {
//        return name;
//    }
//
//    public void setName(String name) {
//        this.name = name;
//    }
//
//    public Integer getRating() {
//        return rating;
//    }
//
//    public void setRating(Integer rating) {
//        this.rating = rating;
//    }
//
//    public String getDescription() {
//        return description;
//    }
//
//    public void setDescription(String description) {
//        this.description = description;
//    }
//
//    @Override
//    public String toString() {
//        return "Movie{" +
//                "id=" + id +
//                ", name='" + name + '\'' +
//                ", rating=" + rating +
//                ", description='" + description + '\'' +
//                '}';
//    }
//
//}
