import React, { Component } from 'react';
import CoachService from '../../services/CoachService';

class UpdateCoachComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            //id: '',
            adress: '',
            contact: '',
            jmbg: '',
            name: '',
            surname: ''
        }
        this.changeIdHandler = this.changeIdHandler.bind(this);
        this.changeAdressHandler = this.changeAdressHandler.bind(this);
        this.changeContactHandler = this.changeContactHandler.bind(this);
        this.changeJmbgHandler = this.changeJmbgHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeSurnameHandler = this.changeSurnameHandler.bind(this);
        this.updateCoach = this.updateCoach.bind(this);
    }
    componentDidMount(){
        CoachService.getCoachById(this.state.id).then( (res) => {
            let coach = res.data;
            this.setState({id: coach.id,
            adress: coach.adress,
            contact: coach.contact,
            jmbg: coach.jmbg,
            name: coach.name,
            surname: coach.surname
             });
        });
    }
    updateCoach = (e) => {
        e.preventDefault();
        let coach = {id: this.state.id, adress: this.state.adress, contact: this.state.contact, jmbg: this.state.jmbg, name: this.state.name, surname: this.state.surname};
        console.log('coach => ' + JSON.stringify(coach));
        CoachService.updateCoach(coach, this.state.id).then(res => {
            this.props.history.push('/coachs');
        });

        
    }

    changeIdHandler= (event) => {
        this.setState({id: event.target.value});
    }
    changeAdressHandler= (event) => {
        this.setState({adress: event.target.value});
    }
    changeContactHandler= (event) => {
        this.setState({contact: event.target.value});
    }
    changeJmbgHandler= (event) => {
        this.setState({jmbg: event.target.value});
    }
    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }
    changeSurnameHandler= (event) => {
        this.setState({surname: event.target.value});
    }

    cancel(){
        this.props.history.push('/coachs');
    }

    render() {
        return (
            <div>
                    <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center"> Update Coach </h3>
                                    <div className = "card-body">
                                        <form>
                                            <div className = "form-group">
                                                <label> Coach ID</label>
                                                <input placeholder="Coach id" name="id" className="form-control" 
                                                value={this.state.id} onChange={this.changeIdHandler} />
                                            </div>
                                            <div className = "form-group">
                                                <label> Coach Adress</label>
                                                <input placeholder="Coach adress" name="adress" className="form-control" 
                                                value={this.state.adress} onChange={this.changeAdressHandler} />
                                            </div>
                                            <div className = "form-group">
                                                <label> Coach Contact </label>
                                                <input placeholder="Coach contact" name="contact" className="form-control" 
                                                value={this.state.contact} onChange={this.changeContactHandler} />
                                            </div>
                                            <div className = "form-group">
                                                <label> Coach JMBG </label>
                                                <input placeholder="Coach jmbg" name="jmbg" className="form-control" 
                                                value={this.state.jmbg} onChange={this.changeJmbgHandler} />
                                            </div>
                                            <div className = "form-group">
                                                <label> Coach Name </label>
                                                <input placeholder="Coach name" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler} />
                                            </div>
                                            <div className = "form-group">
                                                <label> Coach Surname </label>
                                                <input placeholder="Coach Surname" name="surname" className="form-control" 
                                                value={this.state.surname} onChange={this.changeSurnameHandler} />
                                            </div>
                                            <button className="btn btn-success" onClick={this.updateCoach}>Save</button>
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

export default UpdateCoachComponent; 