import { APP_INIT } from "../actions";
import { getTopStories } from "./actions";

// @ts-ignore
export function storiesEffects(action, dispatch, getState): void {
    if (action.type === APP_INIT) {
        dispatch(getTopStories());
    }
  }