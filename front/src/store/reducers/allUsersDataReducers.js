import { FETCH_ALL_DATA_REQUEST, FETCH_ALL_DATA_SUCCESS, FETCH_ALL_DATA_FAILURE } from "../actions/allUsersDataActions";

const initialState = {
    allData: [],
    error: null,
    loading: false,
};

const allDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_DATA_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_ALL_DATA_SUCCESS:
            return { ...state, allData: action.payload, loading: false  };
        case FETCH_ALL_DATA_FAILURE:
            return { ...state, error: action.payload, loading: false  };
        default:
            return state;
    }
};

export default allDataReducer;


