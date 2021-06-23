import React, { Component } from 'react'
import PaymentService from '../../services/PaymentService';

class ViewPaymentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            payment: {}
        }
    }

    componentDidMount(){
        PaymentService.getPaymentById(this.state.id).then( res => {
            this.setState({payment: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Payment Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Payment ID: </label>
                            <div> { this.state.payment.id }</div>
                        </div>
                        <div className = "row">
                            <label> Payment Amount: </label>
                            <div> { this.state.payment.amount }</div>
                        </div>
                        <div className = "row">
                            <label> Payment Date: </label>
                            <div> { this.state.payment.paymentdate }</div>
                        </div>
                        
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewPaymentComponent