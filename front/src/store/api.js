export const BASE_URL = `${process.env.REACT_APP_SERVER_HOST_NAME}:${process.env.REACT_APP_SERVER_PORT}`;
export const BASE_TOKEN = localStorage.getItem("token");

export const ENDPOINTS = {

    GET_PROFILE_DATA: `${BASE_URL}/users/profile`,

};