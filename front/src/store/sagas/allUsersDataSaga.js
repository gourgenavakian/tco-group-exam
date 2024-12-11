import { call, put, takeLatest } from "redux-saga/effects";
import ApiService from "../api/apiService";
import { FETCH_ALL_DATA_REQUEST, fetchAllDataSuccess, fetchAllDataFailure } from "../actions/allUsersDataActions";


function* fetchAllDataSaga() {
    try {
        console.log("Fetching all data started");

        const response = yield call(ApiService.getAllUsersData);
        console.log("Data successfully fetched:", response.data);

        yield put(fetchAllDataSuccess(response.data));
    } catch (error) {
        console.error("Error while fetching data:", error);

        const errorMessage = error.response?.data?.message || "Unknown error occurred";

        yield put(fetchAllDataFailure(errorMessage));
    }
}

export default function* allDataSaga() {
    yield takeLatest(FETCH_ALL_DATA_REQUEST, fetchAllDataSaga);
}
