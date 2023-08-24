import { initialState } from "./appContext";

const reducer = (state, action) => {
  // action example
  //   if (action.type === DISPLAY_ALERT) {
  //     return {
  //       ...state,
  //     };
  //   }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;
