import { combineReducers } from "redux";

import movieReducer from "./movieReducer";
import favoriteReducer from "./favoriteReducer";

const rootReducer = combineReducers({
  movie: movieReducer,
  favorites: favoriteReducer,
});

export default rootReducer;
