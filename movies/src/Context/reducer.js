import { initialState } from "./appContext";
import {
  SETUP_USER_BEGIN,
  SETUP_USER_ERROR,
  SETUP_USER_SUCCESS,
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

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;
