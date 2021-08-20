import { Action } from "redux";

export interface StoriesState {
    storiesList: Story[]
}

export interface Story {  
    by?: string,
    descendants?: number,
    id?: number,
    kids?: number[],
    score?: number,
    time?: Date,
    title?: number,
    type?: string,
    url?: string
}

export const initialStoriesState: StoriesState = {
    storiesList: []
}

export interface StoriesAction extends Action {
    payload: any;
}

export const StoriesActions = {
    SET: Symbol('Stories/set'),
};

export function storiesReducer(state: StoriesState = initialStoriesState, action: StoriesAction ): StoriesState{
    switch (action.type) {
        case StoriesActions.SET: {
          return { ...state, ...action.payload};
        }
        default:
            return state;
    }
}
