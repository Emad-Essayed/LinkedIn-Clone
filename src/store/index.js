import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootreducer from "../reducers";

const store = createStore(rootreducer, applyMiddleware(thunkMiddleware));

export default store;
