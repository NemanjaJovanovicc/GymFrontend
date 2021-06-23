import React, { Component } from 'react';
import MemberService from '../../services/MemberService';

class CreateMemberComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            memberid: this.props.match.params.memberid,
            id: '',
            adress: '',
            contact: '',
            jmbg: '',
            name: '',
            status: '',
            surname: '',
            cardCategory: null,
            payment: null,
        }
        this.changeIdHandler = this.changeIdHandler.bind(this);
        this.changeAdressHandler = this.changeAdressHandler.bind(this);
        this.changeContactHandler = this.changeContactHandler.bind(this);
        this.changeJmbgHandler = this.changeJmbgHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeStatusHandler = this.changeStatusHandler.bind(this);
        this.changeSurnameHandler = this.changeSurnameHandler.bind(this);
        this.changeCardCategoryHandler = this.changeCardCategoryHandler.bind(this);
        this.changePaymentHandler = this.changePaymentHandler.bind(this);
    }
    componentDidMount(){

    
        if(this.state.memberid === '_add'){
            return
        }else{
            MemberService.getMemberById(this.state.memberid).then( (res) =>{
                let member = res.data;
                this.setState({id: member.id,
                    adress: member.adress,
                    contact: member.contact,
                    jmbg : member.jmbg,
                    name: member.name,
                    status : member.status,
                    surname: member.surname,
                    cardCategory: member.cardCategory,
                    payment: member.payment
                });
            });
        }        
    }


    saveOrUpdateMember = (e) => {
        e.preventDefault();
        let member = {id: this.state.id, adress: this.state.adress, contact: this.state.contact, jmbg: this.state.jmbg, name: this.state.name, status: this.state.status, surname: this.state.surname, cardCategory: this.state.cardCategory, payment: this.state.payment};
        console.log(' member => ' + JSON.stringify(member));

        if(this.state.memberid === '_add'){
            MemberService.createMember(member).then(res =>{
                this.props.history.push('/members');
            });
        }else{
            MemberService.updateMember(member, this.state.memberid).then( res => {
                this.props.history.push('/members');
            });
        }
    }

    changeIdHandler= (event) => {
        this.setState({id: event.target.value});
    }
    changeAdressHandler= (event) => {
        this.setState({adress: event.target.value});
    }
    changeContactHandler= (event) => {
        this.setState({contact: event.target.value});
    }
    changeJmbgHandler= (event) => {
        this.setState({jmbg: event.target.value});
    }
    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }
    changeStatusHandler= (event) => {
        this.setState({status: event.target.value});
    }
    changeSurnameHandler= (event) => {
        this.setState({surname: event.target.value});
    }
    changeCardCategoryHandler= (event) => {
        this.setState({description: event.target.value});
    }
    changePaymentHandler= (event) => {
        this.setState({amount: event.target.value});
    }

    cancel(){
        this.props.history.push('/members');
    }

    getTitle(){
        if(this.state.memberid === '_add'){
            return <h3 className="text-center">Add Member</h3>
        }else{
            return <h3 className="text-center">Update Member</h3>
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
                                                <label> Member ID</label>
                                                <input placeholder="Member id" name="id" className="form-control" 
                                                value={this.state.id} onChange={this.changeIdHandler} />
                                            </div>
                                            <div className = "form-group">
                                                <label> Member Adress</label>
                                                <input placeholder="Member adress" name="adress" className="form-control" 
                                                value={this.state.adress} onChange={this.changeAdressHandler} />
                                            </div>
                                            <div className = "form-group">
                                                <label> Member Contact</label>
                                                <input placeholder="Member contact" name="contact" className="form-control" 
                                                value={this.state.contact} onChange={this.changeContactHandler} />
                                            </div>
                                            <div className = "form-group">
                                                <label> Member JMBG</label>
                                                <input placeholder="Member jmbg" name="jmbg" className="form-control" 
                                                value={this.state.jmbg} onChange={this.changeJmbgHandler} />
                                            </div>
                                            <div className = "form-group">
                                                <label> Member Name </label>
                                                <input placeholder="Member name" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler} />
                                            </div>
                                            <div className = "form-group">
                                                <label> Member Status </label>
                                                <input placeholder="Member status" name="status" className="form-control" 
                                                value={this.state.status} onChange={this.changeStatusHandler} />
                                            </div>
                                            <div className = "form-group">
                                                <label> Member Surname </label>
                                                <input placeholder="Member surname" name="surname" className="form-control" 
                                                value={this.state.surname} onChange={this.changeSurnameHandler} />
                                            </div>
                                            <div className = "form-group">
                                                <label> Card Category </label>
                                                <input placeholder="cardCategory description" name="description" className="form-control" 
                                                value={this.state.cardCategory} onChange={this.changeCardCategoryHandler} />
                                            </div>
                                            <div className = "form-group">
                                                <label> Payment  </label>
                                                <input placeholder="Payment amount" name="amount" className="form-control" 
                                                value={this.state.payment} onChange={this.changePaymentHandler} />
                                            </div>
                                            <button className="btn btn-success" onClick={this.saveOrUpdateMember}>Save</button>
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

export default CreateMemberComponent