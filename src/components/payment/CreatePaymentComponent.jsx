import React, { Component } from 'react';
import PaymentService from '../../services/PaymentService';

class CreatePaymentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            paymentid: this.props.match.params.paymentid,
            id: '',
            amount: '',
            paymentdate: ''
        }
        this.changeIdHandler = this.changeIdHandler.bind(this);
        this.changeAmountHandler = this.changeAmountHandler.bind(this);
        this.changePaymentDateHandler = this.changePaymentDateHandler.bind(this);
        this.saveOrUpdatePayment = this.saveOrUpdatePayment.bind(this);
    }
    componentDidMount(){

    
        if(this.state.paymentd === '_add'){
            return
        }else{
            PaymentService.getPaymentById(this.state.paymentid).then( (res) =>{
                let payment = res.data;
                this.setState({id: payment.id,
                    amount: payment.amount,
                    paymentdate: payment.paymentdate
                });
            });
        }        
    }


    saveOrUpdatePayment = (e) => {
        e.preventDefault();
        let payment = {id: this.state.id, amount: this.state.amount, paymentdate: this.state.paymentdate};
        console.log('payment => ' + JSON.stringify(payment));

        if(this.state.paymentid === '_add'){
            PaymentService.createPayment(payment).then(res =>{
                this.props.history.push('/payments');
            });
        }else{
            PaymentService.updatePayment(payment, this.state.paymentid).then( res => {
                this.props.history.push('/payments');
            });
        }
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

    getTitle(){
        if(this.state.paymentd === '_add'){
            return <h3 className="text-center">Add Payment</h3>
        }else{
            return <h3 className="text-center">Update Payment</h3>
        }
    }
    render() {
        return (
            <div>
                    <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                            {
                                    this.getTitle()
                                }
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
                                            
                                            <button className="btn btn-success" onClick={this.saveOrUpdatePayment}>Save</button>
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

export default CreatePaymentComponent