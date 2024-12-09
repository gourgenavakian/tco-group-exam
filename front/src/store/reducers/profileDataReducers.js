import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from "../actions/profileDataActions";

const initialState = {
    data: [],
    error: null,
    loading: false,
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_DATA_SUCCESS:
            return { ...state, data: action.payload, loading: false  };
        case FETCH_DATA_FAILURE:
            return { ...state, error: action.payload, loading: false  };
        default:
            return state;
    }
};

export default dataReducer;


