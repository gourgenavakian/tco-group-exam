import { all } from "redux-saga/effects";
import dataSaga from "./profileDataSaga";
import {watchRegisterUser} from "./registerUsersSaga";
import allDataSaga from "./allUsersDataSaga";
import productsDataSaga from "./productsDataSaga";
import {watchNotifications} from "./notificationSaga";

export default function* rootSaga() {
    yield all([
        dataSaga(),
        watchRegisterUser(),
        allDataSaga(),
        productsDataSaga(),
        watchNotifications(),
    ]);
}
