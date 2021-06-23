import React, { Component } from 'react';
import PaymentService from '../../services/PaymentService';

class UpdatePaymentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            //id: '',
            amount: '',
            paymentdate: ''
        }
        this.changeIdHandler = this.changeIdHandler.bind(this);
        this.changeAmountHandler = this.changeAmountHandler.bind(this);
        this.changePaymentDateHandler = this.changePaymentDateHandler.bind(this);
        this.updatePayment = this.updatePayment.bind(this);
    }
    componentDidMount(){
        PaymentService.getPaymentById(this.state.id).then( (res) => {
            let payment = res.data;
            this.setState({id: payment.id,
            amount: payment.amount,
            paymentdate: payment.paymentdate
             });
        });
    }
    updatePayment = (e) => {
        e.preventDefault();
        let payment = {id: this.state.id, amount: this.state.amount, paymentdate: this.state.paymentdate};
        console.log('payment => ' + JSON.stringify(payment));
        PaymentService.updatePayment(payment, this.state.id).then(res => {
            this.props.history.push('/payments');
        });

        
    }

    changeIdHandler= (event) => {
        this.setState({id: event.target.value});
    }
    changeAmountHandler= (event) => {
        this.setState({amount: event.target.value});
    }
    changePaymentDateHandler= (event) => {
        this.setState({paymentdate: event.target.value});
    }

    cancel(){
        this.props.history.push('/payments');
    }

    render() {
        return (
            <div>
                    <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center"> Update Payment </h3>
                                    <div className = "card-body">
                                        <form>
                                            <div className = "form-group">
                                                <label> Payment ID</label>
                                                <input placeholder="Payment id" name="id" className="form-control" 
                                                value={this.state.id} onChange={this.changeIdHandler} />
                                            </div>
                                            <div className = "form-group">
                                                <label> Payment Amount</label>
                                                <input placeholder="Payment amount" name="amount" className="form-control" 
                                                value={this.state.amount} onChange={this.changeAmountHandler} />
                                            </div>
                                            <div className = "form-group">
                                                <label> Payment Date </label>
                                                <input placeholder="Payment date" name="paymentdate" className="form-control" 
                                                value={this.state.paymentdate} onChange={this.changePaymentDateHandler} />
                                            </div>
                                            <button className="btn btn-success" onClick={this.updatePayment}>Save</button>
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

export default UpdatePaymentComponent; 