import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { FETCH_DATA_REQUEST, fetchDataSuccess, fetchDataFailure } from "../actions/profileDataActions";

function* fetchDataSaga() {
    try {
        const token = localStorage.getItem("token");
        const response = yield call(axios.get, `${process.env.REACT_APP_SERVER_HOST_NAME}:${process.env.REACT_APP_SERVER_PORT}/users/profile`, {
            headers: {authorization: `Bearer token`},
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
