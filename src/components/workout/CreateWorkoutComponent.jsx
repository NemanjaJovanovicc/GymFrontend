import React, { Component } from 'react';
import WorkoutService from '../../services/WorkoutService';

class CreateWorkoutComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            workoutid: this.props.match.params.workoutid,
            date: '',
            duration: '',
            coach: null,
            member: null,
            workoutType: null
        }
        this.changeIdHandler = this.changeIdHandler.bind(this);
        this.changeDateHandler = this.changeDateHandler.bind(this);
        this.changeDurationHandler = this.changeDurationHandler.bind(this);
        this.changeCoachHandler = this.changeCoachHandler.bind(this);
        this.changeMemberHandler = this.changeMemberHandler.bind(this);
        this.changeWorkoutTypeHandler = this.changeWorkoutTypeHandler.bind(this);
    
    }
    componentDidMount(){

    
        if(this.state.workoutid === '_add'){
            return
        }else{
            WorkoutService.getWorkoutById(this.state.workoutid).then( (res) =>{
                let workout = res.data;
                this.setState({id: workout.id,
                    date: workout.date,
                    duration: workout.duration,
                    coach : workout.coach,
                    member: workout.member,
                    workoutType : workout.workoutType
                });
            });
        }        
    }


    saveOrUpdateWorkout = (e) => {
        e.preventDefault();
        let workout = {id: this.state.id, date: this.state.date, duration: this.state.duration, coach: this.state.coach, member: this.state.member, workoutType: this.state.workoutType};
        console.log(' workout => ' + JSON.stringify(workout));

        if(this.state.workoutid === '_add'){
            WorkoutService.createWorkout(workout).then(res =>{
                this.props.history.push('/workouts');
            });
        }else{
            WorkoutService.updateWorkout(workout, this.state.workoutid).then( res => {
                this.props.history.push('/workouts');
            });
        }
    }

    changeIdHandler= (event) => {
        this.setState({id: event.target.value});
    }
    changeDateHandler= (event) => {
        this.setState({date: event.target.value});
    }
    changeDurationHandler= (event) => {
        this.setState({duration: event.target.value});
    }
    changeCoachHandler= (event) => {
        this.setState({name: event.target.value});
    }
    changeMemberHandler= (event) => {
        this.setState({surname: event.target.value});
    }
    changeWorkoutTypeHandler= (event) => {
        this.setState({title: event.target.value});
    }
    

    cancel(){
        this.props.history.push('/workouts');
    }

    getTitle(){
        if(this.state.workoutid === '_add'){
            return <h3 className="text-center">Add Workout</h3>
        }else{
            return <h3 className="text-center">Update Workout</h3>
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
                                                <label> Workout ID</label>
                                                <input placeholder="Workout id" name="id" className="form-control" 
                                                value={this.state.id} onChange={this.changeIdHandler} />
                                            </div>
                                            <div className = "form-group">
                                                <label> Workout Date</label>
                                                <input placeholder="Workout date" name="date" className="form-control" 
                                                value={this.state.date} onChange={this.changeDateHandler} />
                                            </div>
                                            <div className = "form-group">
                                                <label> Workout Duration </label>
                                                <input placeholder="Workout duration" name="duration" className="form-control" 
                                                value={this.state.duration} onChange={this.changeDurationHandler} />
                                            </div>
                                            <div className = "form-group">
                                                <label> Coach </label>
                                                <input placeholder="Coach name" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changeCoachHandler} />
                                            </div>
                                            <div className = "form-group">
                                                <label> Member </label>
                                                <input placeholder="Member surname" name="surname" className="form-control" 
                                                value={this.state.surname} onChange={this.changeMemberHandler} />
                                            </div>
                                            <div className = "form-group">
                                                <label> Workout Type </label>
                                                <input placeholder="Workout type title" name="title" className="form-control" 
                                                value={this.state.title} onChange={this.changeWorkoutTypeHandler} />
                                            </div>
                                            <button className="btn btn-success" onClick={this.saveOrUpdateWorkout}>Save</button>
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

export default CreateWorkoutComponent