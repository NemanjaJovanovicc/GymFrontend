import React, { Component } from 'react';
import EmployeeService from '../../services/EmployeeService';

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            //id: '',
            contact: '',
            name: '',
            password: '',
            surname: '',
            username: ''
        }
        this.changeIdHandler = this.changeIdHandler.bind(this);
        this.changeContactHandler = this.changeContactHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeSurnameHandler = this.changeSurnameHandler.bind(this);
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }
    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( (res) => {
            let employee = res.data;
            this.setState({id: employee.id,
            contact: employee.contact,
            name: employee.name,
            password: employee.password,
            surname: employee.surname,
            username: employee.username
             });
        });
    }
    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {id: this.state.id, contact: this.state.contact, name: this.state.name, password: this.state.password, surname: this.state.surname, username: this.state.username};
        console.log('employee => ' + JSON.stringify(employee));
        EmployeeService.updateEmployee(employee, this.state.id).then(res => {
            this.props.history.push('/employees');
        });

        
    }

    changeIdHandler= (event) => {
        this.setState({id: event.target.value});
    }
    changeContactHandler= (event) => {
        this.setState({contact: event.target.value});
    }
    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }
    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }
    changeSurnameHandler= (event) => {
        this.setState({surname: event.target.value});
    }
    changeUsernameHandler= (event) => {
        this.setState({username: event.target.value});
    }

    cancel(){
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                    <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center"> Update Employee </h3>
                                    <div className = "card-body">
                                        <form>
                                            <div className = "form-group">
                                                <label> Employee ID</label>
                                                <input placeholder="Employee id" name="id" className="form-control" 
                                                value={this.state.id} onChange={this.changeIdHandler} />
                                            </div>
                                            <div className = "form-group">
                                                <label> Employee Contact</label>
                                                <input placeholder="Employee contact" name="contact" className="form-control" 
                                                value={this.state.contact} onChange={this.changeContactHandler} />
                                            </div>
                                            <div className = "form-group">
                                                <label> Employee Name </label>
                                                <input placeholder="Employee name" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler} />
                                            </div>
                                            <div className = "form-group">
                                                <label> Employee Password </label>
                                                <input placeholder="Employee password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changePasswordHandler} />
                                            </div>
                                            <div className = "form-group">
                                                <label> Employee Surname </label>
                                                <input placeholder="Employee surname" name="surname" className="form-control" 
                                                value={this.state.surname} onChange={this.changeSurnameHandler} />
                                            </div>
                                            <div className = "form-group">
                                                <label> Employee Username </label>
                                                <input placeholder="Employee username" name="username" className="form-control" 
                                                value={this.state.username} onChange={this.changeUsernameHandler} />
                                            </div>
                                            <button className="btn btn-success" onClick={this.updateEmployee}>Save</button>
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

export default UpdateEmployeeComponent;