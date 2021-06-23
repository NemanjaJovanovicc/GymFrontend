import React, { Component } from 'react';
import PaymentService from '../../services/PaymentService';
;


class ListPaymentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            payments: []

        }
        this.addPayment = this.addPayment.bind(this);
        this.editPayment = this.editPayment.bind(this);
        this.deletePayment = this.deletePayment.bind(this);
    }

    deletePayment(id){
        PaymentService.deletePayment(id).then( res => {
            this.setState({payments: this.state.payments.filter(payment => payment.id !== id)});
        });
    }

    viewPayment(id){
        this.props.history.push(`/view-payment/${id}`);
    }

    editPayment(id){
        this.props.history.push(`/add-payment/${id}`);
    }
    componentDidMount(){
        PaymentService.getPayments().then((res) => {
            this.setState({ payments: res.data});
        });
    }

    addPayment(){
        this.props.history.push('/add-payment/_add');
    }


    render() {
        return (
            <div>
                <h2 className="text-center"> Payments List </h2>
                <div className = "row">
                     <button className = "btn btn-primary"  onClick = {this.addPayment}> Add Payment </button>
                </div>
                <div className ="row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> Payment ID </th>
                                <th> Payment AMOUNT </th>
                                <th> PAYMENT DATE </th>
                                <th> Actions </th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {
                                this.state.payments.map(
                                    payment => 
                                    <tr key = {payment.id}>
                                        <td> {payment.id}</td>
                                        <td> {payment.amount}</td>
                                        <td> {payment.paymentdate}</td>
                                        <td>
                                            <button onClick = { () => this.editPayment(payment.id)} className="btn btn-info">Update </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deletePayment(payment.id)} className="btn btn-danger">Delete </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.viewPayment(payment.id)} className="btn btn-info">View </button>
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

export default ListPaymentComponent