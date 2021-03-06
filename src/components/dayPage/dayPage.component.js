import React, { Component } from 'react';
import { startCase, find, pick } from 'lodash';
import Todo from '../../models/todo.model';
import { todoService } from '../../services/todo.service';

import './dayPage.component.css';

export default class DayPageComponent extends Component {

  state = {
    currentTodo: null,
    isFormVisible: false,
  }

  handleTitleChange = (event) => {    
    this.setState({ 
      currentTodo: {
        ...this.state.currentTodo,
        title: event.target.value,
      } 
    });
  }

  handleDescriptionChange = (event) => {
    this.setState({ 
      currentTodo: {
        ...this.state.currentTodo,
        description: event.target.value
      } 
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    todoService.upsertTodo(pick(this.props, ['year', 'month', 'day']), this.state.currentTodo);  
    
    this.setState({
      currentTodo: null,
      isFormVisible: false,
    })
  }

  handleTodoClick = (event) => {
    const id = event.currentTarget.dataset.id;
    const currentTodo = find(this.props.todos, { id });

    this.setState({
      currentTodo,
      isFormVisible: true,
    });
  }

  handleAddButtonClick = () => {
    const currentTodo = new Todo();

    this.setState({
      currentTodo,
      isFormVisible: true,
    });
  }

  handleDeleteButtonClick = (event) => {
    event.preventDefault();
    todoService.deleteTodo(pick(this.props, ['year', 'month', 'day']), this.state.currentTodo);
    this.setState({
      currentTodo: null,
      isFormVisible: false,
    });
  } 

  render() {
    const { year, month, day } = this.props;
    const today = new Date(year, month - 1, day);
    const title = today.toLocaleString('default', { weekday: 'long', day: 'numeric', month: 'long' });  
    
    return(
      <div className="day-page">
        <h2 className="day-page-title">{ startCase(title) }</h2>

        { this.props.todos.map(todo => (
          <div 
            key={ todo.id } 
            className="todo-item" 
            onClick={ this.handleTodoClick }
            data-id={ todo.id }
          >
            <div>{ todo.title }</div>
            <div>{ todo.description }</div>
          </div>
        ))}
        
        { this.state.isFormVisible ? 
          <form onSubmit={ this.handleSubmit } >
            <input 
            type="text" 
            name="title"
            placeholder='TITLE' 
            value={this.state.currentTodo.title}
            onChange={ this.handleTitleChange } 
            />

            <input 
            type="text" 
            name="description"
            placeholder='DESCRIPTION'
            value={ this.state.currentTodo.description } 
            onChange={ this.handleDescriptionChange }
            />
            <div className="buttons">
              <input type="submit" value="Submit" />
              <button onClick={ this.handleDeleteButtonClick }>delete</button> 
            </div>
                          
          </form> : <button onClick={ this.handleAddButtonClick }>Add</button>  }
      </div>
    )
  }
}
