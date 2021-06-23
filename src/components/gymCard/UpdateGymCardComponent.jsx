import React, { Component } from 'react';
import MemberService from '../../services/MemberService';
import EmployeeService from '../../services/EmployeeService';
import GymCardService from '../../services/GymCardService';


class UpdateGymCardComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            gymCardid: this.props.match.params.gymCardid,
            //id: '',
            cardduration: '',
            employee: null,
            member: null,
            allEmployees: [],
            allMembers: []
        }

        this.changeIdHandler = this.changeIdHandler.bind(this);
        this.changeCardDurationHandler = this.changeCardDurationHandler.bind(this);
        this.changeMemberHandler = this.changeMemberHandler.bind(this);
        this.changeEmployeeHandler = this.changeEmployeeHandler.bind(this);
    }
    componentDidMount(){
        GymCardService.getGymCardById(this.state.id).then( (res) => {
            let gymCard = res.data;
            this.setState({id: gymCard.id,
                cardduration: gymCard.cardduration,
                employee: gymCard.employee,
                member: gymCard.member
             });
        });

        EmployeeService.getEmployees().then((response)=> {
            this.setState({allEmployees: response.data})
        });

        MemberService.getMembers().then((response)=> {
            this.setState({allMembers: response.data})
        });
    }

    

    updateGymCard = (e) => {
        e.preventDefault();
        let gymCard = {id: this.state.id, cardduration: this.state.cardduration, employee: this.state.employee, member: this.state.member};
        console.log('gymCard => ' + JSON.stringify(gymCard));
        GymCardService.updateGymCard(gymCard, this.state.id).then(res => {
            this.props.history.push('/gymCards');
        });

        
    }

    changeIdHandler= (event) => {
        this.setState({id: event.target.value});
    }
    changeCardDurationHandler= (event) => {
        this.setState({cardduration: event.target.value});
    }
/*
    changeEmployeeHandler= (event) => {
        this.setState({employee: event.target.value});
    }
    changeMemberHandler= (event) => {
        this.setState({member: event.target.value});
    }*/

    cancel(){
        this.props.history.push('/gymCards');
    }

    render() {
        let optionsEmployee = this.state.allEmployees;
        let optionseMember = this.state.allMembers;
        return (
            <div>
                    <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center"> Update Gym Card</h3>
                                    <div className = "card-body">
                                        <form>
                                        <div className = "form-group">
                                                <label> Gym Card ID</label>
                                                <input placeholder="Gym Card id" name="id" className="form-control" 
                                                value={this.state.id} onChange={this.changeIdHandler} />
                                            </div>
                                            <div className = "form-group">
                                                <label> Gym Card Duration </label>
                                                <input placeholder="Gym card duration" name="cardduration" className="form-control" 
                                                value={this.state.cardduration} onChange={this.changeCardDurationHandler} />
                                            </div>
                                            
                                            {/*
                                            <div className = "form-group">
                                                <label> Employee </label>
                                                <input placeholder="Employee username" name="username" className="form-control" 
                                                value={this.state.username} onChange={this.changeEmployeeHandler} />
                                            </div>
                                            <div className = "form-group">
                                                <label> Member </label>
                                                <input placeholder="Member name" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changeMemberHandler} />
                                            </div>

                                            */}


                                            <button className="btn btn-success" onClick={this.saveOrUpdateGymCard}>Save</button>
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

export default UpdateGymCardComponent; 