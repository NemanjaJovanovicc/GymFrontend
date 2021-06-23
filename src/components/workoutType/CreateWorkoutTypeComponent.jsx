import React, { Component } from 'react';
import WorkoutTypeService from '../../services/WorkoutTypeService';

class CreateWorkoutTypeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            workoutTypeid: this.props.match.params.workoutTypeid,
            id: '',
            title: ''
        }
        this.changeIdHandler = this.changeIdHandler.bind(this);
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.saveOrUpdateWorkoutType = this.saveOrUpdateWorkoutType.bind(this);
    }
    componentDidMount(){

    
        if(this.state.workoutTypeid === '_add'){
            return
        }else{
            WorkoutTypeService.getWorkoutTypeById(this.state.workoutTypeid).then( (res) =>{
                let workoutType = res.data;
                this.setState({id: workoutType.id,
                    title: workoutType.title
                });
            });
        }        
    }


    saveOrUpdateWorkoutType = (e) => {
        e.preventDefault();
        let workoutType = {id: this.state.id, title: this.state.title};
        console.log('workoutType => ' + JSON.stringify(workoutType));

        if(this.state.workoutTypeid === '_add'){
            WorkoutTypeService.createWorkoutType(workoutType).then(res =>{
                this.props.history.push('/workoutTypes');
            });
        }else{
            WorkoutTypeService.updateWorkoutType(workoutType, this.state.workoutTypeid).then( res => {
                this.props.history.push('/workoutTypes');
            });
        }
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

    getTitle(){
        if(this.state.workoutTypeid === '_add'){
            return <h3 className="text-center">Add Workout Type</h3>
        }else{
            return <h3 className="text-center">Update Workout Type</h3>
        }
    }
    render() {
        return (
            <div>
                    <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                            {
                                    this.getTitle()
                                }
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
                                            
                                            <button className="btn btn-success" onClick={this.saveOrUpdateWorkoutType}>Save</button>
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

export default CreateWorkoutTypeComponent