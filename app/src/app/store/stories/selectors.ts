import { Story } from ".";
import { AppState } from "..";

export function selectStories(state: AppState): Story[]{
    return state.stories.storiesList;
}