import React, { Component } from 'react'
import MemberService from '../../services/MemberService'
import WorkoutService from '../../services/WorkoutService'
import CoachService from '../../services/CoachService'
import WorkoutTypeService from '../../services/WorkoutTypeService'

class ViewWorkoutComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            workout: {},
            coach: {},
            member: {},
            workoutType: {}
        }
    }

    componentDidMount(){
        WorkoutService.getWorkoutById(this.state.id).then( res => {
            this.setState({workout: res.data});
        });
        CoachService.getCoachById(this.state.id).then( res => {
            this.setState({coach: res.data});
        });
        MemberService.getMemberById(this.state.id).then( res => {
            this.setState({member: res.data});
        });
        WorkoutTypeService.getWorkoutTypeById(this.state.id).then( res => {
            this.setState({workoutType: res.data});
        });
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Workout Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Workout ID: </label>
                            <div> { this.state.workout.id }</div>
                        </div>
                        <div className = "row">
                            <label> Workout Date: </label>
                            <div> { this.state.workout.date }</div>
                        </div>
                        <div className = "row">
                            <label> Workout Duration: </label>
                            <div> { this.state.workout.duration }</div>
                        </div>
                        <div className = "row">
                            <label> Coach ID: </label>
                            <div> { this.state.coach.id }</div>
                        </div>
                        <div className = "row">
                            <label> Member ID: </label>
                            <div> { this.state.member.id }</div>
                        </div>
                        <div className = "row">
                            <label> WorkoutType ID: </label>
                            <div> { this.state.workoutType.id }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewWorkoutComponent