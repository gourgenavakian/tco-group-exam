import { FETCH_PRODUCTS_DATA_REQUEST, FETCH_PRODUCTS_DATA_SUCCESS, FETCH_PRODUCTS_DATA_FAILURE } from "../actions/productsDataActions";

const initialState = {
    productsData: [],
    error: null,
    loading: false,
};

export const productsDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_DATA_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_PRODUCTS_DATA_SUCCESS:
            return { ...state, productsData: action.payload, loading: false  };
        case FETCH_PRODUCTS_DATA_FAILURE:
            return { ...state, error: action.payload, loading: false  };
        default:
            return state;
    }
};