import React, { Component } from 'react';
import WorkoutTypeService from '../../services/WorkoutTypeService';


class ListWorkoutTypeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            workoutTypes: []

        }
        this.addWorkoutType = this.addWorkoutType.bind(this);
        this.editWorkoutType = this.editWorkoutType.bind(this);
        this.deleteWorkoutType = this.deleteWorkoutType.bind(this);
    }

    deleteWorkoutType(id){
        WorkoutTypeService.deleteWorkoutType(id).then( res => {
            this.setState({workoutTypes: this.state.workoutTypes.filter(workoutType => workoutType.id !== id)});
        });
    }

    viewWorkoutType(id){
        this.props.history.push(`/view-workoutType/${id}`);
    }

    editWorkoutType(id){
        this.props.history.push(`/add-workoutType/${id}`);
    }
    componentDidMount(){
        WorkoutTypeService.getWorkoutTypes().then((res) => {
            this.setState({ workoutTypes: res.data});
        });
    }

    addWorkoutType(){
        this.props.history.push('/add-workoutType/_add');
    }


    render() {
        return (
            <div>
                <h2 className="text-center"> Workout Types List </h2>
                <div className = "row">
                     <button className = "btn btn-primary"  onClick = {this.addWorkoutType}> Add Workout Type </button>
                </div>
                <div className ="row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> Workout Type ID </th>
                                <th> Workout Type TITLE </th>
                                <th> Actions </th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {
                                this.state.workoutTypes.map(
                                    workoutType => 
                                    <tr key = {workoutType.id}>
                                        <td> {workoutType.id}</td>
                                        <td> {workoutType.title}</td>
                                        <td>
                                            <button onClick = { () => this.editWorkoutType(workoutType.id)} className="btn btn-info">Update </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteWorkoutType(workoutType.id)} className="btn btn-danger">Delete </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.viewWorkoutType(workoutType.id)} className="btn btn-info">View </button>
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

export default ListWorkoutTypeComponent