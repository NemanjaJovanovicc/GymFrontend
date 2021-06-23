import React, { Component } from 'react';
import GymCardService from '../../services/GymCardService';
import EmployeeService from '../../services/EmployeeService';
import MemberService from '../../services/MemberService';


class ListGymCardComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            gymCards: []

        }
        this.addGymCard = this.addGymCard.bind(this);
        this.editGymCard = this.editGymCard.bind(this);
        this.deleteGymCard = this.deleteGymCard.bind(this);
    }

    deleteGymCard(id){
        GymCardService.deleteGymCard(id).then( res => {
            this.setState({gymCards: this.state.gymCards.filter(gymCard => gymCard.id !== id)});
        });
    }

    viewGymCard(id){
        this.props.history.push(`/view-gymCard/${id}`);
    }

    editGymCard(id){
        this.props.history.push(`/add-gymCard/${id}`);
    }
    componentDidMount(){
        GymCardService.getGymCards().then((res) => {
            this.setState({ gymCards: res.data});
        });
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
        MemberService.getMembers().then((res) => {
            this.setState({ members: res.data});
        });
    }

    addGymCard(){
        this.props.history.push('/add-gymCard/_add');
    }


    render() {
        return (
            <div>
                <h2 className="text-center"> Gym Cards List </h2>
                <div className = "row">
                     <button className = "btn btn-primary"  onClick = {this.addGymCard}> Add Gym Card </button>
                </div>
                <div className ="row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> Gym Card ID </th>
                                <th> Gym Card Duration </th>
                                <th> Actions </th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {
                                this.state.gymCards.map(
                                    gymCard => 
                                    <tr key = {gymCard.id}>
                                        <td> {gymCard.id}</td>
                                        <td> {gymCard.cardduration}</td>
                                        <td>
                                            <button onClick = { () => this.editGymCard(gymCard.id)} className="btn btn-info">Update </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteGymCard(gymCard.id)} className="btn btn-danger">Delete </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.viewGymCard(gymCard.id)} className="btn btn-info">View </button>
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

export default ListGymCardComponent