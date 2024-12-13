import { ADD_NOTIFICATION, MARK_ALL_AS_READ } from '../actions/notificationActions';

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('notifications');
        return serializedState ? JSON.parse(serializedState) : { notifications: [], unreadCount: 0 };
    } catch (err) {
        console.error('Error loading state from localStorage', err);
        return { notifications: [], unreadCount: 0 };
    }
};

const saveState = (state) => {
    try {
        localStorage.setItem('notifications', JSON.stringify(state));
    } catch (err) {
        console.error('Error saving state to localStorage', err);
    }
};

const initialState = loadState();

export const notificationReducer = (state = initialState, action) => {
    let newState;

    switch (action.type) {
        case ADD_NOTIFICATION:
            newState = {
                ...state,
                notifications: [...state.notifications, action.payload],
                unreadCount: state.unreadCount + 1,
            };
            saveState(newState);
            return newState;
        case MARK_ALL_AS_READ:
            newState = {
                ...state,
                notifications: state.notifications.map((notification) => ({
                    ...notification,
                    read: true,
                })),
                unreadCount: 0,
            };
            saveState(newState);
            return newState;
        default:
            return state;
    }
};
