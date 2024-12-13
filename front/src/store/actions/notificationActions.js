export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const MARK_ALL_AS_READ = 'MARK_ALL_AS_READ';
export const CLEAR_NOTIFICATION = 'CLEAR_NOTIFICATION';
export const MARK_NOTIFICATION_AS_SHOWN = 'MARK_NOTIFICATION_AS_SHOWN';

export const addNotification = (user) => ({
    type: ADD_NOTIFICATION,
    payload: {
        id: Date.now(),
        message: `New user registration: ${user.username}`,
        user: {
            id: user._id,
            name: user.fullName,
            avatar: user.avatar,
        },
        read: false,
    },
});

export const markAllAsRead = () => ({
    type: MARK_ALL_AS_READ,
});

export const clearNotifications = () => ({
    type: "CLEAR_NOTIFICATION",
});

export const markNotificationAsShown = (id) => ({
    type: "MARK_NOTIFICATION_AS_SHOWN",
    payload: id,
});
