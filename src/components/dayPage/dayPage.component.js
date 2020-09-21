import React, { Component } from 'react';

import './dayPage.component.css';

export default class DayPageComponent extends Component {

  state = {
    title: 'sample title',
    description: 'sample description',
  }

  handleTitleChange = (event) => {    
    this.setState({ title: event.target.value });
  }

  handleDescriptionChange = (event) => {
    this.setState({ description: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {  

    return(
      <div className="day-page">
        <h2 className="day-page-title">{ this.props.startDate.toISOString() }</h2>
        <form onSubmit={ this.handleSubmit } >
          <input 
          type="text" 
          name="titile" 
          value={ this.state.title }
          onChange={ this.handleTitleChange } 
          />

          <input 
          type="text" 
          name="description"
          value={ this.state.description } 
          onChange={ this.handleDescriptionChange }
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
