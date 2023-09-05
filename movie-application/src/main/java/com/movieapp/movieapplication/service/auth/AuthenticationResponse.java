package com.movieapp.movieapplication.service.auth;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.movieapp.movieapplication.service.user.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {

  @JsonProperty("access_token")
  private String accessToken;
  @JsonProperty("refresh_token")
  private String refreshToken;
  @JsonProperty("current_user")
  private User user;
}
