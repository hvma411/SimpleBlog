import { Action } from "../models/ReduxActionInterface"

const setCurrentPostTitle = (payload: any): Action => {
    return {
        type: "SET_CURRENT_POST_TITLE",
        payload: payload,
    }
}

export default {
    setCurrentPostTitle,
}