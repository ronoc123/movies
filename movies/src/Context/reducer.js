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
} from "./actions";
const reducer = (state, action) => {
  // action example
  //   if (action.type === DISPLAY_ALERT) {
  //     return {
  //       ...state,
  //     };
  //   }

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
      ...state,
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
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;
