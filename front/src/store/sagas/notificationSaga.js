import { put, takeEvery } from 'redux-saga/effects';
import { addNotification } from '../actions/notificationActions';
import {REGISTER_USER_REQUEST} from "../actions/registerUsersActions";

function* handleNewUserRegistration(action) {
    const user = action.payload;
    console.log(user, 'saga');

    if (user && typeof user === 'object') {
        yield put(addNotification(user));
    } else {
        console.error('Invalid user data:', user);
    }

}

export function* watchNotifications() {
    yield takeEvery(REGISTER_USER_REQUEST, handleNewUserRegistration);
}
