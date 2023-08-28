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
} from "./actions.js";
const token = localStorage.getItem("token");
const user = localStorage.getItem("user");

const initialState = {
  isLoading: false,
  user: user ? JSON.parse(user) : null,
  token: token,
  alertText: "",
  alertType: "",
  isSidebarOpen: false,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const authFetch = axios.create({
    baseURL: "/api/v1",
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
    } catch (error) {
      dispatch({ type: ADD_MOVIE_ERROR });
    }
  };

  const changeSidebar = () => {
    dispatch({ type: "CHANGE_SIDEBAR", payload: state.isSidebarOpen });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        userLogin,
        userLogout,
        changeSidebar,
        addMovieToWatchList,
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
