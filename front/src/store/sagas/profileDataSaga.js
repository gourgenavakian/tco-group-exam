import { call, put, takeLatest } from "redux-saga/effects";
import ApiService from "../api/apiService";
import { FETCH_DATA_REQUEST, fetchDataSuccess, fetchDataFailure } from "../actions/profileDataActions";


function* fetchDataSaga() {
    try {
        console.log("Fetching data started");

        const response = yield call(ApiService.getProfileData);
        console.log("Data successfully fetched:", response.data);

        yield put(fetchDataSuccess(response.data));
    } catch (error) {
        console.error("Error while fetching data:", error);

        const errorMessage = error.response?.data?.message || "Unknown error occurred";

        yield put(fetchDataFailure(errorMessage));
    }
}

export default function* dataSaga() {
    yield takeLatest(FETCH_DATA_REQUEST, fetchDataSaga);
}
