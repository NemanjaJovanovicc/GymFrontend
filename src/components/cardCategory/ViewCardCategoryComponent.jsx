import React, { Component } from 'react'
import CardCategoryService from '../../services/CardCategoryService';

class ViewCardCategoryComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            cardCategory: {}
        }
    }

    componentDidMount(){
        CardCategoryService.getCardCategoryById(this.state.id).then( res => {
            this.setState({cardCategory: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Card Category Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Card Category ID: </label>
                            <div> { this.state.cardCategory.id }</div>
                        </div>
                        <div className = "row">
                            <label> Card Category Description: </label>
                            <div> { this.state.cardCategory.description }</div>
                        </div>
                        <div className = "row">
                            <label> Card Category Mark: </label>
                            <div> { this.state.cardCategory.mark }</div>
                        </div>
                        <div className = "row">
                            <label> Card Category Name: </label>
                            <div> { this.state.cardCategory.name }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewCardCategoryComponent