import { types } from "../types/types";

export const AuthReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        uid: action.payload.uid,
      };
    case types.logout:
      return {};
    default:
      return state;
      break;
  }
};
