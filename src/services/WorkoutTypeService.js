import axios from 'axios';
import authHeader from "./auth-header";

const WORKOUTTYPE_API_BASE_URl = "http://localhost:8080/workoutType";

class WorkoutTypeService {

    getWorkoutTypes() {
        return axios.get(WORKOUTTYPE_API_BASE_URl);
    }

    createWorkoutType(workoutType){
        return axios.post(WORKOUTTYPE_API_BASE_URl, workoutType, { headers: authHeader() });
    }

    getWorkoutTypeById(workoutTypeId){
        return axios.get(WORKOUTTYPE_API_BASE_URl + '/' + workoutTypeId, { headers: authHeader() });
    }

    updateWorkoutType(workoutType, workoutTypeId){
        return axios.put(WORKOUTTYPE_API_BASE_URl , workoutType, { headers: authHeader() });
    }

    deleteWorkoutType(workoutTypeId){
        return axios.delete(WORKOUTTYPE_API_BASE_URl + '/' + workoutTypeId, { headers: authHeader() });
    }
}

export default new WorkoutTypeService()