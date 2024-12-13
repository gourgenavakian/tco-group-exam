export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const MARK_ALL_AS_READ = 'MARK_ALL_AS_READ';

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
