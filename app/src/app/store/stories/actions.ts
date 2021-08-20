import { StoriesActions } from ".";

export function getTopStories(): any {
    // @ts-ignore
    return async (dispatch, getState) => {
        const res = await (await fetch(`https://hacker-news.firebaseio.com/v0/topstories.json`, {
            method: 'GET'
        })).json();
        console.log(res)
        dispatch({ type: StoriesActions.SET, payload: res})
    }
}