import React, { Component } from 'react'
import WorkoutTypeService from '../../services/WorkoutTypeService';

class ViewWorkoutTypeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            workoutType: {}
        }
    }

    componentDidMount(){
        WorkoutTypeService.getWorkoutTypeById(this.state.id).then( res => {
            this.setState({workoutType: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Workout Type Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Workout Type ID: </label>
                            <div> { this.state.workoutType.id }</div>
                        </div>
                        <div className = "row">
                            <label> Workout Type Title: </label>
                            <div> { this.state.workoutType.title }</div>
                        </div>
                        
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewWorkoutTypeComponent