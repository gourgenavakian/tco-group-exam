import apiClient from './apiClient';
import { ENDPOINTS } from './endpoints';

class ApiService {

    static getProfileData() {
        return apiClient.get(ENDPOINTS.GET_PROFILE_DATA);
    }

    static postProfileData(data) {
        return apiClient.post(ENDPOINTS.POST_PROFILE_DATA, data);
    }

    static getAllUsersData() {
        return apiClient.get(ENDPOINTS.GET_USERS_DATA)
    }

}

export default ApiService;
