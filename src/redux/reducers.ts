import { Action } from "../models/ReduxActionInterface";
import { GlobalState } from "../models/ReduxGlobalStateInterface";
import { globalState } from "./state";

export function reducer(state: GlobalState = globalState, action: Action) {
    switch (action.type) {
        case "SET_CURRENT_POST_TITLE":
            return {
                ...state,
                currentPostTitle: action.payload
            }
        default:
            return state;
    }
}