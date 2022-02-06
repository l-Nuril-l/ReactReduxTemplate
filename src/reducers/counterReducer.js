import { combineReducers } from "redux"
import { DECREMENT, INCREMENT } from "../actions/counterActions"

function counterReducer(state = 90, action) {
    switch (action.type) {
        case INCREMENT:
            return state + 1
        case DECREMENT:
            return state - 1
        default:
            return state
    }
}

export const rootReducer = combineReducers({
    count: counterReducer
})
