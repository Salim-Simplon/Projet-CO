import * as types from '../Action/types';

const roleReducer = (state = "none", action) => {
    console.log("reducer");

    if (action.type === types.LOGIN_USER) {
        // localStorage.setItem("payload  : ",JSON.stringify( action.payload));
        return action.payload

    } else if (action.type === types.LOGOUT_USER) {
        return action.payload

    } else {
        return state
    }
}

export default roleReducer;