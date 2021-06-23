import axios from 'axios';
import authHeader from "./auth-header";

const GYMCARD_API_BASE_URl = "http://localhost:8080/gymCard";

class GymCardService {

    getGymCards() {
        return axios.get(GYMCARD_API_BASE_URl);
    }

    createGymCard(gymCard){
        return axios.post(GYMCARD_API_BASE_URl, gymCard, { headers: authHeader() });
    }

    getGymCardById(gymCardId){
        return axios.get(GYMCARD_API_BASE_URl + '/' + gymCardId, { headers: authHeader() });
    }

    updateGymCard(gymCard, gymCardId){
        return axios.put(GYMCARD_API_BASE_URl , gymCard, { headers: authHeader() });
    }

    deleteGymCard(gymCardId){
        return axios.delete(GYMCARD_API_BASE_URl + '/' + gymCardId, { headers: authHeader() });
    }
}

export default new GymCardService()