import React, { Component } from 'react';
import CoachService from '../../services/CoachService';


class ListCoachComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            coachs: []

        }
        this.addCoach = this.addCoach.bind(this);
        this.editCoach = this.editCoach.bind(this);
        this.deleteCoach = this.deleteCoach.bind(this);
    }

    deleteCoach(id){
        CoachService.deleteCoach(id).then( res => {
            this.setState({coachs: this.state.coachs.filter(coach => coach.id !== id)});
        });
    }

    viewCoach(id){
        this.props.history.push(`/view-coach/${id}`);
    }

    editCoach(id){
        this.props.history.push(`/add-coach/${id}`);
    }
    componentDidMount(){
        CoachService.getCoachs().then((res) => {
            this.setState({ coachs: res.data});
        });
    }

    addCoach(){
        this.props.history.push('/add-coach/_add');
    }


    render() {
        return (
            <div>
                <h2 className="text-center"> Coachs List </h2>
                <div className = "row">
                     <button className = "btn btn-primary"  onClick = {this.addCoach}> Add Coach </button>
                </div>
                <div className ="row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> Coach ID </th>
                                <th> Coach ADRESS </th>
                                <th> Coach CONTACT </th>
                                <th> Coach JMBG </th>
                                <th> Coach NAME </th>
                                <th> Coach SURNAME </th>
                                <th> Actions </th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {
                                this.state.coachs.map(
                                    coach => 
                                    <tr key = {coach.id}>
                                        <td> {coach.id}</td>
                                        <td> {coach.adress}</td>
                                        <td> {coach.contact}</td>
                                        <td> {coach.jmbg}</td>
                                        <td> {coach.name}</td>
                                        <td> {coach.surname}</td>
                                        <td>
                                            <button onClick = { () => this.editCoach(coach.id)} className="btn btn-info">Update </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCoach(coach.id)} className="btn btn-danger">Delete </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.viewCoach(coach.id)} className="btn btn-info">View </button>
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

export default ListCoachComponent