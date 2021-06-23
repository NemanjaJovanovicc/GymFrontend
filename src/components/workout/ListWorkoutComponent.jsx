import React, { Component } from 'react';
import WorkoutService from '../../services/WorkoutService';
import CoachService from '../../services/CoachService';
import MemberService from '../../services/MemberService';
import WorkoutTypeService from '../../services/WorkoutTypeService';


class ListWorkoutComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            workouts: []

        }
        this.addWorkout = this.addWorkout.bind(this);
        this.editWorkout = this.editWorkout.bind(this);
        this.deleteWorkout = this.deleteWorkout.bind(this);
    }

    deleteWorkout(id){
        WorkoutService.deleteWorkout(id).then( res => {
            this.setState({workouts: this.state.workouts.filter(workout => workout.id !== id)});
        });
    }

    viewWorkout(id){
        this.props.history.push(`/view-workout/${id}`);
    }

    editWorkout(id){
        this.props.history.push(`/add-workout/${id}`);
    }
    componentDidMount(){
        WorkoutService.getWorkouts().then((res) => {
            this.setState({ workouts: res.data});
        });
        CoachService.getCoachs().then((res) => {
            this.setState({ coachs: res.data});
        });
        MemberService.getMembers().then((res) => {
            this.setState({ members: res.data});
        });
        WorkoutTypeService.getWorkoutTypes().then((res) => {
            this.setState({ workoutTypes: res.data});
        });
    }

    addWorkout(){
        this.props.history.push('/add-workout/_add');
    }


    render() {
        return (
            <div>
                <h2 className="text-center"> Workouts List </h2>
                <div className = "row">
                     <button className = "btn btn-primary"  onClick = {this.addWorkout}> Add Workout </button>
                </div>
                <div className ="row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> Workout ID </th>
                                <th> Workout DATE </th>
                                <th> Workout DURATION </th>
                                <th> Actions </th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {
                                this.state.workouts.map(
                                    workout => 
                                    <tr key = {workout.id}>
                                        <td> {workout.id}</td>
                                        <td> {workout.date}</td>
                                        <td> {workout.duration}</td>

                                        <td>
                                            <button onClick = { () => this.editWorkout(workout.id)} className="btn btn-info">Update </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteWorkout(workout.id)} className="btn btn-danger">Delete </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.viewWorkout(workout.id)} className="btn btn-info">View </button>
                                        </td>

                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}

export default ListWorkoutComponent