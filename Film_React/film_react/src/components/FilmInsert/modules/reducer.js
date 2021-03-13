import * as ActionType from "./constant"

let initialState = {
    loading: false,
    data: null,
    error: null
}

const insertFilmReducer = (state = initialState, action) => {
    switch (action.type) {

        case ActionType.INSERT_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state };
        case ActionType.INSERT_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state };
        case ActionType.INSERT_FAILED:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state };
        default: return { ...state }
    }
}

export default insertFilmReducer