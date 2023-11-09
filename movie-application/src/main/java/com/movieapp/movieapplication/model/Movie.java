package com.movieapp.movieapplication.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.movieapp.movieapplication.authservice.user.User;
import jakarta.persistence.*;
import jakarta.validation.constraints.Size;

@Entity
public class Movie {

    protected Movie(){

    }
    @Id
    @GeneratedValue()
    private Integer id;
    private String title;

//    fields I need to add
//    poster
    private String poster;
//    Media Type
    private String mediaType;
//    release
    private String releaseDate;

    private Double personalRating;

    private Boolean isWatched = false;

    private Boolean isFavorited = false;

    private Integer dbId;

//    person rating

    private Double rating;

    @Size(max = 50)
    private String description;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    private User user;

    public Movie(String title, Double rating, String description, String releaseDate, String mediaType, Double personalRating, String poster, Integer dbId) {
        this.title = title;
        this.rating = rating;
        this.description = description;
        this.poster = poster;
        this.personalRating = personalRating;
        this.mediaType = mediaType;
        this.releaseDate = releaseDate;
        this.dbId = dbId;
    }

    public Integer getDbId() {
        return dbId;
    }
    public void setDbId(Integer dbId) {
        this.dbId = dbId;
    }

    public Boolean getFavorited() {
        return isFavorited;
    }

    public void setFavorited(Boolean favorited) {
        isFavorited = favorited;
    }

    public Boolean getWatched() {
        return isWatched;
    }

    public void setWatched(Boolean watched) {
        isWatched = watched;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPoster() {
        return poster;
    }

    public void setPoster(String poster) {
        this.poster = poster;
    }

    public String getMediaType() {
        return mediaType;
    }

    public void setMediaType(String mediaType) {
        this.mediaType = mediaType;
    }

    public String getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(String releaseDate) {
        this.releaseDate = releaseDate;
    }

    public Double getPersonalRating() {
        return personalRating;
    }

    public void setPersonalRating(Double personalRating) {
        this.personalRating = personalRating;
    }



    public Integer getId() {
        return id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return title;
    }

    public void setName(String title) {
        this.title = title;
    }

    public Double getRating() {
        return rating;
    }

    public void setRating(Double rating) {
        this.rating = rating;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "Movie{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", poster='" + poster + '\'' +
                ", mediaType='" + mediaType + '\'' +
                ", releaseDate=" + releaseDate +
                ", personalRating=" + personalRating +
                ", rating=" + rating +
                ", description='" + description + '\'' +
                ", user=" + user +
                '}';
    }

}
