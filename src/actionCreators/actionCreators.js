import { DECREMENT, INCREMENT } from "../actions/counterActions";

export function decrement() {
    return {
        type: DECREMENT
    }
}

export function increment() {
    return {
        type: INCREMENT
    }
}

export function async_increment() {

    return function (dispatch) {
        setTimeout(() => dispatch({type: INCREMENT}),1000)
    }
    
}

export function async_decrement() {
    return function (dispatch) {
        setTimeout(() => dispatch({type: DECREMENT}),1000)
    }
    
}