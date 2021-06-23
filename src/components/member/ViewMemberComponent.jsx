import React, { Component } from 'react'
import MemberService from '../../services/MemberService'
import PaymentService from '../../services/PaymentService'
import CardCategoryService from '../../services/CardCategoryService'

class ViewMemberComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            amount: this.props.match.params.amount,
            description: this.props.match.params.description,
            member: {},
            cardCategory: {},
            payment: {}
        }
    }

    componentDidMount(){
        MemberService.getMemberById(this.state.id).then( res => {
            this.setState({member: res.data});
        });
        PaymentService.getPaymentById(this.state.id).then( res => {
            this.setState({payment: res.data});
        });
        CardCategoryService.getCardCategoryById(this.state.id).then( res => {
            this.setState({cardCategory: res.data});
        });
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Member Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Member ID: </label>
                            <div> { this.state.member.id }</div>
                        </div>
                        <div className = "row">
                            <label> Member Adress: </label>
                            <div> { this.state.member.adress }</div>
                        </div>
                        <div className = "row">
                            <label> Member Contact: </label>
                            <div> { this.state.member.contact }</div>
                        </div>
                        <div className = "row">
                            <label> Member JMBG: </label>
                            <div> { this.state.member.jmbg }</div>
                        </div>
                        <div className = "row">
                            <label> Member Name: </label>
                            <div> { this.state.member.name }</div>
                        </div>
                        <div className = "row">
                            <label> Member Status: </label>
                            <div> { this.state.member.status }</div>
                        </div>
                        <div className = "row">
                            <label> Member Surname: </label>
                            <div> { this.state.member.surname }</div>
                        </div>
                        <div className = "row">
                            <label> Card Category: </label>
                            <div> { this.state.cardCategory.id }</div>
                        </div>
                        <div className = "row">
                            <label> Payment : </label>
                            <div> { this.state.payment.id }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewMemberComponent