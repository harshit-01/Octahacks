import * as actionType from "../types";
const initialState = {
     user:[]
  };
  
const userReducer = function (state = initialState, action) {
    switch (action.type) {
      case actionType.SET_USER_DATA: {
        return {
          ...state,
          user: true
        }
      }
      default: {
        return state;
      }
    }
};
  
export default userReducer;