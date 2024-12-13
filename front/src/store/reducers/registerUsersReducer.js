import {
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE
} from '../actions/registerUsersActions';

const initialState = {
    user: null,
    status: 'idle',
    error: null,
};

const registerUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER_REQUEST:
            return {
                ...state,
                status: 'loading',
            };
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                status: 'success',
                user: action.payload,
            };
        case REGISTER_USER_FAILURE:
            return {
                ...state,
                status: 'failed',
                error: action.payload,
            };
        default:
            return {
                ...state,
                status: 'idle',
                error: null
            };
    }
};

export default registerUsersReducer;
