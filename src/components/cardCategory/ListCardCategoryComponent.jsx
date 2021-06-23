import React, { Component } from 'react';
import CardCategoryService from '../../services/CardCategoryService';


class ListCardCategoryComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cardCategorys: []

        }
        this.addCardCategory = this.addCardCategory.bind(this);
        this.editCardCategory = this.editCardCategory.bind(this);
        this.deleteCardCategory = this.deleteCardCategory.bind(this);
    }

    deleteCardCategory(id){
        CardCategoryService.deleteCardCategory(id).then( res => {
            this.setState({cardCategorys: this.state.cardCategorys.filter(cardCategory => cardCategory.id !== id)});
        });
    }

    viewCardCategory(id){
        this.props.history.push(`/view-cardCategory/${id}`);
    }

    editCardCategory(id){
        this.props.history.push(`/add-cardCategory/${id}`);
    }
    componentDidMount(){
        CardCategoryService.getCardCategorys().then((res) => {
            this.setState({ cardCategorys: res.data});
        });
    }

    addCardCategory(){
        this.props.history.push('/add-cardCategory/_add');
    }


    render() {
        return (
            <div>
                <h2 className="text-center"> Card Categorys List </h2>
                <div className = "row">
                     <button className = "btn btn-primary"  onClick = {this.addCardCategory}> Add Card Category </button>
                </div>
                <div className ="row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> Card Category ID </th>
                                <th> Card Category DESCRIPTION </th>
                                <th> Card Category MARK </th>
                                <th> Card Category NAME </th>
                                <th> Actions </th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {
                                this.state.cardCategorys.map(
                                    cardCategory => 
                                    <tr key = {cardCategory.id}>
                                        <td> {cardCategory.id}</td>
                                        <td> {cardCategory.description}</td>
                                        <td> {cardCategory.mark}</td>
                                        <td> {cardCategory.name}</td>
                                        <td>
                                            <button onClick = { () => this.editCardCategory(cardCategory.id)} className="btn btn-info">Update </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCardCategory(cardCategory.id)} className="btn btn-danger">Delete </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.viewCardCategory(cardCategory.id)} className="btn btn-info">View </button>
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

export default ListCardCategoryComponent