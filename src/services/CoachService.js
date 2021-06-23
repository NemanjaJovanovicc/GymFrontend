import axios from 'axios';
import authHeader from "./auth-header";

const COACH_API_BASE_URl = "http://localhost:8080/coach";

class CoachService {

    getCoachs() {
        return axios.get(COACH_API_BASE_URl);
    }

    createCoach(coach){
        return axios.post(COACH_API_BASE_URl, coach, { headers: authHeader() });
    }

    getCoachById(coachId){
        return axios.get(COACH_API_BASE_URl + '/' + coachId, { headers: authHeader() });
    }

    updateCoach(coach, coachId){
        return axios.put(COACH_API_BASE_URl , coach , { headers: authHeader() });
    }

    deleteCoach(coachId){
        return axios.delete(COACH_API_BASE_URl + '/' + coachId , { headers: authHeader() });
    }
}

export default new CoachService()