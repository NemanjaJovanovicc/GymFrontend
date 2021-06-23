import React, { Component } from 'react';
import MemberService from '../../services/MemberService'



import { InputGroup, FormControl, Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faStepBackward, faFastBackward, faStepForward, faFastForward} from '@fortawesome/free-solid-svg-icons';



class ListMemberComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            members: [],
            curentPage : 1,
            membersPrePage : 2,
            search: ''

        }
        this.addMember = this.addMember.bind(this);
        this.editMember = this.editMember.bind(this);
        this.deleteMember = this.deleteMember.bind(this);
    }

    deleteMember(id){
        MemberService.deleteMember(id).then( res => {
            this.setState({members: this.state.members.filter(member => member.id !== id)});
        });
    }

    viewMember(id){
        this.props.history.push(`/view-member/${id}`);
    }

    editMember(id){
        this.props.history.push(`/add-member/${id}`);
    }
    componentDidMount(){
        MemberService.getMembers().then((res) => {
            this.setState({ members: res.data});
        });
    }

    addMember(){
        this.props.history.push('/add-member/_add');
    }

    changePage = event => {
        this.setState({
            [event.target.name]: parseInt(event.target.value)
        });
    };

    firstPage = () => {
        if(this.state.currentPage > 1) {
            this.setState({
                currentPage: 1
            });
        }
    };

    prevPage = () => {
        if(this.state.currentPage > 1) {
            this.setState({
                currentPage: this.state.currentPage - 1
            });
        }
    };

    lastPage = () => {
        if(this.state.currentPage < Math.ceil(this.state.members.length / this.state.membersPerPage)) {
            this.setState({
                currentPage: Math.ceil(this.state.members.length / this.state.membersPerPage)
            });
        }
    };

    nextPage = () => {
        if(this.state.currentPage < Math.ceil(this.state.members.length / this.state.membersPerPage)) {
            this.setState({
                currentPage: this.state.currentPage + 1
            });
        }
    };

    updateSearch(event) {
        this.setState({search:event.target.value.substr(0,20)});
    }


    render() {


        const {members, currentPage, membersPerPage} = this.state;
        let filteredMembers = members.filter(
            (member) => {
                return member.name.toLowerCase().indexOf(
                    this.state.search.toLowerCase()) !== -1;
            }
          )

        
        const lastIndex = currentPage * membersPerPage;
        const firstIndex = lastIndex - membersPerPage;
        const currentMembers = filteredMembers.slice(firstIndex, lastIndex);
        const totalPages = Math.floor(members.length / membersPerPage)+1;

          const sortMembers = (currentMembers, ascending) => {
            return currentMembers.sort((memberA, memberB) => {
              if (ascending) {
                return memberA.memberId > memberB.memberId ? 1 : -1;
              } else {
                return memberA.memberId < memberB.membersId ? 1 : -1;
              }
            }); 
          };

        const queryParams = new URLSearchParams(this.props.location.search);
        const isSortingAscending = queryParams.get('sort') === 'asc';
        const sortedMembers = sortMembers(currentMembers, isSortingAscending);

        const changeSortingHandler = () => {
            this.props.history.push({
              pathname: this.props.location.pathname,
              search: `?sort=${(isSortingAscending ? 'desc' : 'asc')}`
            });
          };

        /* const{sortType} = this.state;

        const sortedBooks = filteredBooks.sort( (a, b) =>{
            let isReversed = (sortType === 'asc') ? 1:-1
            return isReversed = a.title.localeCompare(b.title)
        }); */


        /* const favoritesCtx = useContext(FavoritesContext);
        const itemIsFavorite = favoritesCtx.itemIsFavorite(props.bookId);

        function toggleFavoriteStatusHandler() {
            if (itemIsFavorite) {
            favoritesCtx.removeFavorite(props.bookId);
            } else {
            favoritesCtx.addFavorite({
                bookId: props.bookId,
                title: props.title,
                description: props.description,
                numberOfPages: props.numberOfPages,
                status: props.status,
                quantity: props.quantity
            });
            }
        } */

        const pageNumCss = {
            width: "45px",
            border: "1px solid #17A2B8",
            color: "#17A2B8",
            textAlign: "center",
            fontWeight: "bold"
        };
        /*
        let filteredMembers = this.props.members.filter(
            (member) => {
                return member.name.toLowerCase().indexOf(this.state.
                    search.toLowerCase()) !== -1;
            }
        )
        */
        return (
            <div>
                <div className={"sorting"}> 
                    <button onClick={changeSortingHandler}>
                        Sort {this.isSortingAscending ? 'Descending' : 'Ascending'} 
                    </button>
                </div>
                <h2 className="text-center"> Members List </h2>
{ /*
                <ul>
                    {filteredMembers.map((member)=> {
                        return <MemberService members = {member}
                        key={member.id}/>
                    })}
                </ul>
                
                <input type="text"
                value={this.state.search}
                onChange={this.updateSearch.bind(this)} />
                */}
                <div className = "row">
                     <button className = "btn btn-primary"  onClick = {this.addMember}> Add Member </button>
                </div>
                <div className ="row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> Member ID </th>
                                <th> Member ADRESS </th>
                                <th style={{ width : '200 px'}}>Member CONTACT </th>
                                <th> Member JMBG </th>
                                <th> Member NAME </th>
                                <th> Member Status </th>
                                <th> Member SURNAME </th>
                                <th style={{ width : '600 px'}} > Actions </th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {
                                this.state.members.id === 0 ?
                                <tr align="center">
                                  <td colSpan="6">No Members Available.</td>
                                </tr> :
                                /*sortedMembers.map((member) => (*/
                                    this.state.members.map(
                                        member =>
                                    <tr key = {member.id}>
                                        <td> {member.id}</td>
                                        <td> {member.adress}</td>
                                        <td> {member.contact}</td>
                                        <td> {member.jmbg}</td>
                                        <td> {member.name}</td>
                                        <td> {member.status}</td>
                                        <td> {member.surname}</td>
                                        <td>
                                            <button onClick = { () => this.editMember(member.id)} className="btn btn-info">Update </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteMember(member.id)} className="btn btn-danger">Delete </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.viewMember(member.id)} className="btn btn-info">View </button>
                                        </td>

                                    </tr>
                                )
                                }
                        </tbody>
                    </table>
                    <div style={{"float":"left"}}>
                                Showing Page {currentPage} of {totalPages}
                            </div>
                            <div style={{"float":"right"}}>
                                <InputGroup size="sm">
                                    <InputGroup.Prepend>
                                        <Button type="button" variant="outline-info" disabled={currentPage === 1 ? true : false}
                                            onClick={this.firstPage}>
                                            <FontAwesomeIcon icon={faFastBackward} /> First
                                        </Button>
                                        <Button type="button" variant="outline-info" disabled={currentPage === 1 ? true : false}
                                            onClick={this.prevPage}>
                                            <FontAwesomeIcon icon={faStepBackward} /> Prev
                                        </Button>
                                    </InputGroup.Prepend>
                                    <FormControl style={pageNumCss} className={"bg-dark"} name="currentPage" value={currentPage}
                                        onChange={this.changePage}/>
                                    <InputGroup.Append>
                                        <Button type="button" variant="outline-info" disabled={currentPage === totalPages ? true : false}
                                            onClick={this.nextPage}>
                                            <FontAwesomeIcon icon={faStepForward} /> Next
                                        </Button>
                                        <Button type="button" variant="outline-info" disabled={currentPage === totalPages ? true : false}
                                            onClick={this.lastPage}>
                                            <FontAwesomeIcon icon={faFastForward} /> Last
                                        </Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </div>
                </div>
            </div>

        );
    }
}

export default ListMemberComponent