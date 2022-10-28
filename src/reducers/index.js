import { combineReducers } from "redux";
import articleReducer from "./articleReducer";
import userReducer from "./userReducer";

const rootreducer = combineReducers({
  userState: userReducer,
  articleState: articleReducer,
});
export default rootreducer;
