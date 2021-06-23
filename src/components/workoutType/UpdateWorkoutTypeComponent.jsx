import React, { Component } from 'react';
import WorkoutTypeService from '../../services/WorkoutTypeService';

class UpdateWorkoutTypeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            //id: '',
            title: ''
        }
        this.changeIdHandler = this.changeIdHandler.bind(this);
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
    }
    componentDidMount(){
        WorkoutTypeService.getWorkoutTypeById(this.state.id).then( (res) => {
            let workoutType = res.data;
            this.setState({id: workoutType.id,
            title: workoutType.title
             });
        });
    }
    updateWorkoutType = (e) => {
        e.preventDefault();
        let workoutType = {id: this.state.id, title: this.state.title};
        console.log('workoutType => ' + JSON.stringify(workoutType));
        WorkoutTypeService.updateWorkoutType(workoutType, this.state.id).then(res => {
            this.props.history.push('/workoutTypes');
        });

        
    }

    changeIdHandler= (event) => {
        this.setState({id: event.target.value});
    }
    changeTitleHandler= (event) => {
        this.setState({title: event.target.value});
    }

    cancel(){
        this.props.history.push('/workoutTypes');
    }

    render() {
        return (
            <div>
                    <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center"> Update Workout Type </h3>
                                    <div className = "card-body">
                                        <form>
                                            <div className = "form-group">
                                                <label> Workout Type ID</label>
                                                <input placeholder="WorkoutType id" name="id" className="form-control" 
                                                value={this.state.id} onChange={this.changeIdHandler} />
                                            </div>
                                            <div className = "form-group">
                                                <label> Workout Type Title</label>
                                                <input placeholder="WorkoutType title" name="title" className="form-control" 
                                                value={this.state.title} onChange={this.changeTitleHandler} />
                                            </div>
                                            
                                            <button className="btn btn-success" onClick={this.updateWorkoutType}>Save</button>
                                            <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                        </form>
                                    </div>

                            </div>

                        </div>

                    </div>
            </div>
        )
    }
}

export default UpdateWorkoutTypeComponent; 