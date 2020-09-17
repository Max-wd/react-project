import React, { Component } from 'react';
import { YearPage, NavBar, Month, DayPage } from './components';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import './App.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/" exact render={() => {
            const today = new Date();
            const redirectPath = `/year/${today.getFullYear()}`;
            return (<Redirect to={ redirectPath } />);
          }} />

          <Route path="/year/current" exact render={() => {
            const today = new Date();
            const redirectPath = `/year/${today.getFullYear()}`;
            return (<Redirect to={ redirectPath } />);
          }} />

          <Route path="/year/current/month/current" exact render={() => {
            const today = new Date();
            const redirectPath = `/year/${today.getFullYear()}/month/${today.getMonth() + 1}`;
            return (<Redirect to={ redirectPath } />);
          }} />

          <Route path="/today" exact render={() => {
            const today = new Date();
            const redirectPath = `/year/${today.getFullYear()}/month/${today.getMonth() + 1}/day/${today.getDate()}`;
            return (<Redirect to={ redirectPath } />);
          }} />

        <Route path='/year/:year/month/:month/day/:day' exact render={({ match }) => {
            return (
              <div className="day-page">
                <DayPage startDate={new Date(
                  Number(match.params.year),
                  Number(match.params.month) - 1,
                  Number(match.params.day))
                }/>
              </div>
            )
          }}/>

          <Route path="/year/:year" exact render={({ match }) => {
            return (
              <YearPage year={ match.params.year }/>
            )
          }}/>  

          <Route path="/year/:year/month/:month" exact render={({ match }) => {
            return (
              <div className="month-page">
                <Month startDate={new Date(
                  Number(match.params.year), 
                  Number(match.params.month) - 1 
                )}/>
              </div>
            )
          }}/>
        </Switch>
      </Router>         
    )
  }
}