import { initialState } from "./appContext";
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
  DELETE_FRIEND_BEGIN,
  DELETE_FRIEND_SUCCESS,
  DELETE_FRIEND_ERROR,
  GET_WATCHLIST_BEGIN,
  GET_WATCHLIST_SUCCESS,
  GET_WATCHLIST_ERROR,
} from "./actions";

const reducer = (state, action) => {
  if (action.type === SETUP_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === SETUP_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      user: action.payload.user,
      token: action.payload.access_token,
    };
  }

  if (action.type === SETUP_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
    };
  }
  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      token: null,
      user: null,
    };
  }
  if (action.type === CHANGE_SIDEBAR) {
    return {
      ...state,
      isSidebarOpen: !action.payload,
    };
  }

  if (action.type === GET_FRIENDS_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === GET_FRIENDS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      userFriends: action.payload,
    };
  }

  if (action.type === GET_FRIENDS_ERROR) {
    return {
      ...state,
      isLoading: false,
    };
  }

  if (action.type === DELETE_FRIEND_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === DELETE_FRIEND_SUCCESS) {
    const { friendsList, id } = action.payload;
    const newFriendArr = friendsList.filter((u) => u.id !== id);
    return {
      ...state,
      isLoading: false,
      userFriends: newFriendArr,
    };
  }

  if (action.type === DELETE_FRIEND_ERROR) {
    return {
      ...state,
      isLoading: false,
    };
  }

  if (action.type === ADD_MOVIE_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === ADD_MOVIE_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      movieWatchList: [...action.payload.movieList, action.payload.newMovie],
    };
  }
  if (action.type === ADD_MOVIE_ERROR) {
    return {
      ...state,
      isLoading: false,
    };
  }

  if (action.type === GET_WATCHLIST_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === GET_WATCHLIST_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      movieWatchList: action.payload,
    };
  }
  if (action.type === GET_WATCHLIST_ERROR) {
    return {
      ...state,
      isLoading: false,
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;
