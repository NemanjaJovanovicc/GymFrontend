import React, { Component } from 'react'
import CoachService from '../../services/CoachService';

class ViewCoachComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            coach: {}
        }
    }

    componentDidMount(){
        CoachService.getCoachById(this.state.id).then( res => {
            this.setState({coach: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Coach Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Coach ID: </label>
                            <div> { this.state.coach.id }</div>
                        </div>
                        <div className = "row">
                            <label> Coach Adress: </label>
                            <div> { this.state.coach.adress }</div>
                        </div>
                        <div className = "row">
                            <label> Coach Contact: </label>
                            <div> { this.state.coach.contact }</div>
                        </div>
                        <div className = "row">
                            <label> Coach JMBG: </label>
                            <div> { this.state.coach.jmbg }</div>
                        </div>
                        <div className = "row">
                            <label> Coach Name: </label>
                            <div> { this.state.coach.name }</div>
                        </div>
                        <div className = "row">
                            <label> Coach Surname: </label>
                            <div> { this.state.coach.surname }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewCoachComponent