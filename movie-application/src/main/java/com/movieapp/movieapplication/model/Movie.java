package com.movieapp.movieapplication.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.movieapp.movieapplication.service.user.User;
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

    private Long personalRating;

    private Boolean isWatched = false;

//    person rating

    private Long rating;

    @Size(max = 50)
    private String description;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    private User user;

    public Movie(String title, Long rating, String description, String releaseDate, String mediaType, Long personalRating, String poster) {
        this.title = title;
        this.rating = rating;
        this.description = description;
        this.poster = poster;
        this.personalRating = personalRating;
        this.mediaType = mediaType;
        this.releaseDate = releaseDate;
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

    public Long getPersonalRating() {
        return personalRating;
    }

    public void setPersonalRating(Long personalRating) {
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

    public Long getRating() {
        return rating;
    }

    public void setRating(Long rating) {
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
