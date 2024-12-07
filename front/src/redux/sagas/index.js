import { all } from "redux-saga/effects";
import dataSaga from "./profileDataSaga";

export default function* rootSaga() {
    yield all([dataSaga()]);
}
