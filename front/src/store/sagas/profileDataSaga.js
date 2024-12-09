import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {BASE_TOKEN, ENDPOINTS} from "../api";
import { FETCH_DATA_REQUEST, fetchDataSuccess, fetchDataFailure } from "../actions/profileDataActions";

function* fetchDataSaga() {
    try {

        const response = yield call(axios.get, ENDPOINTS.GET_PROFILE_DATA, {
            headers: {authorization: `Bearer ${BASE_TOKEN}`},
            'Content-Type': 'application/json'
        });

        yield put(fetchDataSuccess(response.data));
    } catch (error) {
        yield put(fetchDataFailure(error.message));
    }
}

export default function* dataSaga() {
    yield takeLatest(FETCH_DATA_REQUEST, fetchDataSaga);
}
