import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
    REGISTER_USER_REQUEST,
    registerUserSuccess,
    registerUserFailure
} from '../actions/registerUsersActions';

function* registerUserSaga(action) {
    try {
        const response = yield call(axios.post, `${process.env.REACT_APP_SERVER_HOST_NAME}:${process.env.REACT_APP_SERVER_PORT}/users/registration`, action.payload);
        yield put(registerUserSuccess(response.data));
    } catch (error) {
        yield put(registerUserFailure(error.response.data || 'An error occurred'));
    }
}

export function* watchRegisterUser() {
    yield takeLatest(REGISTER_USER_REQUEST, registerUserSaga);
}
