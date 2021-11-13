import { combineReducers } from "redux";
// import LayoutReducer from "./LayoutReducer";
import userReducer from "./UserReducer";

const RootReducer = combineReducers({
//   layout: LayoutReducer,
     user: userReducer,
});

export default RootReducer;
