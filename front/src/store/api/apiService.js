import apiClient from './apiClient';
import { ENDPOINTS } from './endpoints';

class ApiService {

    static getProfileData() {
        return apiClient.get(ENDPOINTS.GET_PROFILE_DATA);
    }

}

export default ApiService;
