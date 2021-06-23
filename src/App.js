import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from './helpers/history';

import ListCoachComponent from './components/coachs/ListCoachComponent';
import CreateCoachComponent from "./components/coachs/CreateCoachComponent";
import ViewCoachComponent from "./components/coachs/ViewCoachComponent";

import ListEmployeeComponent from "./components/employee/ListEmployeeComponent";
import CreateEmployeeComponent from "./components/employee/CreateEmployeeComponent";
import ViewEmployeeComponent from "./components/employee/ViewEmployeeComponent";

import ListWorkoutTypeComponent from './components/workoutType/ListWorkoutTypeComponent';
import CreateWorkoutTypeComponent from './components/workoutType/CreateWorkoutTypeComponent';
import ViewWorkoutTypeComponent from './components/workoutType/ViewWorkoutTypeComponent';
import ListPaymentComponent from "./components/payment/ListPaymentComponent";
import CreatePaymentComponent from "./components/payment/CreatePaymentComponent";
import ViewPaymentComponent from "./components/payment/ViewPaymentComponent";
import ListCardCategoryComponent from "./components/cardCategory/ListCardCategoryComponent";
import CreateCardCategoryComponent from "./components/cardCategory/CreateCardCategoryComponent";
import ViewCardCategoryComponent from "./components/cardCategory/ViewCardCategoryComponent";
import ListMemberComponent from "./components/member/ListMemberComponent";
import CreateMemberComponent from "./components/member/CreateMemberComponent";
import ViewMemberComponent from "./components/member/ViewMemberComponent";
import ListGymCardComponent from "./components/gymCard/ListGymCardComponent";
import ViewGymCardComponent from "./components/gymCard/ViewGymCardComponent";
import ListWorkoutComponent from "./components/workout/ListWorkoutComponent";
import ViewWorkoutComponent from "./components/workout/ViewWorkoutComponent";
import CreateWorkoutComponent from "./components/workout/CreateWorkoutComponent";
import CreateGymCardComponent from "./components/gymCard/CreateGymCardComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };

    history.listen((location) => {
      props.dispatch(clearMessage()); // clear message when changing location
    });
  }

  componentDidMount() {
    const user = this.props.user;

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    this.props.dispatch(logout());
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <Router history={history}>
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
          <i class='fas fa-dragon' />
            <Link to={"/"} className="navbar-brand">
              <b><i>GYM</i></b> 
            </Link>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/home"} className="nav-link">
                  Home
                </Link>
              </li>
{/*
              {showModeratorBoard && (
                <li className="nav-item">
                  <Link to={"/mod"} className="nav-link">
                    Moderator Board
                  </Link>
                </li>
              )}

              {showAdminBoard && (
                <li className="nav-item">
                  <Link to={"/admin"} className="nav-link">
                    Admin Board
                  </Link>
                  <li className="nav-item">
                  <Link to={"/coachs"} className="nav-link">
                  Coachs
                  </Link>
                  </li>
              </li>
              )}*/}

{/*--------------PRIKAZ KOJI ADMIN MOZE DA VIDI KADA SE LOGUJE------------ */}
                  

                  {showAdminBoard && (
                <li className="nav-item">
                <Link to={"/employees"} className="nav-link">
                Employees
                </Link>
                </li>
              )}

                  {showAdminBoard && (
                <li className="nav-item">
                <Link to={"/payments"} className="nav-link">
                Payments
                </Link>
                </li>
              )}

                  {showAdminBoard && (
                <li className="nav-item">
                <Link to={"/cardCategorys"} className="nav-link">
                Card Categorys
                </Link>
                </li>
              )}

                  {showAdminBoard && (
                <li className="nav-item">
                <Link to={"/members"} className="nav-link">
                Members
                </Link>
                </li>
              )}

                  {showAdminBoard && (
                <li className="nav-item">
                <Link to={"/gymCards"} className="nav-link">
                Gym Cards
                </Link>
                </li>
              )}
{/*----------------PRIKAZ KOJI MODERATOR ODNOSNO ZAPOSLENI MOZE DA VIDI-----------*/ }

                  {showModeratorBoard && (
                <li className="nav-item">
                <Link to={"/payments"} className="nav-link">
                Payments
                </Link>
                </li>
              )}

                  {showModeratorBoard && (
                <li className="nav-item">
                <Link to={"/cardCategorys"} className="nav-link">
                Card Categorys
                </Link>
                </li>
              )}

                  {showModeratorBoard && (
                <li className="nav-item">
                <Link to={"/members"} className="nav-link">
                Members
                </Link>
                </li>
              )}

                  {showModeratorBoard && (
                <li className="nav-item">
                <Link to={"/gymCards"} className="nav-link">
                Gym Cards
                </Link>
                </li>
              )}

                  

{/*--------------PRIKAZ KOJI KORISNIK MOZE DA VIDI KADA SE LOGUJE------------ */}
                  {currentUser && (
                <li className="nav-item">
                <Link to={"/workoutTypes"} className="nav-link">
                Workout Types 
                </Link>
                </li>
              )}

                  {currentUser && (
                <li className="nav-item">
                <Link to={"/workouts"} className="nav-link">
                Workouts
                </Link>
                </li>
              )}

                  {currentUser && (
                <li className="nav-item">
                <Link to={"/coachs"} className="nav-link">
                Coachs
                </Link>
                <i class="bi bi-shield-fill-x"/>
                </li>
              )}
      
            {/*
              {currentUser && (
                <li className="nav-item">
                  <Link to={"/user"} className="nav-link">
                    User
                  </Link>
              </li>
              )}*/}
            </div>

            {currentUser ? (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/profile"} className="nav-link">
                    {currentUser.username}
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="/login" className="nav-link" onClick={this.logOut}>
                    LogOut
                  </a>
                </li>
              </div>
            ) : (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    Login
                    <i class="bi bi-person-fill"/>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/register"} className="nav-link">
                    Sign Up
                  </Link>
                </li>
              </div>
            )}
          </nav>

          <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/home"]} component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/profile" component={Profile} />

              <Route path='/coachs' component={ListCoachComponent} />
              <Route path = "/add-coach/:coachid" component = {CreateCoachComponent}></Route>
              <Route path = "/view-coach/:id" component = {ViewCoachComponent}></Route>

              <Route path='/employees' component={ListEmployeeComponent} />
              <Route path = "/add-employee/:employeeid" component = {CreateEmployeeComponent}></Route>
              <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>

              <Route path='/workoutTypes' component={ListWorkoutTypeComponent} />
              <Route path = "/add-workoutType/:workoutTypeid" component = {CreateWorkoutTypeComponent}></Route>
              <Route path = "/view-workoutType/:id" component = {ViewWorkoutTypeComponent}></Route>

              <Route path='/payments' component={ListPaymentComponent} />
              <Route path='/add-payment/:paymentid' component = {CreatePaymentComponent}></Route>
              <Route path='/view-payment/:id' component = {ViewPaymentComponent}></Route>

              <Route path='/cardCategorys' component={ListCardCategoryComponent} />
              <Route path='/add-cardCategory/:cardCategoryid' component = {CreateCardCategoryComponent}></Route>
              <Route path='/view-cardCategory/:id' component = {ViewCardCategoryComponent}></Route>
              
              <Route path='/members' component={ListMemberComponent} />
              <Route path='/add-member/:memberid' component = {CreateMemberComponent}></Route>
              <Route path='/view-member/:id' component = {ViewMemberComponent}></Route>

              <Route path='/gymCards' component={ListGymCardComponent} />
              <Route path='/add-gymCard/:gymCardid' component = {CreateGymCardComponent}></Route>
              <Route path='/view-gymCard/:id' component = {ViewGymCardComponent}></Route>

              <Route path='/workouts' component={ListWorkoutComponent} />
              <Route path='/add-workout/:workoutid' component={CreateWorkoutComponent}></Route>
              <Route path='/view-workout/:id' component = {ViewWorkoutComponent}></Route>

              <Route path="/user" component={BoardUser} />
              <Route path="/mod" component={BoardModerator} />
              <Route path="/admin" component={BoardAdmin} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(App);
