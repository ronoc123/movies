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
} from "./actions.js";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");

const initialState = {
  isLoading: false,
  user: user ? JSON.parse(user) : null,
  token: token,
  alertText: "",
  alertType: "",
  userFriends: [],
  movieWatchList: [],
  alertText: "",
  showAlert: false,
  isSidebarOpen: false,
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

  const userLogout = () => {
    dispatch({ type: LOGOUT_USER });
    removeUserFromLocalStorage();
  };

  const userLogin = async (endPoint, currentUser) => {
    dispatch({ type: SETUP_USER_BEGIN });
    console.log(currentUser);
    try {
      if (endPoint === "authenticate") {
        const response = await axios.post(
          `http://localhost:8080/api/v1/auth/${endPoint}`,
          currentUser
        );
        const { access_token } = response.data;
        dispatch({
          type: SETUP_USER_SUCCESS,
          payload: { access_token: access_token, user: currentUser.email },
        });
        addUserToLocalStorage(currentUser.email, access_token);
      } else {
        const response = await axios.post(
          `http://localhost:8080/api/v1/auth/${endPoint}`,
          currentUser
        );
        const { access_token } = response.data;
        dispatch({
          type: SETUP_USER_SUCCESS,
          payload: { access_token: access_token, user: currentUser.email },
        });
        addUserToLocalStorage(currentUser.email, access_token);
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

      dispatch({ type: GET_FRIENDS_SUCCESS, payload: data.content });
    } catch (error) {
      dispatch({ type: GET_FRIENDS_ERROR });
    }
  };

  const addFriend = async (id) => {
    dispatch({ type: ADD_FRIEND_BEGIN });

    try {
      const { data } = await authFetch(
        `http://localhost:8080/api/v1/addfriend/${id}`
      );
      dispatch({ type: ADD_FRIEND_SUCCESS, payload: data.content });
    } catch (error) {
      dispatch({ type: ADD_FRIEND_ERROR });
    }
  };

  const deleteFriend = async (id) => {
    dispatch({ type: DELETE_FRIEND_BEGIN });

    try {
      const response = await authFetch.delete(
        `http://localhost:8080/api/v1/friends/${id}`
      );

      dispatch({
        type: DELETE_FRIEND_SUCCESS,
        payload: { friendList: state.userFriends, removeFriendId: id },
      });
    } catch (error) {
      dispatch({ type: DELETE_FRIEND_ERROR });
    }
  };

  const getWatchListMovies = async () => {
    dispatch({ type: GET_WATCHLIST_BEGIN });

    try {
      const response = await authFetch.get(
        `http://localhost:8080/api/v1/users/movies`
      );
      const { data } = response;

      dispatch({ type: GET_WATCHLIST_SUCCESS, payload: data.content });
    } catch (error) {
      dispatch({ type: GET_WATCHLIST_ERROR });
    }
  };

  const getTierListMovies = async () => {
    dispatch({ type: GET_TIERLIST_BEGIN });

    try {
      dispatch({ type: GET_TIERLIST_SUCCESS });
    } catch (error) {
      dispatch({ type: GET_TIERLIST_ERROR });
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
        getTierListMovies,
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
