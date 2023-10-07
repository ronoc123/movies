package com.movieapp.movieapplication.authservice.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.movieapp.movieapplication.model.Movie;
import com.movieapp.movieapplication.authservice.token.Token;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "_user")
public class User implements UserDetails {

  @Id
  @GeneratedValue
  private Integer id;
  private String firstname;
  private String lastname;
  @Column(unique = true)
  private String email;
  @JsonIgnore
  private String password;

  @Enumerated(EnumType.STRING)
  private Role role;

  private String motto;

  private Integer followers;

  private Integer following;

  private Integer favorites;


  private String profilePicture;

  @OneToMany(mappedBy = "user")
  @JsonIgnore
  private List<Token> tokens;
  @OneToMany(mappedBy = "user")
  @JsonIgnore
  private List<Movie> movies;

  @ManyToMany
  @JoinTable(
          name = "friendship",
          joinColumns = @JoinColumn(name = "user_id"),
          inverseJoinColumns = @JoinColumn(name = "friend_id")
  )
  @JsonIgnore
  private Set<User> friends = new HashSet<>();

  public Set<User> getFriends() {
    return friends;
  }

  public void setFriends(Set<User> friends) {
    this.friends = friends;
  }

  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
    return role.getAuthorities();
  }


  @Override
  public String getPassword() {
    return password;
  }

  public String getProfilePicture() {
    return profilePicture;
  }

  public void setProfilePicture(String profilePicture) {
    this.profilePicture = profilePicture;
  }

  public Integer getFollowers() {
    return followers;
  }

  public Integer getFavorites() {
    return favorites;
  }

  public void setFavorites(Integer favorites) {
    this.favorites = favorites;
  }

  public void setFollowers(Integer followers) {
    this.followers = followers;
  }

  public Integer getFollowing() {
    return following;
  }

  public void setFollowing(Integer following) {
    this.following = following;
  }

  public String getMotto() {
    return motto;
  }

  public void setMotto(String motto) {
    this.motto = motto;
  }

  @Override
  public String getUsername() {
    return email;
  }

  @Override
  public boolean isAccountNonExpired() {
    return true;
  }

  @Override
  public boolean isAccountNonLocked() {
    return true;
  }

  @Override
  public boolean isCredentialsNonExpired() {
    return true;
  }

  @Override
  public boolean isEnabled() {
    return true;
  }
  @PrePersist
  public void prePersist() {
    role = Role.USER;
    followers = 0;
    following = 0;
    motto = "No description...";
    favorites = 0;
  }

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getFirstname() {
    return firstname;
  }

  public void setFirstname(String firstname) {
    this.firstname = firstname;
  }

  public String getLastname() {
    return lastname;
  }

  public void setLastname(String lastname) {
    this.lastname = lastname;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public Role getRole() {
    return role;
  }

  public void setRole(Role role) {
    this.role = role;
  }

}
