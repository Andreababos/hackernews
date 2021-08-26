import { User } from ".";
import { AppState } from "..";


export function selectUser(username: string): (state: AppState) => User | undefined {
    return (state: AppState) => {
        return state.users.users.find(user => user.id == username);
    }
}