import { all } from "redux-saga/effects";
import dataSaga from "./profileDataSaga";
import {watchRegisterUser} from "./registerUsersSaga";

export default function* rootSaga() {
    yield all([
        dataSaga(),
        watchRegisterUser()
    ]);
}
