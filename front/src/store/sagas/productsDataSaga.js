import { call, put, takeLatest } from "redux-saga/effects";
import ApiService from "../api/apiService";
import { FETCH_PRODUCTS_DATA_REQUEST, fetchProductsDataSuccess, fetchProductsDataFailure } from "../actions/productsDataActions";


function* fetchProductsDataSaga() {
    try {
        console.log("Fetching data started");

        const response = yield call(ApiService.getProductsData);
        console.log("Data successfully fetched:", response.data);

        yield put(fetchProductsDataSuccess(response.data));
    } catch (error) {
        console.error("Error while fetching data:", error);

        const errorMessage = error.response?.data?.message || "Unknown error occurred";

        yield put(fetchProductsDataFailure(errorMessage));
    }
}

export default function* productsDataSaga() {
    yield takeLatest(FETCH_PRODUCTS_DATA_REQUEST, fetchProductsDataSaga);
}
