import { combineReducers, createStore } from "redux";
import { storiesReducer, StoriesState } from "./stories";

export interface AppState {
    stories: StoriesState;
}

export const appReducer = combineReducers<AppState>({
    stories: storiesReducer,
  });
  
export const store = createStore(appReducer);