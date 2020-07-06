import dialogReducer from "./dialog-reducer";
import myFeedReducer from "./myFeed-reducer";
import usersReducer from "./users-reducer";

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
  userPage: myFeedReducer,
  dialogPage: dialogReducer,
  usersPage: usersReducer,
});

let store = createStore(reducers);

export default store;
window.store = store;
