import React, { useReducer, useContext } from "react";
import reducer from "./reducer.js";
import axios from "axios";

import {
  SETUP_USER_BEGIN,
  SETUP_USER_ERROR,
  SETUP_USER_SUCCESS,
  LOGOUT_USER,
  CHANGE_SIDEBAR,
  ADD_MOVIE_BEGIN,
  ADD_MOVIE_SUCCESS,
  ADD_MOVIE_ERROR,
  GET_FRIENDS_BEGIN,
  GET_FRIENDS_SUCCESS,
  GET_FRIENDS_ERROR,
  ADD_FRIEND_SUCCESS,
  ADD_FRIEND_ERROR,
  ADD_FRIEND_BEGIN,
  DELETE_FRIEND_BEGIN,
  DELETE_FRIEND_SUCCESS,
  DELETE_FRIEND_ERROR,
  GET_WATCHLIST_BEGIN,
  GET_WATCHLIST_SUCCESS,
  GET_WATCHLIST_ERROR,
  GET_TIERLIST_BEGIN,
  GET_TIERLIST_SUCCESS,
  GET_TIERLIST_ERROR,
  FAVORITE_MOVIE_SUCCESS,
  FAVORITE_MOVIE_ERROR,
  RATE_MOVIE_SUCCESS,
  RATE_MOVIE_ERROR,
  OPEN_RATING_MODAL,
  CLOSE_RATING_MODAL,
  CLOSE_ERROR_SNACKBAR,
  OPEN_ERROR_SNACKBAR,
  GET_FRIEND_WATCHLIST_BEGIN,
  GET_FRIEND_WATCHLIST_SUCCESS,
  GET_FRIEND_WATCHLIST_ERROR,
  GET_FRIEND_SUCCESS,
  GET_FRIEND_ERROR,
  GET_FRIEND_BEGIN,
  GET_FRIEND_TIERLIST_BEGIN,
  GET_FRIEND_TIERLIST_SUCCESS,
  GET_FRIEND_TIERLIST_ERROR,
  OPEN_SEARCH_BAR,
  CLOSE_SEARCH_BAR,
  FIND_FRIENDS_SUCCESS,
  FIND_FRIENDS_ERROR,
} from "./actions.js";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");

