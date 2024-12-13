import { call, put, takeLatest } from 'redux-saga/effects';

import {
    REGISTER_USER_REQUEST,
    registerUserSuccess,
    registerUserFailure
} from '../actions/registerUsersActions';
import ApiService from "../api/apiService";

function* registerUserSaga(action) {
    try {
        console.log("saga started")
        const response = yield call(ApiService.postProfileData, action.payload);
        console.log(response);
        yield put(registerUserSuccess(response.data));
    } catch (error) {
        yield put(registerUserFailure(error.response.data || 'An error occurred'));
    }
}

export function* watchRegisterUser() {
    yield takeLatest(REGISTER_USER_REQUEST, registerUserSaga);
}


