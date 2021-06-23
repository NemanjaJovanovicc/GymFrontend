import axios from 'axios';
import authHeader from "./auth-header";

const WORKOUT_API_BASE_URl = "http://localhost:8080/workout";

class WorkoutService {

    getWorkouts() {
        return axios.get(WORKOUT_API_BASE_URl);
    }

    createWorkout(workout){
        return axios.post(WORKOUT_API_BASE_URl, workout, { headers: authHeader() });
    }

    getWorkoutById(workoutId){
        return axios.get(WORKOUT_API_BASE_URl + '/' + workoutId, { headers: authHeader() });
    }

    updateWorkout(workout, workoutId){
        return axios.put(WORKOUT_API_BASE_URl , workout, { headers: authHeader() });
    }

    deleteWorkout(workoutId){
        return axios.delete(WORKOUT_API_BASE_URl + '/' + workoutId, { headers: authHeader() });
    }
}

export default new WorkoutService()