const initialState = {
  isLoading: false,
  user: user ? JSON.parse(user) : null,
  token: token,
  alertText: "",
  alertType: "",
  userFollowers: [],
  userFollowing: [],
  movieWatchList: [],
  tierList: [],
  ratingModal: false,
  showAlert: false,
  isSidebarOpen: false,
  errorSnackBar: false,
  movieRatingId: null,
  friendsWatchList: [],
  friend: null,
  friendsTierList: [],
  showSearch: false,
  currentSearchResults: [],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const authFetch = axios.create({
    headers: {
      Authorization: `Bearer ${state.token}`,
    },
  });

  const addUserToLocalStorage = (user, token) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };
  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  const closeSearch = () => {
    dispatch({ type: CLOSE_SEARCH_BAR });
  };

  const openSearch = () => {
    dispatch({ type: OPEN_SEARCH_BAR });
  };
  const userLogout = () => {
    dispatch({ type: LOGOUT_USER });
    removeUserFromLocalStorage();
  };

  const userLogin = async (endPoint, currentUser) => {
    dispatch({ type: SETUP_USER_BEGIN });
    try {
      if (endPoint === "authenticate") {
        const response = await axios.post(
          `http://localhost:8080/api/v1/auth/${endPoint}`,
          currentUser
        );
        const { access_token, current_user } = response.data;
        dispatch({
          type: SETUP_USER_SUCCESS,
          payload: { access_token: access_token, user: current_user },
        });
        addUserToLocalStorage(current_user, access_token);
      } else {
        const response = await axios.post(
          `http://localhost:8080/api/v1/auth/${endPoint}`,
          currentUser
        );
        const { access_token, current_user } = response.data;
        dispatch({
          type: SETUP_USER_SUCCESS,
          payload: { access_token: access_token, user: current_user },
        });
        addUserToLocalStorage(current_user, access_token);
      }
    } catch (error) {
      dispatch({ type: SETUP_USER_ERROR });
    }
  };

  const addMovieToWatchList = async (movie) => {
    dispatch({ type: ADD_MOVIE_BEGIN });

    try {
      const response = await authFetch.post(
        `http://localhost:8080/api/v1/users/movies`,
        movie
      );

      const { data } = response;

      dispatch({
        type: ADD_MOVIE_SUCCESS,
        payload: { newMovie: data, movieList: state.movieWatchList },
      });
    } catch (error) {
      dispatch({ type: ADD_MOVIE_ERROR });
    }
  };

  const changeSidebar = () => {
    dispatch({ type: CHANGE_SIDEBAR, payload: state.isSidebarOpen });
  };

  const getFriends = async () => {
    dispatch({ type: GET_FRIENDS_BEGIN });

    try {
      const response = await authFetch("http://localhost:8080/api/v1/friends");

      const { data } = response;
      console.log(data);

      dispatch({ type: GET_FRIENDS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_FRIENDS_ERROR });
    }
  };

  const addFriend = async (id) => {
    try {
      const { data } = await authFetch.post(
        `http://localhost:8080/api/v1/addfriend/${id}`
      );

      getFriends();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFriend = async (id) => {
    // dispatch({ type: DELETE_FRIEND_BEGIN });

    try {
      const response = await authFetch.delete(
        `http://localhost:8080/api/v1/friends/${id}`
      );
      getFriends();
    } catch (error) {
      // dispatch({ type: DELETE_FRIEND_ERROR });
    }
  };

  const getWatchListMovies = async () => {
    dispatch({ type: GET_WATCHLIST_BEGIN });

    try {
      const response = await authFetch.get(
        `http://localhost:8080/api/v1/users/movies?size=50`
      );
      const { data } = response;

      dispatch({ type: GET_WATCHLIST_SUCCESS, payload: data.content });
    } catch (error) {
      dispatch({ type: GET_WATCHLIST_ERROR });
    }
  };

  const favoriteMovie = async (id) => {
    try {
      const { data } = await authFetch.put(
        `http://localhost:8080/api/v1/movie/favorite/${id}`
      );
      dispatch({
        type: FAVORITE_MOVIE_SUCCESS,
      });
    } catch (error) {
      dispatch({ type: FAVORITE_MOVIE_ERROR });
    }
    getWatchListMovies();
  };
  const rateMovie = async (id, rating) => {
    try {
      const { data } = await authFetch.put(
        `http://localhost:8080/api/v1/movie/watched/${id}`,
        { rating: rating }
      );
      dispatch({
        type: RATE_MOVIE_SUCCESS,
      });
      console.log(data);
    } catch (error) {
      dispatch({ type: RATE_MOVIE_ERROR });
      console.log(error);
    }
    getWatchListMovies();
  };

  const openRatingModal = (id) => {
    dispatch({ type: OPEN_RATING_MODAL, payload: id });
  };
  const closeRatingModal = () => {
    dispatch({ type: CLOSE_RATING_MODAL });
  };

  const errorSnackbarPopup = () => {
    dispatch({ type: OPEN_ERROR_SNACKBAR });
    setTimeout(() => {
      dispatch({ type: CLOSE_ERROR_SNACKBAR });
    });
  };
  const getFriendsTierList = async (id) => {
    dispatch({ type: GET_FRIEND_TIERLIST_BEGIN });

    try {
      const response = await authFetch.get(
        `http://localhost:8080/api/v1/users/movies/rated/${id}?size=50`
      );
      const { data } = response;

      dispatch({
        type: GET_FRIEND_TIERLIST_SUCCESS,
        payload: data.content,
      });
    } catch (error) {
      dispatch({ type: GET_FRIEND_TIERLIST_ERROR });
    }
  };
  const getFriendsInfo = async (id) => {
    dispatch({ type: GET_FRIEND_BEGIN });

    try {
      const response = await authFetch.get(
        `http://localhost:8080/api/v1/users/info/${id}`
      );
      const { data } = response;

      dispatch({
        type: GET_FRIEND_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({ type: GET_FRIEND_ERROR });
    }
  };
  const getFriendsMovies = async (id) => {
    dispatch({ type: GET_FRIEND_WATCHLIST_BEGIN });

    try {
      const response = await authFetch.get(
        `http://localhost:8080/api/v1/users/movies/${id}?size=50`
      );
      const { data } = response;

      dispatch({ type: GET_FRIEND_WATCHLIST_SUCCESS, payload: data.content });
    } catch (error) {
      dispatch({ type: GET_FRIEND_WATCHLIST_ERROR });
    }
  };

  const getTierList = async () => {
    dispatch({ type: GET_TIERLIST_BEGIN });

    try {
      const response = await authFetch.get(
        `http://localhost:8080/api/v1/users/movies/rated/${state.user.id}?size=50`
      );
      const { data } = response;

      dispatch({
        type: GET_TIERLIST_SUCCESS,
        payload: data.content,
      });
    } catch (error) {
      dispatch({ type: GET_TIERLIST_ERROR });
    }
  };

  const searchForMovies = async () => {};

  const searchForUsers = async (value) => {
    if (value === "") {
      dispatch({ type: "CLEAR_FRIENDS" });
    }
    try {
      const response = await authFetch.get(
        `http://localhost:8080/api/v1/find/friends?filter=${value}`
      );
      const { data } = response;
      dispatch({ type: FIND_FRIENDS_SUCCESS, payload: data.content });
    } catch (error) {
      dispatch({ type: FIND_FRIENDS_ERROR });
    }
  };

  //  const authFetch = axios.create({
  //    headers: {
  //      Authorization: `Bearer ${state.token}`,
  //    },
  //  });

  const updateUserImage = async (newInfo) => {
    const file = newInfo;
    const formData = new FormData();
    formData.append("file", file);
    console.log(formData);
    try {
      const updatedInfo = await axios.put(
        "http://localhost:8080/api/users/profile-picture",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(updatedInfo);
    } catch (error) {
      console.log(error);
    }
  };
  const updateUserInfo = async (newInfo) => {
    try {
      const updatedInfo = await axios.put(
        "http://localhost:8080/api/users/profile-picture",
        newInfo,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(updatedInfo);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        userLogin,
        userLogout,
        changeSidebar,
        addMovieToWatchList,
        getFriends,
        addFriend,
        deleteFriend,
        getWatchListMovies,
        favoriteMovie,
        openRatingModal,
        closeRatingModal,
        rateMovie,
        errorSnackbarPopup,
        getFriendsMovies,
        getFriendsInfo,
        getFriendsTierList,
        getTierList,
        openSearch,
        closeSearch,
        searchForMovies,
        searchForUsers,
        updateUserInfo,
        updateUserImage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext, initialState };
