export const FETCH_PRODUCTS_DATA_REQUEST = "FETCH_PRODUCTS_DATA_REQUEST";
export const FETCH_PRODUCTS_DATA_SUCCESS = "FETCH_PRODUCTS_DATA_SUCCESS";
export const FETCH_PRODUCTS_DATA_FAILURE = "FETCH_PRODUCTS_DATA_FAILURE";

export const fetchProductsDataRequest = () => ({
    type: FETCH_PRODUCTS_DATA_REQUEST,
});

export const fetchProductsDataSuccess = (data) => ({
    type: FETCH_PRODUCTS_DATA_SUCCESS,
    payload: data,
});

export const fetchProductsDataFailure = (error) => ({
    type: FETCH_PRODUCTS_DATA_FAILURE,
    payload: error,
});



