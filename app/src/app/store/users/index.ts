import { Action } from "redux";

export interface UsersState {
    users: User[],
}

export interface User {
    about: string,
    created: Date,
    delay: number,
    id: string,
    karma: number,
    submitted: number[]
}

export const initialStoriesState: UsersState = {
    users: []
}

export interface UsersAction extends Action {
    payload: any;
}

export const UsersActions = {
    SET: Symbol('users/set'),
    GET_USER: Symbol('users/get user'),
};

export function usersReducer(state: UsersState = initialStoriesState, action: UsersAction ): UsersState{
    switch (action.type) {
        case UsersActions.SET: {
            let users: User[] = [...state.users];
            const user: User | undefined = users.find(user => user.id === action.payload.id);
            if(!user){
                users.push(action.payload as User)
            }
            return {...state, users: users};
        }
        case UsersActions.GET_USER: {
            return state;
          }
        default:
            return state;
    }
}
