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
      userFollowers: action.payload.followers.content,
      userFollowing: action.payload.following.content,
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
      // isLoading: true,
    };
  }
  if (action.type === ADD_MOVIE_SUCCESS) {
    return {
      ...state,
      // isLoading: false,
      movieWatchList: [...action.payload.movieList, action.payload.newMovie],
    };
  }
  if (action.type === ADD_MOVIE_ERROR) {
    return {
      ...state,
      // isLoading: false,
    };
  }

  if (action.type === GET_WATCHLIST_BEGIN) {
    return {
      ...state,
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
  if (action.type === GET_TIERLIST_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === GET_TIERLIST_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      tierList: action.payload,
    };
  }
  if (action.type === GET_TIERLIST_ERROR) {
    return {
      ...state,
      isLoading: false,
    };
  }
  if (action.type === FAVORITE_MOVIE_SUCCESS) {
    return {
      ...state,
    };
  }
  if (action.type === FAVORITE_MOVIE_ERROR) {
    return {
      ...state,
    };
  }
  if (action.type === RATE_MOVIE_SUCCESS) {
    return {
      ...state,
    };
  }
  if (action.type === RATE_MOVIE_ERROR) {
    return {
      ...state,
    };
  }
  if (action.type === OPEN_RATING_MODAL) {
    return {
      ...state,
      ratingModal: true,
      movieRatingId: action.payload,
    };
  }
  if (action.type === CLOSE_RATING_MODAL) {
    return {
      ...state,
      ratingModal: false,
      movieRatingId: null,
    };
  }

  if (action.type == OPEN_ERROR_SNACKBAR) {
    return {
      ...state,
      errorSnackBar: true,
    };
  }

  if (action.type == CLOSE_ERROR_SNACKBAR) {
    return {
      ...state,
      errorSnackBar: false,
    };
  }

  if (action.type === GET_FRIEND_WATCHLIST_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === GET_FRIEND_WATCHLIST_SUCCESS) {
    return {
      ...state,
      friendsWatchList: action.payload,
      isLoading: false,
    };
  }
  if (action.type === GET_FRIEND_WATCHLIST_ERROR) {
    return {
      ...state,
      isLoading: false,
    };
  }
  if (action.type === GET_FRIEND_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === GET_FRIEND_SUCCESS) {
    return {
      ...state,
      friend: action.payload,
      isLoading: false,
    };
  }
  if (action.type === GET_FRIEND_ERROR) {
    return {
      ...state,
      isLoading: false,
    };
  }
  if (action.type === GET_FRIEND_TIERLIST_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === GET_FRIEND_TIERLIST_SUCCESS) {
    return {
      ...state,
      friendsTierList: action.payload,
      isLoading: false,
    };
  }
  if (action.type === GET_FRIEND_TIERLIST_ERROR) {
    return {
      ...state,
      isLoading: false,
    };
  }
  if (action.type === GET_TIERLIST_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === GET_TIERLIST_SUCCESS) {
    return {
      ...state,
      tierList: action.payload,
      isLoading: false,
    };
  }
  if (action.type === GET_TIERLIST_ERROR) {
    return {
      ...state,
      isLoading: false,
    };
  }

  if (action.type === OPEN_SEARCH_BAR) {
    return {
      ...state,
      showSearch: true,
    };
  }

  if (action.type === CLOSE_SEARCH_BAR) {
    return {
      ...state,
      showSearch: false,
    };
  }

  if (action.type === FIND_FRIENDS_SUCCESS) {
    return {
      ...state,
      currentSearchResults: action.payload,
    };
  }

  if (action.type === FIND_FRIENDS_ERROR) {
    return {
      ...state,
      currentSearchResults: [],
    };
  }
  if (action.type === "CLEAR_FRIENDS") {
    return {
      ...state,
      currentSearchResults: [],
    };
  }

  if (action.type === "ADD_FRIEND_SUCCESS") {
    return {
      ...state,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;
