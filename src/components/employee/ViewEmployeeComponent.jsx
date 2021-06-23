import React, { Component } from 'react'
import EmployeeService from '../../services/EmployeeService';

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Employee Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Employee ID: </label>
                            <div> { this.state.employee.id }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Contact: </label>
                            <div> { this.state.employee.contact }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Name: </label>
                            <div> { this.state.employee.name }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Password: </label>
                            <div> { this.state.employee.password }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Surname: </label>
                            <div> { this.state.employee.surname }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Username: </label>
                            <div> { this.state.employee.username }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent