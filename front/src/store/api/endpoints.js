export const BASE_URL = `${process.env.REACT_APP_SERVER_HOST_NAME}:${process.env.REACT_APP_SERVER_PORT}`;

export const ENDPOINTS = {

    GET_PROFILE_DATA: `${BASE_URL}/users/profile`,

    POST_PROFILE_DATA: `${BASE_URL}/users/registration`,

    GET_USERS_DATA: `${BASE_URL}/users`,

};



