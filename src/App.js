import React, { Component } from 'react';
import { YearPage, NavBar, Month, DayPage } from './components';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { todoService } from './services/todo.service';
import { get } from 'lodash';

import './App.css';

export default class App extends Component {

  state = {
    todos: todoService.load(),
  }

  componentDidMount() {
    todoService.addEventListener('update', this.handleTodoUpdate);
  }

  componentWillUnmount() {
    todoService.removeEventListener('update', this.handleTodoUpdate);
  }
  
  handleTodoUpdate = (event) => {
    this.setState({
      todos: event.detail,
    });    
  }

  render() { 
    const { todos } = this.state;

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
            return (<Redirect to={ redirectPath }/>);
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
              <DayPage 
                year={ Number(match.params.year) } 
                month={ Number(match.params.month) }
                day={ Number(match.params.day) }   
                todos={ get(todos, [match.params.year, match.params.month, match.params.day], []) }             
              />
            )
          }}/>

          <Route path="/year/:year" exact render={({ match }) => {
            return (
              <YearPage 
                year={ Number(match.params.year) } 
                todos={ get(todos, match.params.year, {}) }
              />
            )
          }}/>  

          <Route path="/year/:year/month/:month" exact render={({ match }) => {
            return (
              <div className="month-page">
                <Month 
                  year={ Number(match.params.year) } 
                  month={ Number(match.params.month) }
                  todos={ get(todos, [match.params.year, match.params.month], {}) }
                />
              </div>
            )
          }}/>
        </Switch>
      </Router>         
    )
  }
}
