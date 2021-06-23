import React, { Component } from 'react'
import GymCardService from '../../services/GymCardService';
import EmployeeService from '../../services/EmployeeService';
import MemberService from '../../services/MemberService';


class ViewGymCardComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            gymCard: {},
            employee: {},
            member: {}
        }
    }

    componentDidMount(){
        GymCardService.getGymCardById(this.state.id).then( res => {
            this.setState({gymCard: res.data});
        })
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
        MemberService.getMemberById(this.state.id).then( res => {
            this.setState({member: res.data});
        })

    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Gym Card Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Gym Card ID: </label>
                            <div> { this.state.gymCard.id }</div>
                        </div>
                        <div className = "row">
                            <label> Gym Card Duration: </label>
                            <div> { this.state.gymCard.cardduration }</div>
                        </div>
                        <div className = "row">
                            <label> Employee ID: </label>
                            <div> { this.state.employee.id }</div>
                        </div>
                        <div className = "row">
                            <label> Member ID: </label>
                            <div> { this.state.member.id }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewGymCardComponent