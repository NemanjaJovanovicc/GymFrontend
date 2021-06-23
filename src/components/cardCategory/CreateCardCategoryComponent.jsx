import React, { Component } from 'react';
import CardCategoryService from '../../services/CardCategoryService';

class CreateCardCategoryComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cardCategoryid: this.props.match.params.cardCategoryid,
            id: '',
            description: '',
            mark: '',
            name: ''
        }
        this.changeIdHandler = this.changeIdHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeMarkHandler = this.changeMarkHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.saveOrUpdateCardCategory = this.saveOrUpdateCardCategory.bind(this);
    }
    componentDidMount(){

    
        if(this.state.cardCategoryid === '_add'){
            return
        }else{
            CardCategoryService.getCardCategoryById(this.state.cardCategoryid).then( (res) =>{
                let cardCategory = res.data;
                this.setState({id: cardCategory.id,
                    description: cardCategory.description,
                    mark: cardCategory.mark,
                    name: cardCategory.name
                });
            });
        }        
    }


    saveOrUpdateCardCategory = (e) => {
        e.preventDefault();
        let cardCategory = {id: this.state.id, description: this.state.description, mark: this.state.mark, name: this.state.name};
        console.log('cardCategory => ' + JSON.stringify(cardCategory));

        if(this.state.cardCategoryid === '_add'){
            CardCategoryService.createCardCategory(cardCategory).then(res =>{
                this.props.history.push('/cardCategorys');
            });
        }else{
            CardCategoryService.updateCardCategory(cardCategory, this.state.cardCategoryid).then( res => {
                this.props.history.push('/cardCategorys');
            });
        }
    }

    changeIdHandler= (event) => {
        this.setState({id: event.target.value});
    }
    changeDescriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }
    changeMarkHandler= (event) => {
        this.setState({mark: event.target.value});
    }
    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    cancel(){
        this.props.history.push('/cardCategorys');
    }

    getTitle(){
        if(this.state.cardCategoryid === '_add'){
            return <h3 className="text-center">Add Card Category</h3>
        }else{
            return <h3 className="text-center">Update Card Category</h3>
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
                                                <label> Card Category ID</label>
                                                <input placeholder="CardCategory id" name="id" className="form-control" 
                                                value={this.state.id} onChange={this.changeIdHandler} />
                                            </div>
                                            <div className = "form-group">
                                                <label> Card Category Description</label>
                                                <input placeholder="CardCategory description" name="description" className="form-control" 
                                                value={this.state.description} onChange={this.changeDescriptionHandler} />
                                            </div>
                                            <div className = "form-group">
                                                <label> Card Category Mark </label>
                                                <input placeholder="CardCategory mark" name="mark" className="form-control" 
                                                value={this.state.mark} onChange={this.changeMarkHandler} />
                                            </div>
                                            <div className = "form-group">
                                                <label> Card Category Name </label>
                                                <input placeholder="CardCategory name" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler} />
                                            </div>
                                
                                            <button className="btn btn-success" onClick={this.saveOrUpdateCardCategory}>Save</button>
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

export default CreateCardCategoryComponent